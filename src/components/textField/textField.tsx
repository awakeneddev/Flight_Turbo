import { TextField, TextFieldProps } from "@mui/material";

type LabelInputTextFieldProps = TextFieldProps & {
  label: string; // Explicit label prop for better clarity.
  textColor?: string; // Dynamic text color
  borderColor?: string; // Dynamic border color
};

export const LabelInputTextField = ({
  label,
  textColor = "#fff", // Default to white if no textColor is provided
  borderColor = "#fff", // Default to white if no borderColor is provided
  ...rest
}: LabelInputTextFieldProps) => {
  return <TextField label={label} {...rest} sx={{
    "& .MuiInputLabel-root": {
      color: textColor, // Dynamic color for the label
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: textColor, // Dynamic color when the input is focused
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: borderColor, // Dynamic border color
      },
      "&:hover fieldset": {
        borderColor: borderColor, // Dynamic border on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: borderColor, // Dynamic border when focused
      },
    },
    "& .MuiInputBase-input": {
      color: textColor, // Dynamic color for the text inside the input
    },
  }} />;
};
