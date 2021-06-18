import * as React from "react";
import MuiButton, { ButtonProps } from "@material-ui/core/Button";

export type { ButtonProps };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <MuiButton ref={ref} {...props} />;
});