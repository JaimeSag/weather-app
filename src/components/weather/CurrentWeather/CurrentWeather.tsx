import { Skeleton } from "../../common/Skeleton/Skeleton";
import styles from "./CurrentWeather.module.css";

type CurrentWeatherProps = {
  temp: number | undefined;
  condition: string | undefined;
  icon: string | undefined;
  unit: "C" | "F";
  isLoading: boolean;
};

export function CurrentWeather({
  icon,
  temp,
  unit,
  condition,
  isLoading
}: CurrentWeatherProps) {
  return (
    <section className={styles.container}>
      <div className={styles.iconContainer}>
        <svg className={styles.backIcon}
          width={200}
          height={200}
          aria-hidden="true"
        >
          <use xlinkHref={`/assets/sprite.svg#${icon}`}></use>
        </svg>

        <svg className={styles.icon}
          width={200}
          height={200}
          aria-hidden="true"
        >
          <use xlinkHref={`/assets/sprite.svg#${icon}`}></use>
        </svg>
      </div>

      <div className={styles.temp}>
        {
          isLoading ? (
            <Skeleton width={200}
              height="5rem"
            />
          ) : (
            <>
              {Math.round(temp ?? NaN) || "--"}°
              <span className="text-small">{unit}</span>
            </>
          )
        }
      </div>

      <div className={styles.state}>
        {
          isLoading ? (
            <Skeleton width={80}
              height="1.5rem"
            />
          ) : (
            condition ?? "--"
          )
        }
      </div>
    </section>
  );
}
