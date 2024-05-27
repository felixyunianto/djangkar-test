import cn from "classnames";
import styles from "./TextInput.module.scss";

type TextInputProps = {
  label?: string;
  onChange: (value: string) => void;
  value: string;
  type?: "normal" | "textarea";
  name: string;
  helperText?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
};

export default function TextInput(props: TextInputProps) {
  const {
    label,
    value,
    onChange,
    type = "normal",
    name,
    helperText,
    required = false,
    className,
    placeholder,
  } = props;

  return (
    <>
      {type === "normal" ? (
        <div className={cn(styles.container, className)}>
          <label htmlFor={`${name}-id`}>
            {label} {required && <span>*</span>}
          </label>
          <input
            type="text"
            id={`${name}-id`}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            placeholder={placeholder}
          />
          <div className={styles.helper_text}>{helperText}</div>
        </div>
      ) : (
        <div className={styles.container}>
          <label htmlFor={`${name}-id`}>
            {label} {required && <span>*</span>}
          </label>
          <textarea
            name=""
            id={`${name}-id`}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          >
            {value}
          </textarea>
        </div>
      )}
    </>
  );
}
