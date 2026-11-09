import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <a className={s.brand} href="/">
        титры<span className={s.brandDot}>✳</span>
      </a>
      <span className={s.tagline}>У каждой истории есть начало</span>
    </header>
  );
};
