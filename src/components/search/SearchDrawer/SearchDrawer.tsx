import { X } from "lucide-react";
import { CSSProperties } from "react";
import { BASE_URL } from "../../../config.ts";
import { SearchQuery } from "../../../hooks/useWeather";
import { City } from "../../../types/index.ts";
import { CitiesSection, CityList } from "../CityList/CityList";
import { SearchBox } from "../SearchBox/SearchBox";
import styles from "./SearchDrawer.module.css";

type SearchDrawerProps = {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onSubmit: (changes: Partial<SearchQuery>) => void;
};

const POPULAR_CITIES: City[] = [
  { city: "New York", country: "US", region: "North America" },
  { city: "London", country: "UK", region: "Europe" },
  { city: "Tokyo", country: "JP", region: "Asia" },
  { city: "Paris", country: "FR", region: "Europe" },
  { city: "Sydney", country: "AU", region: "Oceania" },
];

export function SearchDrawer({
  isOpen,
  isLoading,
  onClose,
  onSubmit
}: SearchDrawerProps) {
  const handleSearch = (city: string) => onSubmit({ type: "city", value: city });

  return (
    <aside className={`${styles.container} ${isOpen ? styles.visible : ""}`}
      style={{ "--bg-image": `url(${BASE_URL}assets/grain.jpg)` } as CSSProperties}
    >
      <SearchDrawerHeader onClose={onClose} />

      <SearchBox onSubmit={handleSearch}
        isLoading={isLoading}
      />

      <div className={styles.content}>
        <CitiesSection title="Popular Cities">
          <CityList cities={POPULAR_CITIES}
            onSelect={handleSearch}
          />
        </CitiesSection>
      </div>
    </aside>
  );
}

export function SearchDrawerHeader({
  onClose
}: { onClose: () => void }) {
  return (
    <div className={styles.header}>
      <div>
        <h2 className={styles.title}>Search Location</h2>
        <p className={styles.subtitle}>Find your city or country</p>
      </div>
      <button
        type="button"
        className="btn-glass btn-glass--circle"
        onClick={onClose}
        aria-label="Close drawer"
      >
        <X size={16}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
