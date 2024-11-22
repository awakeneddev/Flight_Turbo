import { FormControl, InputLabel, Select, SelectProps } from "@mui/material";

type SelectFieldProps = SelectProps & {
  label: string;
  children: React.ReactNode; // Support multiple MenuItems or elements
  borderColor?: string; // Allow custom border color
  borderless?: boolean; // New prop to toggle border
};

export const SelectField = ({
  label,
  children,
  borderColor = "#fff", // Default border color is white
  borderless = false, // Default is bordered
  ...rest
}: SelectFieldProps) => {
  return (
    <FormControl
      fullWidth
      variant="outlined"
      sx={{
        "& .MuiInputLabel-root": {
          color: borderless ? "#fff" : borderColor, // Default or border color
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: borderless ? "#fff" : borderColor, // Focused label color
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": borderless
            ? { border: "none" } // No border
            : {
                borderColor, // Default border color
              },
          "&:hover fieldset": borderless
            ? {}
            : {
                borderColor, // Hover border color
              },
          "&.Mui-focused fieldset": borderless
            ? {}
            : {
                borderColor, // Focused border color
              },
        },
      }}
    >
      <InputLabel
        id={`${label}-label`}
        sx={{
          color: borderless ? "#fff" : borderColor, // Match label color
        }}
      >
        {label}
      </InputLabel>
      <Select
        sx={{
          color: "#fff", // White text inside the dropdown
          "& .MuiSelect-icon": {
            color: borderless ? "#fff" : borderColor, // Match arrow color
          },
        }}
        labelId={`${label}-label`}
        label={label}
        {...rest}
      >
        {children}
      </Select>
    </FormControl>
  );
};
