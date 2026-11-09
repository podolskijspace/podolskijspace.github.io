import type { Movie } from "@/types/Movie.ts";
import type { DispatchWithoutAction } from "react";
import { MovieItem } from "./MovieItem/MovieItem.tsx";
import { Button } from "@/components/Button/Button.tsx";
import s from "./Movies.module.css";

interface Props {
  movies: Movie[];
  onShowMore: DispatchWithoutAction;
  withShowMoreBtn: Boolean;
}
export const Movies = ({ movies, onShowMore, withShowMoreBtn }: Props) => {
  return (
    <div>
      <div className={s.grid}>
        {movies.map(({ show }) => (
          <MovieItem show={show} />
        ))}
      </div>
      {withShowMoreBtn && (
        <div className={s.showMore}>
          <Button onClick={onShowMore}>Show more</Button>
        </div>
      )}
    </div>
  );
};
