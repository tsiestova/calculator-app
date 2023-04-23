import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "./components/UserContext";
import layoutStyles from "./components/layout.module.scss";
import Logo from "./components/logo/Logo";
import Card from "./components/Card";

const initialState = {
  bill: {
    value: null,
  },
  people: {
    value: null,
  },

  tip: null,
  customTip: null,
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
