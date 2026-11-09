import { Loading } from "./Loading/Loading";
import { Error } from "./Error/Error";
import { Movie } from "./Movie/Movie";
import s from "./Body.module.css";

export const Body = (props: any) => {
  const { isPending, isError, data, onRetry } = props;

  return (
    <section
      className={s.results}
      aria-labelledby="results-title"
      aria-busy={isPending}
    >
      <div className={s.resultsHeader}>
        <h2 id="results-title">
          {isPending ? "Ищем вашу историю…" : "Результаты поиска"}
        </h2>
        {!isPending && !isError && data && (
          <span>{data.length} в подборке</span>
        )}
      </div>
      {isPending ? (
        <Loading />
      ) : isError ? (
        <Error onRetry={onRetry} />
      ) : data?.length ? (
        <div className={s.grid}>
          {data.map(({ show }) => (
            <Movie show={show} />
          ))}
        </div>
      ) : (
        <div className={s.message} role="status">
          <h3>Пока ничего не нашлось</h3>
          <p>Попробуйте другое название или название на языке оригинала.</p>
        </div>
      )}
    </section>
  );
};
