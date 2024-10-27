import { useEffect, useState } from "react"

const UseEffect01 = () => {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState(0)
    useEffect(()=> {
       const timer =  setTimeout(() => {
            setCount(count => count +1 )
        }, 2000);
        return () => {
            clearTimeout(timer)
        }
    })
    const clickMessage = () => {
setMessage (message => message + 1)
    }
    useEffect(()=> {
        console.log(message)
      document.title = `${message} messages `
    }, [message])
    
  return (
    <div>
      <h1> counting: {count}</h1>
      <button onClick={clickMessage}>message : {message}</button>
    </div>
  )
}

export default UseEffect01
