import s from "./Error.module.css";

export const Error = ({ onRetry }: any) => {
  return (
    <div className={s.message} role="alert">
      <h3>Looks like the show was interrupted</h3>
      <p>We couldn’t load the results. Check your connection and try again.</p>
      <button className={s.retry} onClick={onRetry}>
        Try again
      </button>
    </div>
  );
};
