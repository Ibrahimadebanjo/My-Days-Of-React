import { useState } from "react";

const UseState01 = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(prev =>prev + 1)
        setCount(prev =>prev + 1)
        setCount(prev =>prev + 1)
        setCount(prev =>prev + 1)
        setCount(prev =>prev + 1)
    }
  return (
    <div>
      <h2>the Count is {count}</h2>
      <button onClick={increment}>increment </button>
    </div>
  )
}

export default UseState01;
