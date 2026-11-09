import { Button as BaseButton } from "@base-ui/react/button";
import styles from "./Button.module.css";

export const Button = ({ className, ...props }: BaseButton.Props) => {
  return (
    <BaseButton
      {...props}
      className={(state) =>
        [
          styles.button,
          typeof className === "function" ? className(state) : className,
        ]
          .filter(Boolean)
          .join(" ")
      }
    />
  );
};
