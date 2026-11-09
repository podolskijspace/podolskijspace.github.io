import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <span aria-hidden="true">✳</span>
      <p>Great stories start with curiosity.</p>
      <small>Popcorn is optional.</small>
    </footer>
  );
};
