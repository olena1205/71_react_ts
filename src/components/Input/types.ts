export interface InputProps {
  name: string;
  type?: "text" | "email" | "tel" | "number" | "password";
  id?: string;
  label?: string;
  placeholder?: string;
}
