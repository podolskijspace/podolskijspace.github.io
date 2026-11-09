import s from "./Empty.module.css";

export const Empty = () => {
  return (
    <div className={s.message} role="status">
      <h3>No results yet</h3>
      <p>Try a different title or search for the original title.</p>
    </div>
  );
};
