import React, { useEffect, useLayoutEffect, useState } from "react";
import inputFieldStyles from "./inputField.module.scss";

const initialValue = {
  isValid: true,
  isFocused: false,
  isTouched: false,
};

const InputField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  validationMassage,
  children,
  min,
}) => {
  const [inputState, setInputState] = useState(() => {
    return {
      ...initialValue,
      value: value === null ? "" : value,
    };
  });

  useLayoutEffect(() => {
    if (value === null) {
      setInputState({
        ...inputState,
        isTouched: false,
        value: "",
      });
    }
  }, [value]);

  const handleFocus = () => {
    setInputState((data) => ({
      ...data,
      isTouched: true,
    }));
  };

  return (
    <div className={inputFieldStyles.input__field__container}>
      {label && (
        <label className={inputFieldStyles.input__field__label}>{label}</label>
      )}
      {inputState.isValid ? null : validationMassage}
      <div className={inputFieldStyles.input__field_wrap}>
        {children}
        <input
          className={
            inputState.isTouched
              ? `${inputFieldStyles.input__field} ${inputFieldStyles.touched}`
              : `${inputFieldStyles.input__field}`
          }
          type={type}
          name={name}
          value={inputState.value}
          placeholder={placeholder}
          min={min}
          onChange={(e) => {
            setInputState({
              ...inputState,
              value: e.target.value,
              isValid: e.target.validity.valid,
            });
            onChange(e);
          }}
          onFocus={handleFocus}
        />
      </div>
    </div>
  );
};

export default InputField;
