import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MarketPage from "./pages/MarketPage";
import MypagePage from "./pages/MypagePage";
import ProductPage from "./pages/ProductPage";
import SignupPage from "./pages/SignupPage";
import CreateNFTPage from "./pages/CreateNFTPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "./modules/user";
import BankAccountRegisterPage from "./pages/BankAccountRegisterPage";
import CreateProductPage from "./pages/CreateProductPage";

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getProfile());
  }, [dispath]);

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
        <Route path="/createnft" component={CreateNFTPage} />
        <Route path="/createproduct" component={CreateProductPage} />
        <Route path="/register" component={BankAccountRegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
