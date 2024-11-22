import { Button, ButtonProps } from "@mui/material";
export enum ButtonType {
  CONTAINED = "contained",
  OUTLINED = "outlined",
  TEXT = "text",
}
export enum Size {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

interface PrimaryButtonProps extends ButtonProps {
  label: string;
  buttonType?: ButtonType;
  size?: Size;
  icon?: React.ReactElement;
}

export const PrimaryButton = ({
  label,
  buttonType = ButtonType.CONTAINED,
  icon,
  size = Size.MEDIUM,
  ...muiButtonProps
}: PrimaryButtonProps) => {
  return (
    <Button variant={buttonType} size={size} {...muiButtonProps}>
      {" "}
      {label}{" "}
    </Button>
  );
};
