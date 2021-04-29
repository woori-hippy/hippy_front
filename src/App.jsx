/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MarketPage from "./pages/MarketPage";
import MypagePage from "./pages/MypagePage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/mypage">
          <MypagePage />
        </Route>
        <Route exact path="/market">
          <MarketPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
