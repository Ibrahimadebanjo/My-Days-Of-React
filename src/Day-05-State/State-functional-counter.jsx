import { useState } from "react"
const FunctionalCounter = () => {
const [count, setCount] = useState(0)

const increment = () => {
    setCount(count + 1  )
}
const decrement = () => {
    setCount(count - 1  )
}
    return (
        <div>
            <h3>Functional Counter </h3>
            <p>Count : {count}</p>
            <button onClick={increment}> Increment</button>
             <button onClick={decrement}> decrement</button>
        </div>
    )
}
export default FunctionalCounter;