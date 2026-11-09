import { Loading } from "./Loading/Loading";
import { Error } from "./Error/Error";
import s from "./Body.module.css";
import type { Movie } from "@/types/Movie.ts";
import type { Dispatch, DispatchWithoutAction } from "react";
import { Empty } from "./Empty/Empty.tsx";
import { Movies } from "@/Main/Body/Movies/Movies.tsx";

interface Props {
  isPending: boolean;
  isError: boolean;
  movies: Movie[];
  onRetry: DispatchWithoutAction;
  genres: Movie.Genre[];
  genre: Movie.Genre;
  onPickGenre: Dispatch<Movie.Genre>;
  withShowMoreBtn: Boolean;
  onShowMore: DispatchWithoutAction;
}
export const Body = (props: Props) => {
  const {
    isPending,
    isError,
    movies,
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
        {!isPending && !isError && movies && (
          <span>
            {movies.length} {movies.length === 1 ? "result" : "results"}
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
      ) : movies?.length ? (
        <Movies
          movies={movies}
          onShowMore={onShowMore}
          withShowMoreBtn={withShowMoreBtn}
        />
      ) : (
        <Empty />
      )}
    </section>
  );
};
