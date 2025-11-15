import { InputContainer, InputElement, Label } from "./styles";
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
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="error">{error}</div>
    </InputContainer>
  );
}
export default Input;
