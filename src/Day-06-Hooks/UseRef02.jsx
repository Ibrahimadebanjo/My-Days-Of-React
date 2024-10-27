import { useRef, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const handleStart = () => {
    countRef.current = count;
    const intervalId = setInterval(() => {
      countRef.current += 1;
      setCount(countRef.current);
    }, 1000);

    return () => clearInterval(intervalId);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleStart}>Start Timer</button>
    </div>
  );
}

export default Timer;
