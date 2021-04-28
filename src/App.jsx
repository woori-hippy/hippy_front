/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./container/Main";
import Login from "./container/Login";
import Signup from "./container/Signup";
import Market from "./container/Market";
import Mypage from "./container/Mypage";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/mypage">
          <Mypage />
        </Route>
        <Route exact path="/market">
          <Market />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
