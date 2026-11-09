import { Button } from "@/components/Button/Button.tsx";
import s from "./Error.module.css";
import type { DispatchWithoutAction } from "react";

interface Props {
  onRetry: DispatchWithoutAction;
}
export const Error = ({ onRetry }: Props) => {
  return (
    <div className={s.message} role="alert">
      <h3>Looks like the show was interrupted</h3>
      <p>We couldn’t load the results. Check your connection and try again.</p>
      <Button className={s.retry} onClick={onRetry}>
        Try again
      </Button>
    </div>
  );
};
