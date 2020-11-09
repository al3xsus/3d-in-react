import './App.css';
import Sphere from "./components/Sphere";
import React from "react";
import Cube from "./components/Cube";

function App() {
  const [mode, setMode] = React.useState("cube")
  return (
    <div className="App">
      <h1 className={"header"}>3D in React</h1>
      <div className={"radio-group"}>
        {["sphere", "cube"].map((type, index) => <label key={`radio-group-label-${index}`}>
          <input
            key={`radio-group-button-${index}`}
            type="radio"
            value={type}
            name={type}
            onChange={(ev) => setMode(ev.target.value)}
            checked={mode === type}/>
            {type.toUpperCase()}
        </label>)}
      </div>
      <React.Suspense fallback={<div>Loading...</div>}>
        {mode === "sphere" ? <Sphere/> : <Cube/>}
      </React.Suspense>
      <br/>
      {mode === "cube" && <a className={"App-link"} href='https://www.freepik.com/photos/background'>Background photo created by kjpargeter
        - www.freepik.com</a>}
    </div>
  );
}

export default App;
