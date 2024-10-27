import { useMemo, useState } from "react";

function UseMeme01() {
    const [count, setCount]  = useState(0)
    const [number , setNumber]  = useState(0)
    const cubeNum = (num) => {
        console.log("calculation Done")
        return Math.pow(num, 4)
    }
    const result = useMemo(()=>{
        return cubeNum(number)
    }, [number])
  return (
    <div>
<input type="number" value={number} onChange={  (e) => {setNumber(e.target.value)} } />
    <p>Result Here : {result}</p>
    <button onClick={()=> setCount(count + 1)}>clicked : {count}</button>
    </div>
  )
}

export default UseMeme01;
