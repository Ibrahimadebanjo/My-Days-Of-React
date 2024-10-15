//  HEX generator


//   function 1 for HexaColor 
const HexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }
//   function 2 for HexaColor 
  const HexaColor2 = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

  //   function 3 for HexaColor 
  const HexaColor3 = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }
  //   function 4 for HexaColor 
  const HexaColor4 = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }
  //   function 5 for HexaColor 
  const HexaColor5 = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

// style for Box 1
const hexStyle = {
    backgroundColor: HexaColor(),
    width: "100%",
    color: "white",
    paddingTop : "25px",
    paddingBottom : "25px",
    textAlign: "center",
 marginBottom : "10px"
}
// style for Box 2 
const hexStyle2 = {
    backgroundColor: HexaColor2(),
    width: "100%",
    color: "white",
    paddingTop : "25px",
    paddingBottom : "25px",
    textAlign: "center",
    marginBottom : "10px"

}

// style for Box 3 
const hexStyle3 = {
    backgroundColor: HexaColor3(),
    width: "100%",
    color: "white",
    paddingTop : "25px",
    paddingBottom : "25px",
    textAlign: "center",
    marginBottom : "10px"

}

// style for Box 4
const hexStyle4 = {
    backgroundColor: HexaColor4(),
    width: "100%",
    color: "white",
    paddingTop : "25px",
    paddingBottom : "25px",
    textAlign: "center",
    marginBottom : "10px"

}
// style for Box 5 
const hexStyle5 = {
    backgroundColor: HexaColor5(),
    width: "100%",
    color: "white",
    paddingTop : "25px",
    paddingBottom : "25px",
    textAlign: "center",
    marginBottom : "10px"

}




  const HexGenerator = () => {
    return (
        <div>
         <h1>HEXA Color Generator</h1>
        <div style={hexStyle}>
            < HexaColor />
        </div>
        <div style={hexStyle2}>
            < HexaColor2 />
        </div>
        <div style={hexStyle3}>
            < HexaColor3 />
        </div>
        <div style={hexStyle4}>
            < HexaColor4 />
        </div>
        <div style={hexStyle5}>
            < HexaColor5 />
        </div>
        </div>
    )
  }
  export default HexGenerator ;