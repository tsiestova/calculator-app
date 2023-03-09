import React, { useState } from "react";
import layout from "./layout.module.scss";
import cardStyle from "./card.module.scss";
import InputTip from "./InputTip";

const Card = () => {
  const initialState = {
    bill: {
      isActive: false,
      value: "",
    },
    people: {
      isValid: true,
      value: "",
    },

    tip: "",
    custom: "",
  };

  const [userData, setUserData] = useState(initialState);

  const handleFocusBill = () => {
    setUserData((data) => ({
      ...data,
      bill: {
        ...data.bill,
        isActive: true,
      },
    }));
  };

  const handleBlurBill = () => {
    setUserData((data) => ({
      ...data,
      bill: {
        ...data.bill,
        isActive: false,
      },
    }));
  };

  const getDataBill = (e) => {
    setUserData((data) => ({
      ...data,
      bill: {
        ...userData.bill,
        value: e.target.value,
        isActive: true,
      },
    }));
  };

  const handleDataPeople = (e) => {
    const isValid =
      !isNaN(parseInt(e.target.value)) && parseInt(e.target.value) > 0;

    setUserData((data) => ({
      ...data,
      people: {
        ...userData.people,
        value: e.target.value,
        isValid: isValid,
      },
    }));
  };

  const handleDataTip = (e) => {
    if (e.target.name === "custom") {
      setUserData((data) => ({
        ...data,
        tip: e.target.value,
        custom: e.target.value,
      }));
    } else {
      setUserData((data) => ({
        ...data,
        tip: e.target.value,
        custom: "",
      }));
    }
  };

  const handleReset = () => {
    setUserData(initialState);
  };

  return (
    <div className={cardStyle.page__wrap}>
      <div className={cardStyle.logo__container}>
        <figure className={cardStyle.logo__wrap}>
          <a href="#">
            <img src="../img/logo.svg" alt="" />
          </a>
        </figure>
      </div>
      <div className={cardStyle.card__inner__box}>
        <div className={cardStyle.card__inner}>
          <div className={layout.layout}>
            <div className={cardStyle.card__inner__wrap}>
              <div className={cardStyle.bill__container}>
                <label>Bill</label>
                <div
                  className={
                    userData.bill.isActive
                      ? `${cardStyle.input__user_wrap} ${cardStyle.active}`
                      : `${cardStyle.input__user_wrap}`
                  }
                >
                  <input
                    type="number"
                    name="bill"
                    value={userData.bill.value}
                    placeholder="0.00"
                    onChange={(e) => getDataBill(e)}
                    onFocus={handleFocusBill}
                    onBlur={handleBlurBill}
                  />
                </div>
              </div>
              <div className={cardStyle.tips__container}>
                <label>Select Tip %</label>

                <div className={cardStyle.tips__list}>
                  <InputTip
                    tip="5"
                    handleDataTip={handleDataTip}
                    customTip={userData.custom.length}
                    currentTip={userData.tip}
                  />

                  <div className={cardStyle.btn__tips__wrap}>
                    <input
                      type="radio"
                      name="tips"
                      value="10"
                      id="tip2"
                      checked={!userData.custom.length && userData.tip === "10"}
                      onClick={(e) => handleDataTip(e)}
                    />
                    <label htmlFor="tip2" className={cardStyle.btn__tips}>
                      10
                    </label>
                  </div>
                  <div className={cardStyle.btn__tips__wrap}>
                    <input
                      type="radio"
                      name="tips"
                      value="15"
                      id="tip3"
                      checked={!userData.custom.length && userData.tip === "15"}
                      onClick={(e) => handleDataTip(e)}
                    />
                    <label htmlFor="tip3" className={cardStyle.btn__tips}>
                      15
                    </label>
                  </div>
                  <div className={cardStyle.btn__tips__wrap}>
                    <input
                      type="radio"
                      name="tips"
                      value="25"
                      id="tip4"
                      checked={!userData.custom.length && userData.tip === "25"}
                      onClick={(e) => handleDataTip(e)}
                    />
                    <label htmlFor="tip4" className={cardStyle.btn__tips}>
                      25
                    </label>
                  </div>
                  <div className={cardStyle.btn__tips__wrap}>
                    <input
                      type="radio"
                      name="tips"
                      value="50"
                      id="tip5"
                      checked={
                        !userData.custom.length && userData.tip === "50"
                          ? true
                          : false
                      }
                      onClick={(e) => handleDataTip(e)}
                    />
                    <label htmlFor="tip5" className={cardStyle.btn__tips}>
                      50
                    </label>
                  </div>
                  <div
                    className={`${cardStyle.btn__tips__wrap} ${cardStyle.input__user_wrap}`}
                  >
                    <input
                      type="text"
                      name="custom"
                      value={userData.custom}
                      placeholder="Custom"
                      onChange={(e) => handleDataTip(e)}
                    />
                  </div>
                </div>
              </div>
              <div
                className={
                  userData.people.isValid
                    ? `${cardStyle.people__container}`
                    : `${cardStyle.people__container} ${cardStyle.error}`
                }
              >
                <label>Number of People</label>
                <div className={cardStyle.error__massage}>Can’t be zero</div>
                <div
                  className={
                    userData.people.isValid
                      ? `${cardStyle.input__user_wrap}`
                      : `${cardStyle.input__user_wrap} ${cardStyle.error}`
                  }
                >
                  <input
                    type="number"
                    name="people"
                    value={userData.people.value}
                    placeholder="0"
                    onChange={(e) => handleDataPeople(e)}
                  />
                </div>
              </div>
            </div>
            <div className={cardStyle.total__container}>
              <div className={cardStyle.total__container__list}>
                <div className={cardStyle.total__container__item}>
                  <label className={cardStyle.label__tip_amount}>
                    Tip Amount
                    <span>/ person</span>
                  </label>
                  <div className={cardStyle.input__total_amount_wrap}>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={
                        (
                          (userData.bill.value * userData.tip) /
                          100 /
                          parseInt(userData.people.value)
                        ).toFixed(2) || "0.00"
                      }
                    />
                  </div>
                </div>
                <div className={cardStyle.total__container__item}>
                  <label className={cardStyle.label__tip_amount}>
                    Total
                    <span>/ person</span>
                  </label>
                  <div className={cardStyle.input__total_amount_wrap}>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={
                        (
                          (parseFloat(userData.bill.value) +
                            (userData.bill.value * userData.tip) / 100) /
                          parseInt(userData.people.value)
                        ).toFixed(2) || "0.00"
                      }
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className={cardStyle.btn__reset}
                disabled={
                  !userData.bill.value ||
                  !userData.people.value ||
                  !(userData.tip || userData.custom)
                }
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
