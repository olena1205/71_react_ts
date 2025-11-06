import "./styles.css";
import type { ButtonProps } from "./types";


function Button({
  type = "button",
  name,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className="button"
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
export default Button;

