import s from "./Error.module.css";

export const Error = ({ onRetry }: any) => {
  return (
    <div className={s.message} role="alert">
      <h3>Кажется, сеанс прервался</h3>
      <p>
        Не удалось загрузить результаты. Проверьте соединение и попробуйте ещё
        раз.
      </p>
      <button className={s.retry} onClick={onRetry}>
        Повторить поиск
      </button>
    </div>
  );
};
