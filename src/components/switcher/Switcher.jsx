import React, { useId, useContext } from "react";
import cardStyle from "../card.module.scss";

const Switcher = ({ name, value, onChange, checked }) => {
  const id = useId();

  return (
    <div className={cardStyle.btn__tips__wrap}>
      <input
        name={name}
        type="radio"
        id={id}
        onChange={(e) => e.target.checked && onChange(value)}
        checked={checked}
      />

      <label htmlFor={id} className={cardStyle.btn__tips}>
        {value}
      </label>
    </div>
  );
};

export default Switcher;
