import { ChevronRight, LucideIcon, MapPin, MapPinned } from "lucide-react";
import { ReactNode } from "react";
import { City } from "../../../types/index.ts";
import styles from "./CityList.module.css";

type CityListItemProps = {
  city: City;
  onSelect: () => void;
};

type CitiesSectionProps = {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
};

type CityListProps = {
  cities: City[];
  onSelect: (city: string) => void;
};

export function CitiesSection({
  title,
  icon: Icon = MapPinned,
  children
}: CitiesSectionProps) {
  return (
    <div>
      <div className={styles.header}>
        <Icon className={styles.headerIcon}
          aria-hidden="true"
        />
        <h3 className={styles.title}>{title}</h3>
      </div>

      {children}
    </div>
  );
}

export function CityList({ cities, onSelect }: CityListProps) {
  return (
    <ul className={styles.list}>
      {
        cities.map(city => (
          <CityListItem key={city.city}
            city={city}
            onSelect={() => onSelect(city.city)}
          />
        ))
      }
    </ul>
  );
}

export function CityListItem({ city, onSelect }: CityListItemProps) {
  return (
    <li key={city.city}>
      <button
        type="button"
        className={styles.item}
        onClick={onSelect}
        aria-label={`Select ${city.city}, ${city.country}`}
      >
        <span className={styles.itemIcon}
          aria-hidden="true"
        >
          <MapPin size={18} />
        </span>

        <span className={styles.itemInfo}>
          <span className={styles.itemCity}>{city.city}</span>
          <span className={styles.itemMeta}>
            {city.country} • {city.region}
          </span>
        </span>

        <ChevronRight className={styles.itemArrow}
          aria-hidden="true"
        />
      </button>
    </li>
  );
}
