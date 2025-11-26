import { useEffect, useMemo, useState } from "react";
import { API_KEY, API_URL } from "../config.ts";
import { Coord, UnitSystem, WeatherData } from "../types/index.ts";

export type SearchQuery =
  | { type: "city", value: string }
  | { type: "coords", value: Coord };

const toCelcius = (fahrenheit: number) => (fahrenheit - 32) * 5 / 9;
const toMs = (mph: number) => mph / 2.237;

export function useWeather() {
  const [rawData, setRawData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    type: "city",
    value: "Wellington"
  });

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = new URL(API_URL);
        url.searchParams.append("units", "imperial");
        url.searchParams.append("appid", API_KEY);

        if (searchQuery.type === "city") {
          url.searchParams.append("q", searchQuery.value);
        } else {
          url.searchParams.append("lat", searchQuery.value.lat.toString());
          url.searchParams.append("lon", searchQuery.value.lon.toString());
        }

        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) throw new Error("Failed to fetch weather data.");

        const result: WeatherData = await response.json();

        setRawData(result);
      } catch (error: unknown) {
        if (error instanceof Error && error.name === "AbortError") return;

        const message = error instanceof Error ? error.message : "An unexpected error occurred.";

        setError(message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [searchQuery.type, searchQuery.value]);

  const data = useMemo(() => {
    if (!rawData) return null;

    if (units === "imperial") return rawData;

    return {
      ...rawData,
      main: {
        ...rawData.main,
        temp: toCelcius(rawData.main.temp),
        feels_like: toCelcius(rawData.main.feels_like),
        temp_min: toCelcius(rawData.main.temp_min),
        temp_max: toCelcius(rawData.main.temp_max),
      },
      wind: {
        ...rawData.wind,
        speed: Number(toMs(rawData.wind.speed).toFixed(2))
      }
    };
  }, [rawData, units]);

  return { data, units, loading, error, searchQuery, setSearchQuery, setUnits };
}
