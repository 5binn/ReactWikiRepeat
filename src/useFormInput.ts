import { useState } from "react";

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const InputProps = {
    value: value,
    onChange: handleChange,
  };

  return InputProps;
}
