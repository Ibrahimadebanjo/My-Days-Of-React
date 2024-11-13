import React from "react";
import { useDispatch } from "react-redux"
import { login, logout } from "../Features/User";
const Redux = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>{
        dispatch(login({ name: "Ibrahim", age:22, email: "ibrahim@gmail.com"}))
        }}>Login</button>
        <button onClick={()=>{
        dispatch(logout())
        }}>Login</button>
    </div>
  )
}

export default Redux
