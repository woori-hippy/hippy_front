import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import BankAccountRegisterPage from "./BankAccountRegisterPage";
import CreateNFTPage from "./CreateNFTPage";
import CreateProductPage from "./CreateProductPage";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import MarketPage from "./MarketPage";
import MypagePage from "./MypagePage";
import SignupPage from "./SignupPage";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mypage" element={<MypagePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/market" element={<MarketPage />} />
      <Route path="/product/:id" element={<CreateProductPage />} />
      <Route path="/createnft" element={<CreateNFTPage />} />
      <Route path="/createproduct" element={<CreateProductPage />} />
      <Route path="/register" element={<BankAccountRegisterPage />} />
    </ReactRouterRoutes>
  );
};
