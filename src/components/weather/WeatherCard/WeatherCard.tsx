import { ChevronRight } from "lucide-react";
import { CSSProperties, ReactNode } from "react";
import { BASE_URL } from "../../../config.ts";
import { SearchQuery } from "../../../hooks/useWeather";
import { UnitSystem, WeatherData } from "../../../types/index.ts";
import { Skeleton } from "../../common/Skeleton/Skeleton";
import { GeolocationButton } from "../../search/GeolocationButton/GeolocationButton";
import { UnitToggle } from "../UnitToggle/UnitToggle";
import styles from "./WeatherCard.module.css";

type WeatherCardProps = {
  header: ReactNode;
  children: ReactNode;
  isShifted: boolean;
};

type WeatherHeaderProps = {
  data: WeatherData | null;
  units: UnitSystem;
  isOpen: boolean;
  isLoading: boolean;
  onChange: (changes: Partial<SearchQuery>) => void;
  onUnitChange: (units: UnitSystem) => void;
  onToggleMenu: () => void;
};

export function WeatherCard({
  isShifted,
  header,
  children,
}: WeatherCardProps) {

  return (
    <div className={`${styles.container} ${isShifted ? styles.isShifted : ""}`}
      style={{ "--bg-image": `url(${BASE_URL}assets/grain.jpg)` } as CSSProperties}
    >
      {header}
      <main className={styles.body}>
        {children}
      </main>
    </div>
  );
};

export function WeatherHeader({
  data,
  units,
  isOpen,
  isLoading,
  onChange,
  onUnitChange,
  onToggleMenu
}: WeatherHeaderProps) {
  return (
    <header className={styles.header}>
      <UnitToggle units={units}
        onToggle={onUnitChange}
      />

      <div className={styles.actions}>
        <GeolocationButton onPosition={pos =>
          onChange({
            type: "coords",
            value: {
              lat: pos.coords.latitude,
              lon: pos.coords.longitude
            }
          })}
        />

        <button
          type="button"
          className={`btn-glass btn-glass--pill ${styles.locationPill}`}
          onClick={onToggleMenu}
          aria-label="Toggle location search"
          aria-expanded={isOpen}
        >
          <span className={styles.pillText}>
            <span className={styles.city}>{
              isLoading ? (
                <Skeleton width={100}
                  height="0.875rem"
                />
              ) : (
                data?.name ?? "--"
              )
            }
            </span>
            <span className={styles.country}>
              {!isLoading && `, ${data?.sys.country ?? "--"}`}
            </span>
          </span>

          <ChevronRight aria-hidden="true"
            size={16}
            className={styles.chevron}
          />
        </button>
      </div>
    </header>
  );
}
