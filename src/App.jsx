import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="container">
      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Insert First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Insert Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => setResult(Number(num1) + Number(num2))}>+</button>
        <button onClick={() => setResult(Number(num1) - Number(num2))}>-</button>
        <button onClick={() => setResult(Number(num1) * Number(num2))}>×</button>
        <button onClick={() => setResult(Number(num1) / Number(num2))}>÷</button>
      </div>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;