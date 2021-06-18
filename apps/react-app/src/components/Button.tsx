import * as React from "react";
import { Button as UiButton, ButtonProps as UiButtonProps } from "ui-web";

export const Button = React.forwardRef<HTMLButtonElement, UiButtonProps>((props, ref) => {
  return <UiButton {...props} ref={ref} />;
});