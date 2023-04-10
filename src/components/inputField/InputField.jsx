import React, { useState } from "react";
import inputFieldStyles from "./inputField.module.scss";

const isValid = (data) => {
  return data.length > 0 && parseInt(data) > 0;
};

const getInputState = ({ isValid, isTouched, isFocused }) => {
  const result = [inputFieldStyles.input__field_wrap];

  if (isTouched && !isValid) {
    result.push(inputFieldStyles.input__field__error);
  }

  if (isFocused) {
    result.push(inputFieldStyles.input__field__active);
  }

  return result.join(" ");
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
}) => {
  const [inputState, setInputState] = useState({
    isValid: true,
    isFocused: false,
    value,
    isTouched: false,
  });

  const handleFocus = () => {
    setInputState((data) => ({
      ...data,
      isFocused: true,
      isTouched: true,
    }));
  };

  const handleBlur = () => {
    setInputState((data) => ({
      ...data,
      isFocused: false,
    }));
  };

  return (
    <div className={inputFieldStyles.input__field__container}>
      {label && (
        <label className={inputFieldStyles.input__field__label}>{label}</label>
      )}
      {inputState.isValid ? null : validationMassage}
      <div
        className={getInputState({
          isFocused: inputState.isFocused,
          isTouched: inputState.isTouched,
          isValid: inputState.isValid,
        })}
      >
        {children}
        <input
          className={inputFieldStyles.input__field}
          type={type}
          name={name}
          value={inputState.value}
          placeholder={placeholder}
          onChange={(e) => {
            setInputState({
              ...inputState,
              value: e.target.value,
              isValid: isValid(e.target.value),
            });
            onChange(e);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default InputField;
