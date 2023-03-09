import React from "react";
import cardStyle from "./card.module.scss";

const InputTip = ({ tip, handleDataTip, customTip, currentTip }) => {
  return (
    <div className={cardStyle.btn__tips__wrap}>
      <input
        type="radio"
        name="tips"
        id="tip1"
        value="5"
        onClick={(e) => handleDataTip(e)}
        checked={!customTip && currentTip === tip ? true : false}
      />
      <label htmlFor="tip1" className={cardStyle.btn__tips}>
        {tip}
      </label>
    </div>
  );
};

export default InputTip;
