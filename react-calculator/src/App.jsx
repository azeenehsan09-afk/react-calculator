
import { useState } from "react";
import "./App.css";

function App() {
const [total, setTotal] = useState(0);
const [user, setUser] = useState("");
const [history, setHistory] = useState([]);

function add() {
  const newTotal = total + Number(user);
  setTotal(newTotal);
  setHistory([
    ...history,
    `+ ${user} = ${newTotal}`
  ]);
}
function sub() {
  const newTotal = total - Number(user);
  setTotal(newTotal);
  setHistory([
    ...history,
    `- ${user} = ${newTotal}`
  ]);
}
function multiply() {
 const newTotal = total *Number(user);
  setTotal(newTotal);
  setHistory([
    ...history,
    `* ${user} = ${newTotal}`
  ]);
}
function divide() {
  if (Number(user) === 0) {
    alert("Cannot divide by zero!");
    return;
  }

  const newTotal = total / Number(user);
  setTotal(newTotal);
  setHistory([
    ...history,
    `/ ${user} = ${newTotal}`
  ]);
}

function reset() {
  setTotal(0);
  setUser("");
}


function clearHistory() {
  setHistory([]);
}
  return (
  <div className="container">
    <div className="calculator">
     <h1>🧮 Smart Calculator</h1>
         

      <div className="display">
  <p>Total</p>
  <h2>{total}</h2>
</div>

      <input
        type="number"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        placeholder="Enter a number"
      />

      <div className="buttons">
  <button onClick={add}>➕ Add</button>
  <button onClick={sub}>➖ Subtract</button>
  <button onClick={multiply}>✖ Multiply</button>
  <button onClick={divide}>➗ Divide</button>
  <button onClick={reset}>🔄 Reset</button>
</div>

<hr />

<div className="history">
  <h3>Calculation History</h3>

  {history.length === 0 ? (
    <p className="empty">No calculations yet.</p>
  ) : (
    <ul>
      {history.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )}
  <button onClick={clearHistory}>
  🗑 Clear History
</button>
</div>



    </div>
  </div>
);
}
export default App;