import { useState } from "react";
import "./App.css";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");

  const total = Number(billAmount + (billAmount * tipPercentage) / 100);

  function handleReset() {
    setBillAmount("");
    setTipPercentage("");
  }

  return (
    <div className="app">
      <strong>Tip Calculator</strong>
      <p>Enter The Bill Amount and Tip Percentage to Calculate The Total.</p>
      <BillAmountInput
        billAmount={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      />
      <TipPercentageInput
        tipPercentage={tipPercentage}
        onChange={(e) => setTipPercentage(Number(e.target.value))}
      />
      {billAmount > 0 && (
        <>
          <strong id="total-amount">You Pay Total ${total}</strong>
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillAmountInput({ onChange, billAmount }) {
  return (
    <div>
      <label id="bill">Bill Amount:</label>
      <input
        id="bill-amount"
        type="text"
        onChange={onChange}
        value={billAmount}
      />
    </div>
  );
}

function TipPercentageInput({ tipPercentage, onChange }) {
  return (
    <div>
      <label id="tip">Tip Percentage:</label>
      <input
        id="tip-percentage"
        type="text"
        onChange={onChange}
        value={tipPercentage}
      />
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button className="reset-btn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
