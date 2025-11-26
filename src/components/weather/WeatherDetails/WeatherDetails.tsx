import { UnitSystem, WeatherData } from "../../../types/index.ts";
import { Skeleton } from "../../common/Skeleton/Skeleton.tsx";
import styles from "./WeatherDetails.module.css";

type WeatherDetailsProps = {
  data: WeatherData | null;
  units: UnitSystem;
  isLoading: boolean;
};

type DetailItemProps = {
  title: string;
  value: number | undefined;
  unit: string;
  isLoading: boolean;
};

export function WeatherDetails({
  data,
  isLoading,
  units
}: WeatherDetailsProps) {
  return (
    <section className={styles.details}>
      <WeatherDetailItem
        isLoading={isLoading}
        title="Wind"
        value={data?.wind.speed}
        unit={units === "metric" ? "m/s" : "mph"}
      />

      <WeatherDetailItem
        isLoading={isLoading}
        title="Humidity"
        value={data?.main.humidity}
        unit="%"
      />

      <WeatherDetailItem
        isLoading={isLoading}
        title="Pressure"
        value={data?.main.pressure}
        unit="hPa"
      />
    </section>
  );
}

export function WeatherDetailItem({
  title,
  value,
  unit,
  isLoading
}: DetailItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <span className={styles.itemTitle}>
          {title}
        </span>
      </div>

      {isLoading ? (
        <Skeleton width="100%"
          height={"1.875rem"}
        />
      ) : (
        <div className={styles.itemContent}>
          <span className={styles.itemValue}>
            {value ?? "--"}
          </span>
          <span className={styles.itemUnit}>{unit}</span>
        </div>)}
    </div>
  );
}
