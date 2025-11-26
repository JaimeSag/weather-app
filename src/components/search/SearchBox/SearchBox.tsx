import { Search } from "lucide-react";
import { FormEvent, useState } from "react";
import styles from "./SearchBox.module.css";

type SearchBoxPros = {
  isLoading: boolean;
  onSubmit: (city: string) => void;
};

export function SearchBox({
  onSubmit,
  isLoading
}: SearchBoxPros) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (isLoading || !query.trim()) return;

    onSubmit(query);
    setQuery("");
  };

  return (
    <form className={styles.container}
      onSubmit={handleSubmit}
    >
      <div className={styles.group}>
        <input
          type="text"
          className={`input-text ${styles.input}`}
          value={query}
          placeholder="Search city or country..."
          onChange={e => setQuery(e.target.value)}
          aria-label="Search city or country..."
          disabled={isLoading}
        />

        <button
          type="submit"
          className={styles.submit}
          aria-label="Search"
          disabled={isLoading}
        >
          <Search size={16}
            aria-hidden="true"
          />
        </button>
      </div>
    </form>
  );
}
