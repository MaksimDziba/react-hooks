import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { HomePage } from "./components/pages/Home";
import { AboutPage } from "./components/pages/About";
import Alert from "./components/Alert";
import { AlertState } from "./components/context/alert/AlertState";

import "./App.scss";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Alert />
          <Switch>
            <Route path={"/"} component={HomePage} exact />
            <Route path={"/about"} component={AboutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
