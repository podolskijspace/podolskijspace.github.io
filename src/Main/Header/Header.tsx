import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <a className={s.brand} href="/">
        credits<span className={s.brandDot}>✳</span>
      </a>
      <span className={s.tagline}>Every story has a beginning</span>
    </header>
  );
};
