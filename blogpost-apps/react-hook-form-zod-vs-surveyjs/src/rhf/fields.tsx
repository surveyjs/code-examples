// Reusable react-hook-form bindings for MUI inputs. Written once, shared by every form.
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Switch from "@mui/material/Switch";
import TextField, { type TextFieldProps } from "@mui/material/TextField";

type FieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
};

type Option = { value: string; label: string };

export function TextInput<T extends FieldValues>({
  control,
  name,
  label,
  format,
  ...props
}: FieldProps<T> & Omit<TextFieldProps, "name"> & { format?: (raw: string) => string }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          {...props}
          {...field}
          onChange={(e) => field.onChange(format ? format(e.target.value) : e.target.value)}
          label={label}
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState.error?.message ?? props.helperText}
          slotProps={props.type === "date" ? { inputLabel: { shrink: true } } : props.slotProps}
        />
      )}
    />
  );
}

export function SelectInput<T extends FieldValues>({
  options,
  ...props
}: FieldProps<T> & Omit<TextFieldProps, "name"> & { options: string[] }) {
  return (
    <TextInput {...props} select>
      {options.map((o) => (
        <MenuItem key={o} value={o}>
          {o}
        </MenuItem>
      ))}
    </TextInput>
  );
}

export function RadioInput<T extends FieldValues>({
  control,
  name,
  label,
  options,
}: FieldProps<T> & { options: Option[] }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={!!fieldState.error}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup {...field}>
            {options.map((o) => (
              <FormControlLabel key={o.value} value={o.value} control={<Radio />} label={o.label} />
            ))}
          </RadioGroup>
          {fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}

export function ToggleInput<T extends FieldValues>({
  control,
  name,
  label,
  variant = "checkbox",
}: FieldProps<T> & { variant?: "checkbox" | "switch" }) {
  const Control = variant === "switch" ? Switch : Checkbox;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error}>
          <FormControlLabel
            label={label}
            control={
              <Control checked={!!field.value} onChange={(e) => field.onChange(e.target.checked)} />
            }
          />
          {fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
