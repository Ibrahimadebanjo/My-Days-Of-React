import { useState } from "react"

const UseState02 = () => {
    const [data, setData] = useState({
        date : new Date(),
        name : "Ibrahim Adebanjo",
        Age : 22
    })
    const changeName = () => {
setData((prev) => {
    return {
        ...prev,
        name : "Owolabi"
    }
})

}

    return(
        <div>
            {data.name == "Ibrahim Adebanjo" ? console.log(data.name) :   console.log("middleName") }
<h2>My name is {data.name}</h2>
<button onClick={changeName}>Click</button>
        </div>
    )
}
export default UseState02;