import React, { useContext } from "react";
import { DataContext } from "../UserContext";
import TotalItem from "./TotalItem";
import totalContainerStyles from "./total.module.scss";

const TotalComponent = ({ reset, disabled }) => {
  const { userData } = useContext(DataContext);

  const tipAmount =
    (
      (userData.bill.value * userData.tip) /
      100 /
      parseInt(userData.people.value)
    ).toFixed(2) || "0.00";

  const total =
    (
      (parseFloat(userData.bill.value) +
        (userData.bill.value * userData.tip) / 100) /
      parseInt(userData.people.value)
    ).toFixed(2) || "0.00";

  return (
    <div className={totalContainerStyles.total__container}>
      <div className={totalContainerStyles.total__container__list}>
        <TotalItem label="Tip Amount" value={tipAmount} />
        <TotalItem label="Total" value={total} />
      </div>
      <button
        type="button"
        className={totalContainerStyles.btn__reset}
        onClick={reset}
        disabled={disabled}
      >
        Reset
      </button>
    </div>
  );
};

export default TotalComponent;
