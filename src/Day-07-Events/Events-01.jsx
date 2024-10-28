const EventHandling = () => {
const handleClick = (e) => {
    console.log(e.target.style.backgroundColor = "green")
    console.log(e.target.style)
    console.log(e.target)
    console.log(e)
    console.log(e.target.value)
   return ( e.target.innerHTML = "I have been Clicked!")
}
    return(
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
export default EventHandling;