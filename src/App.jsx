import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mypage from "./components/Mypage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MarketPage from "./pages/MarketPage";
import MypagePage from "./pages/MypagePage";
import NFTCreatePage from "./pages/NFTCreatePage";
import ProductPage from "./pages/ProductPage";
import SignupPage from "./pages/SignupPage";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { profileLequest } from "./modules/login";
import BankAccountRegisterPage from "./pages/BankAccountRegisterPage";

function App() {
  const [session, setSession, removeSession] = useCookies(["connect.sid"]);
  const dispath = useDispatch();

  useEffect(() => {
    console.log(session);
    if (session) dispath(profileLequest());
  }, [dispath, session]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/mypage" component={MypagePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/market" component={MarketPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/createnft" component={NFTCreatePage} />
        <Route path="/register" component={BankAccountRegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
