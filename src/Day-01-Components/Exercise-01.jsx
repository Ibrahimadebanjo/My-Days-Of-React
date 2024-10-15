import ibrahimAdebanjo from "../images/ibrahimAdebanjo.jpg"
//styles
const imageStyle = {
    height : "250px",
    width: "250px",
    borderRadius : "50%",
    margin: "10px",
}
const textStyle = {
    marginLeft : "20px",
}
const buttonStyle = {
    backgroundColor : "rgb(10, 225, 120)",
    fontSize : "15px",
    margin : "5px"

}

const Button = () => {
    return(
    <div>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
        <button style={buttonStyle}>HTML</button>
    </div>
    )
    
}
// 
const image = (
    <img src={ibrahimAdebanjo} style={imageStyle} alt="" />
)
const Exercise1 = () => {
    return(
        <div>

            {image}
            <h3 style={textStyle} >Ibrahim Adebanjo</h3>
            <p style={textStyle} >Frontend Engineer, Nigeria</p>
            <Button/>
            <p style={textStyle} >Joined Oct. 2024</p>
        </div>
    )
}
export default Exercise1;