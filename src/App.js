import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./App.scss";
import Booking from "./components/Booking/Booking";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider } from "./components/context";
const App = () => {
  const contextValue = {

  }
  return (
    <div className="App">
    <Provider value={contextValue}>
        <Booking/>
    </Provider>
    </div>
  );
};

export default App;
