import { Input as BaseInput } from "@base-ui/react/input";
import { useId } from "react";
import styles from "./Input.module.css";

type InputProps = BaseInput.Props & {
  label: string;
};

export const Input = ({ label, id, className, ...props }: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <BaseInput
        {...props}
        id={inputId}
        className={(state) =>
          [
            styles.input,
            typeof className === "function" ? className(state) : className,
          ]
            .filter(Boolean)
            .join(" ")
        }
      />
    </div>
  );
};
