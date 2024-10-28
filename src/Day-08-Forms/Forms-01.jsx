import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod"
const inputStyle = {
margin: "30px",
}

const schema = z.object({
    email : z.string().email(),
    password : z.string().min(8)
})
const UseForm01 = () => {
const {
    register,
     handleSubmit,
     formState : {errors}
} = useForm( {
    defaultValues : {
        email : "",
        password : ""
    },
    resolver : zodResolver(schema),
} )
const onSubmit = (data) => {
    
    console.log(data)
}
    return(
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")
            } type="email" placeholder="Username" style={inputStyle}/> <br />
            {errors.email && ( <div style={{color : "red"}}>
                {errors.email.message}
            </div>)}
            <input style={inputStyle} {...register("password")} type="password"  placeholder="Password" /> <br />
            {errors.password && ( <div style={{color : "red"}}>
                {errors.password.message}
            </div>)}
            <button>
               Click
            </button>
        </form>
    )
}
export default UseForm01;