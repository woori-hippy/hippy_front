/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MainContainer from "./container/MainContainer";
import LoginContainer from "./container/LoginContainer";
import MarketContainer from "./container/MarketContainer";
import MypageContainer from "./container/MypageContainer";
import SignupContainer from "./container/SignupContainer";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <MainContainer />
        </Route>
        <Route exact path="/login">
          <LoginContainer />
        </Route>
        <Route exact path="/signup">
          <SignupContainer />
        </Route>
        <Route exact path="/mypage">
          <MypageContainer />
        </Route>
        <Route exact path="/market">
          <MarketContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
