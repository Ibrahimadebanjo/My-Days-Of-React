import { useState } from "react"

function UseState03() {
    const [input, setInput] = useState("")
    const UpdateInput = (e) => {
        setInput(e.target.value)
    }
  return (
    <div>
      <input type="text" name="" id="" onChange={UpdateInput} />
      <h3>UpdatedInput : {input}</h3>
    </div>
  )
}

export default UseState03
