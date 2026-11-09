import s from "./Movie.module.css";

export const Movie = ({ show }: any) => {
  return (
    <article className={s.movie} key={show.id}>
      <a
        className={s.movieLink}
        href={show.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className={s.poster}>
          <span className={s.noPoster}>Постер пока за кадром</span>
          {show.image?.medium && (
            <img
              src={show.image.medium}
              alt=""
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
          {show.rating?.average != null && (
            <span
              className={s.rating}
              aria-label={`Рейтинг ${show.rating.average} из 10`}
            >
              ★ {show.rating.average.toFixed(1)}
            </span>
          )}
        </div>
        <div className={s.movieBody}>
          <h3>{show.name}</h3>
          <p>
            {[show.premiered?.slice(0, 4), show.language]
              .filter(Boolean)
              .join(" · ") || "Детали скоро появятся"}
          </p>
          <span className={s.genres}>
            {show.genres.slice(0, 2).join(" / ") || "Без жанра"}
          </span>
          <span className={s.details}>Подробнее на TVmaze ↗</span>
        </div>
      </a>
    </article>
  );
};
