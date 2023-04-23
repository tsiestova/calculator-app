import React from "react";
import totalContainerStyles from "./total.module.scss";

const TotalItem = ({ label, value }) => {
  return (
    <div className={totalContainerStyles.total__container__item}>
      <div className={totalContainerStyles.label__tip_amount}>
        {label}
        <span>/ person</span>
      </div>
      <div className={totalContainerStyles.input__total_amount_wrap}>
        <div className={totalContainerStyles.input__total_amount}>{value}</div>
      </div>
    </div>
  );
};

export default TotalItem;
