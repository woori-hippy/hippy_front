/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import "./App.css";
import Blog from "./components/Blog";
import Main from "./components/Main";

function App() {
  return (
    // <div className="App">
    //   <h1 css={style}>Hippy</h1>
    // </div>
    <Blog></Blog>
  );
}

const style = css`
  width: 100%;
  text-align: center;
`;

export default App;
