import React from "react";
import layout from "./layout.module.scss";
import cardStyle from "./card.module.scss";

const Card = () => {
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
                <div className={cardStyle.input__user_wrap}>
                  <input type="number" value="" placeholder="0" step="any" />
                </div>
              </div>
              <div className={cardStyle.tips__container}>
                <label>Select Tip %</label>

                <div className={cardStyle.tips__list}>
                  <button type="button" className={cardStyle.btn__tips}>
                    5<span>%</span>
                  </button>
                  <button type="button" className={cardStyle.btn__tips}>
                    10
                    <span>%</span>
                  </button>
                  <button type="button" className={cardStyle.btn__tips}>
                    15
                    <span>%</span>
                  </button>
                  <button type="button" className={cardStyle.btn__tips}>
                    25
                    <span>%</span>
                  </button>
                  <button type="button" className={cardStyle.btn__tips}>
                    50
                    <span>%</span>
                  </button>
                  <div className={cardStyle.input__user_wrap}>
                    <input type="text" value="Custom" />
                  </div>
                </div>
              </div>
              <div className={cardStyle.people__container}>
                <label>Number of People</label>
                <div className={cardStyle.input__user_wrap}>
                  <input type="number" value="" placeholder="0" />
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
                    <input type="number" value="0.00" />
                  </div>
                </div>
                <div className={cardStyle.total__container__item}>
                  <label className={cardStyle.label__tip_amount}>
                    Total
                    <span>/ person</span>
                  </label>
                  <div className={cardStyle.input__total_amount_wrap}>
                    <input type="number" value="0.00" />
                  </div>
                </div>
              </div>

              <button type="button" className={cardStyle.btn__reset}>
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
