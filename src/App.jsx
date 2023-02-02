import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "./modules/user";
import { Routes } from "./pages/Routes";

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getProfile());
  }, [dispath]);

  return <Routes />;
}

export default App;
