import { UnitSystem } from "../../../types/index.ts";
import styles from "./UnitToggle.module.css";

export type UnitToggleProps = {
  units: UnitSystem;
  onToggle: (unit: UnitSystem) => void;
};

const TOGGLE_OPTIONS = [
  { value: "metric", label: "°C" },
  { value: "imperial", label: "°F" },
];

export function UnitToggle({
  units,
  onToggle
}: UnitToggleProps) {
  return (
    <div className={styles.container}
      role="group"
      aria-label="Unit selection"
    >
      <div className={styles.bg}
        aria-hidden="true"
      >
      </div>
      {
        TOGGLE_OPTIONS.map(option =>
          <label key={option.value}
            className={styles.label}
          >
            <input
              type="radio"
              className={styles.input}
              name="units"
              value={option.value}
              checked={units === option.value}
              onChange={e => onToggle(e.target.value as UnitSystem)}
            />
            <span className={styles.text}>{option.label}</span>
          </label>
        )
      }
    </div>
  );
}
