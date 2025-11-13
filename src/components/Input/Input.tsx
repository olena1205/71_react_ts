import "./styles.css";
import type { InputProps } from "./types";

function Input({
  name,
  type = "text",
  id,
  label,
  placeholder,
  value,
  error,
  onChange,
}: InputProps) {
  return (
    <div className="input-container">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="error">{error}</div>
    </div>
  );
}
export default Input;
