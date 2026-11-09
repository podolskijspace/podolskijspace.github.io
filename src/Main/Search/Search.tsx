import { Input } from "@/components/Input/Input.tsx";
import s from "./Search.module.css";

export const Search = ({ hasSearch, search, setSearch }: any) => {
  return (
    <section
      className={`${s.card} ${hasSearch ? s.compact : ""}`}
      aria-labelledby="search-title"
    >
      <div className={s.badge}>Ваш следующий киносеанс</div>
      <h1 className={s.title} id="search-title">
        Найдите кино.
        <br /> Останьтесь ради истории.
      </h1>
      <p className={s.description}>
        Любимый фильм или новое открытие — начните с названия.
      </p>
      <Input
        label="Название фильма или сериала"
        type="search"
        name="search"
        placeholder="Например, Интерстеллар"
        value={search}
        onChange={(e) => {
          const value = e.target.value;
          setSearch(value);
        }}
      />
      <p className={s.hint}>
        Одна строка — и вы на шаг ближе к хорошему вечеру.
      </p>
    </section>
  );
};
