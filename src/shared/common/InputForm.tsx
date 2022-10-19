import { Input } from '@nextui-org/react';
import { HTMLInputTypeAttribute } from 'react';
import { Path, PathValue, useFormContext } from 'react-hook-form';

interface InputFormProps<T> {
  label: string;
  errorMessage?: string;
  type: HTMLInputTypeAttribute;
  fieldForm: Path<T>;
  value?: PathValue<T, Path<T>>;
  placeholder?: string;
  required?: boolean;
}

export const InputForm = <T extends unknown>({
  label,
  errorMessage = 'Error en el campo.',
  type,
  fieldForm,
  value,
  required = false,
  placeholder,
}: InputFormProps<T>) => {
  const {
    register,
    setValue,
    formState: {
      errors: { [fieldForm]: error },
      isSubmitting,
    },
  } = useFormContext<T | any>();
  if (value) {
    setValue(fieldForm, value);
  }

  return (
    <Input
      clearable
      bordered
      fullWidth
      color="primary"
      size="md"
      label={label}
      placeholder={placeholder}
      type={type}
      helperColor="error"
      // @ts-ignore
      helperText={error?.message}
      status={error ? 'error' : 'default'}
      disabled={isSubmitting}
      {...register(fieldForm, {
        required: {
          value: required,
          message: errorMessage,
        },
      })}
    />
  );
};