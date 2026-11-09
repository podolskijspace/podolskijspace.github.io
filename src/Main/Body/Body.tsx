import { Loading } from "./Loading/Loading";
import { Error } from "./Error/Error";
import { Movie } from "./Movie/Movie";
import s from "./Body.module.css";
import { Button } from "@/components/Button/Button.tsx";

export const Body = (props: any) => {
  const {
    isPending,
    isError,
    data,
    onRetry,
    genres,
    genre,
    onPickGenre,
    withShowMoreBtn,
    onShowMore,
  } = props;

  return (
    <section
      className={s.results}
      aria-labelledby="results-title"
      aria-busy={isPending}
    >
      <div className={s.resultsHeader}>
        <h2 id="results-title">
          {isPending ? "Finding your story…" : "Search results"}
        </h2>
        {!isPending && !isError && data && (
          <span>
            {data.length} {data.length === 1 ? "result" : "results"}
          </span>
        )}
      </div>
      {genres.length > 0 && (
        <div className={s.genres} role="group" aria-label="Genres">
          {genres.map((currGenre) => (
            <button
              key={currGenre}
              type="button"
              className={`${s.genreBadge} ${currGenre === genre ? s.genreBadgeActive : ""}`}
              aria-pressed={currGenre === genre}
              onClick={() => onPickGenre(currGenre)}
            >
              {currGenre}
            </button>
          ))}
        </div>
      )}
      {isPending ? (
        <Loading />
      ) : isError ? (
        <Error onRetry={onRetry} />
      ) : data?.length ? (
        <div>
          <div className={s.grid}>
            {data.map(({ show }) => (
              <Movie show={show} />
            ))}
          </div>
          {withShowMoreBtn && (
            <div className={s.showMore}>
              <Button onClick={onShowMore}>Show more</Button>
            </div>
          )}
        </div>
      ) : (
        <div className={s.message} role="status">
          <h3>No results yet</h3>
          <p>Try a different title or search for the original title.</p>
        </div>
      )}
    </section>
  );
};
