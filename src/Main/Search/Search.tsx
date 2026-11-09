import { Input } from "@/components/Input/Input.tsx";
import s from "./Search.module.css";
import type { Dispatch } from "react";

interface Props {
  hasSearch: boolean;
  search: string;
  onSearch: Dispatch<string>;
}
export const Search = ({ hasSearch, search, onSearch }: Props) => {
  return (
    <section
      className={`${s.card} ${hasSearch ? s.compact : ""}`}
      aria-labelledby="search-title"
    >
      <div className={s.badge}>Your next movie night</div>
      <h1 className={s.title} id="search-title">
        Find a film.
        <br /> Stay for the story.
      </h1>
      <p className={s.description}>
        An old favorite or a new discovery — start with a title.
      </p>
      <Input
        label="Movie or TV show title"
        type="search"
        name="search"
        placeholder="For example, Interstellar"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <p className={s.hint}>One search brings you closer to a great evening.</p>
    </section>
  );
};
