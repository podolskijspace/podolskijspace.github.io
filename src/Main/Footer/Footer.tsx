import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <span aria-hidden="true">✳</span>
      <p>Большие истории начинаются с любопытства.</p>
      <small>А попкорн — по желанию.</small>
    </footer>
  );
};
