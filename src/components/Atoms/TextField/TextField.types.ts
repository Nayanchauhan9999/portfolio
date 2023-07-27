import { Control } from "react-hook-form";

export interface TextFieldProps {
  name: string;
  control?: Control<any>;
  defaultValue?: string;
  inputsize?: "small" | "medium" | "large";
  placeholder?: string;
  label?: string;
  type?: string;
  as?: string;
  id?: string;
  errormsg?: string | undefined;
  showReqSymbol?: boolean;
}
