import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mypage from "./components/Mypage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MarketPage from "./pages/MarketPage";
import MypagePage from "./pages/MypagePage";
import ProductPage from "./pages/ProductPage";
import SignupPage from "./pages/SignupPage";
import NFTCreatePage from "./pages/NFTCreatePage"
import BankAccountRegisterPage from "./pages/BankAccountRegisterPage"

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/mypage" component={MypagePage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/mypage" component={LoginPage} />
        <Route exact path="/market" component={MarketPage} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route exact path="/create" component={NFTCreatePage} />
        <Route exact path="/register" component={BankAccountRegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
