import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Philipines Fackin NEKIKO</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="w-1/2">Click on the Vite and React logos to learn more</p>
      <h1 className="text-4xl text-green-700 text-center font-semibold">
        Hello Tailwind
      </h1>
    </>
  );
}

export default App;
