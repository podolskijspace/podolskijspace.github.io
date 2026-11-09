import { Fragment } from "react";
import s from "./Loading.module.css";

export const Loading = () => {
  return (
    <Fragment>
      <p className={s.srOnly} role="status">
        Загружаем результаты поиска
      </p>
      <div className={s.grid} aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className={s.movie}>
            <div className={`${s.poster} ${s.skeleton}`} />
            <div className={s.movieBody}>
              <div className={`${s.skeleton} ${s.skeletonTitle}`} />
              <div className={`${s.skeleton} ${s.skeletonMeta}`} />
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
