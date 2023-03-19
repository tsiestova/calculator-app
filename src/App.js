import React, { useState, useContext } from "react";
import { DataContext } from "./components/UserContext";
import layoutStyles from "./components/layout.module.scss";
import Logo from "./components/logo/Logo";
import Card from "./components/Card";

const initialState = {
  bill: {
    value: "",
  },
  people: {
    value: "",
  },

  tip: "",
  customTip: "",
};

function App() {
  const [userData, setUserData] = useState(initialState);

  return (
    <DataContext.Provider value={{ userData, setUserData, initialState }}>
      <div className={layoutStyles.page__wrap}>
        <Logo />
        <Card />
      </div>
    </DataContext.Provider>
  );
}

export default App;
