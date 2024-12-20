import { useRef, useState } from "react";

const Clock = () => {
  const [currentInterval, setCurrentInterval] = useState(0);
  const timer = useRef(null);

  function startClock() {
    const value = setInterval(() => {
      setCurrentInterval((c) => c + 1);
    }, 1000);
    timer.current = value;
  }
  function stopClock() {
    clearInterval(timer.current);
  }
  return (
    <div>
      <h1>{currentInterval}</h1>
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  );
};

export default Clock;
