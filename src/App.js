import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const lapsRef = useRef([]);

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 0.01);
    }, 10);
  };
  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };
  const lapTimer = () => {
    lapsRef.current = [...lapsRef.current, time.toFixed(3)];
  };
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    lapsRef.current = [];
  };
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div>{time.toFixed(3)}</div>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={lapTimer}>LAP</button>
      <button onClick={resetTimer}>RESET</button>
      <div className="lap-section">
        {lapsRef.current.map((lap, index) => (
          <div key={index}>{lap}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
