drop-down

```js
 <div className="group relative">
<img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
 <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
<div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
     <p className='cursor-pointer hover:text-black '>My Profile</p>
     <p className='cursor-pointer hover:text-black '>Orders </p>
     <p className='cursor-pointer hover:text-black '>Logout</p>
</div>
 </div>
 </div>
```
Add to cart 

```js
<Link to={"/card"} className='relative'>
<img className='w-5  ' src={assets.cart_icon} alt="" />
 <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>10</p>
 </Link>
 ``` 

 Navigation

 ```javascript
 <img onClick={()=> {setVisible(true)}} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
        </div>
        {/* Side bar Menu for smaller screen */}
        <div className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : "w-0"}`}>
   <div className='flex flex-col text-gray-600'>
<div onClick={()=> {setVisible(false)}} className="cursor-pointer flex items-center gap-4 p-3">
<img className='h-4 rotate-180 ' src={assets.dropdown_icon} alt="" />
<p>Back</p>
</div>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 border" to={"/"} >HOME</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 border" to={"/collection"} >COLLECTION</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 border" to={"/about"} >ABOUT</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 border" to={"/contact"} >CONTACT</NavLink>
   </div>
        </div>
```
my nav 

```js
import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {


    const [visible, setVisible] = useState(false)
  return (
    <div className="flex py-4 items-center justify-between">
       
    <h4>IBRAHIM  <span>ADEBANJO</span></h4> 
    <ul className=" hidden md:flex items-center  sm:flex gap-5 text-sm text-gray-700">
       <NavLink to={"/"} className=" flex flex-col  items-center gap-1">
        <p >HERO</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink> 
        
        <NavLink to={"/about"} className=" flex flex-col text-gray-700 items-center gap-1">
        <p >ABOUT</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink> 
        <NavLink to={"/skills"} className=" flex flex-col  items-center gap-1">
        <p >SKILLS</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink> 
        <NavLink to={"/projects"} className=" flex flex-col  items-center gap-1">
        <p >PROJECTS</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/experience"} className=" flex flex-col  items-center gap-1">
        <p >EXPERIENCE</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className=" flex flex-col  items-center gap-1">
        <p >CONTACT</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>  
    </ul>
    
    <i onClick={() => {setVisible(true)}} className='bx bx-menu-alt-right sm:hidden font-bold text-2xl cursor-pointer'></i>


    <div className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : "w-0"}`}>
   <div className='flex flex-col text-gray-600'>
<div onClick={()=> {setVisible(false)}} className="cursor-pointer flex items-center gap-4 p-3">
<i className='bx bx-left-arrow-alt text-2xl font-bold '></i>
<p className="text-green-800">Back</p>
</div>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/"} >HERO</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/about"} >ABOUT</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/skills"} >SKILLS</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/projects"} >PROJECTS</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/experience"} >EXPERIENCE</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/contact"} >CONTACT</NavLink>
   </div>
        </div>
    </div>
  )
}

export default Navbar;
```
