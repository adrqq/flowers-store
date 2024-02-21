import styles from "./page.module.scss";
import { InputType } from "@/models/InputType";


type OrderInputProps = {
  // text: string;
  // value?: string;
  // disabled?: boolean;

  type: InputType;
  text: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  name?: string;
  id?: string;
  autoComplete?: boolean;
  required?: boolean;
  width?: number;
};

const OrderInputText = ({
  type,
  text = 'text',
  disabled = false,
  placeholder = "",
  value = "",
  autoComplete = false,
  required = true,
  width = 321,
}: OrderInputProps) => {
  return (
    <div className={styles.input__group}>
      <input
        className={styles.input__group__input}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete ? '' : "off"}
        required={required}

        style={{ width: `${width}px` }}
      />
      <label className={styles.input__group__label} htmlFor="username">
        {text}
      </label>
    </div>
  );
};

export default OrderInputText;

//
//
// id="username"
// autoComplete="off"
// required
