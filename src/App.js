/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 css={style}>Hippy</h1>
    </div>
  );
}

const style = css`
  width: 100%;
  text-align: center;
`;

export default App;
