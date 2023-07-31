import { Control } from "react-hook-form";

import { margin, pad } from "@/utils/Proptypes/proptypes";

export interface TextFieldProps {
  name: string;
  control?: Control<any>;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  as?: string;
  id?: string;
  errormsg?: string | undefined;
  showReqSymbol?: boolean;
  radius?: string;
  bordersides?: "top" | "right" | "bottom" | "left" | "all";
  pad?: pad;
  margin?: margin;
  borderwidth?: string;
}
