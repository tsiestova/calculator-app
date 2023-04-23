import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../UserContext";
import TotalItem from "./TotalItem";
import totalContainerStyles from "./total.module.scss";

const TotalComponent = ({ reset, disabled }) => {
  const { userData } = useContext(DataContext);

  const [total, setTotal] = useState({
    tipAmount: "0.00",
    totalAmount: "0.00",
  });

  const condition =
    parseInt(userData.bill.value) > 0 &&
    parseInt(userData.tip) > 0 &&
    parseInt(userData.people.value) > 0;

  const getTipAmount = () => {
    if (!condition) return "0.00";

    const result = (
      (userData.bill.value * userData.tip) /
      100 /
      parseInt(userData.people.value)
    ).toFixed(2);

    return result;
  };

  const getTotalAmount = () => {
    if (!condition) return "0.00";
    const result = (
      (parseFloat(userData.bill.value) +
        (userData.bill.value * userData.tip) / 100) /
      parseInt(userData.people.value)
    ).toFixed(2);

    return result;
  };

  useEffect(() => {
    setTotal({
      ...total,
      tipAmount: getTipAmount(),
      totalAmount: getTotalAmount(),
    });
  }, [userData.bill.value, userData.tip, userData.people.value]);

  return (
    <div className={totalContainerStyles.total__container}>
      <div className={totalContainerStyles.total__container__list}>
        <TotalItem label="Tip Amount" value={total.tipAmount} />
        <TotalItem label="Total" value={total.totalAmount} />
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
