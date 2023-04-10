import React, { useState, useContext, useCallback } from "react";
import layout from "./layout.module.scss";
import cardStyle from "./card.module.scss";
import Switcher from "./switcher/Switcher";
import { DataContext } from "./UserContext";
import InputField from "./inputField/InputField";
import TotalComponent from "./total/TotalComponent";
import inputFieldStyles from "./inputField/inputField.module.scss";

const Card = () => {
  const { userData, setUserData, initialState } = useContext(DataContext);

  const getUserData = useCallback((e) => {
    setUserData((data) => ({
      ...data,
      [e.target.name]: {
        ...userData[e.target.name],
        value: e.target.value,
      },
    }));
  }, []);

  const handleDataTip = (value) => {
    setUserData((data) => ({
      ...data,
      tip: value,
      customTip: "",
    }));
  };

  const handleCustomTip = (e) => {
    setUserData((data) => ({
      ...data,
      tip: e.target.value,
      customTip: e.target.value,
    }));
  };

  const handleReset = () => {
    setUserData(initialState);
  };

  return (
    <div className={cardStyle.card__inner__box}>
      <div className={cardStyle.card__inner}>
        <div className={layout.layout}>
          <div className={cardStyle.card__inner__wrap}>
            <InputField
              label="Bill"
              type="number"
              name="bill"
              value={userData.bill.value}
              placeholder="0.00"
              onChange={getUserData}
              validationMassage={
                <div className={inputFieldStyles.error__massage}>
                  Can’t be zero
                </div>
              }
            >
              <figure
                className={`${inputFieldStyles.input__field__img} ${inputFieldStyles.img__bill}`}
              >
                <img src="../img/icon-dollar.svg" alt="" />
              </figure>
            </InputField>
            <div className={cardStyle.tips__container}>
              <label>Select Tip %</label>
              <div className={cardStyle.tips__list}>
                <Switcher
                  name="tips"
                  value="5"
                  onChange={(tip) => handleDataTip(tip)}
                  checked={
                    userData.tip === "5" && !userData.customTip !== userData.tip
                  }
                />
                <Switcher
                  name="tips"
                  type="radio"
                  value="10"
                  onChange={(tip) => handleDataTip(tip)}
                  checked={
                    userData.tip === "10" &&
                    !userData.customTip !== userData.tip
                  }
                />
                <Switcher
                  name="tips"
                  type="radio"
                  value="15"
                  onChange={(tip) => handleDataTip(tip)}
                  checked={
                    userData.tip === "15" &&
                    !userData.customTip !== userData.tip
                  }
                />
                <Switcher
                  name="tips"
                  type="radio"
                  value="25"
                  onChange={(tip) => handleDataTip(tip)}
                  checked={
                    userData.tip === "25" &&
                    !userData.customTip !== userData.tip
                  }
                />
                <Switcher
                  name="tips"
                  type="radio"
                  value="50"
                  onChange={(tip) => handleDataTip(tip)}
                  checked={
                    userData.tip === "50" &&
                    !userData.customTip !== userData.tip
                  }
                />
                <div
                  className={`${cardStyle.btn__tips__wrap} ${cardStyle.input__user_wrap}`}
                >
                  <InputField
                    type="number"
                    name="tips"
                    value={userData.customTip}
                    placeholder="Custom"
                    onChange={handleCustomTip}
                  />
                </div>
              </div>
            </div>

            <InputField
              label="Number of People"
              type="number"
              name="people"
              value={userData.people.value}
              placeholder="0"
              onChange={getUserData}
              validationMassage={
                <div className={inputFieldStyles.error__massage}>
                  Can’t be zero
                </div>
              }
            >
              <figure
                className={`${inputFieldStyles.input__field__img} ${inputFieldStyles.img__people}`}
              >
                <img src="../img/icon-person.svg" alt="" />
              </figure>
            </InputField>
          </div>

          <TotalComponent
            reset={handleReset}
            disabled={
              !userData.bill.value ||
              parseInt(userData.bill.value) === 0 ||
              !userData.people.value ||
              !userData.tip ||
              parseInt(userData.people.value) === 0
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
