import React from "react";
import logoStyle from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={logoStyle.logo__container}>
      <figure className={logoStyle.logo__wrap}>
        <a href="#">
          <img src="../../img/logo.svg" alt="" />
        </a>
      </figure>
    </div>
  );
};

export default Logo;
