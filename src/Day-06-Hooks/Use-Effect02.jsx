import { useEffect, useState } from "react"

const UseEffect02 = () => {
    const [count, setCount] = useState(0)
     useEffect  (()=> {
      const timer =   setInterval(() => {
            setCount(count => count +1 )
        }, 2000);
        return () => {
clearInterval (timer)
        }
  }

)
  return (
    <div>
      <h1> counting With Set Interval : {count}</h1>
    </div>
  )
}

export default UseEffect02
