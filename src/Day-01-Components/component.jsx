const header = (
    <header>
  <h4>This is another way of putting Functional Component</h4>
    </header>
)
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
 const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}
const author = {
    firstName: 'Ibrahim',
    lastName: 'Adebanjo',
  }
const yearBorn = 2001
const currentYear = 2024
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)
// Hex generator 
const HexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }
const buttonStyles = {
    padding: '10px 20px',
    background: 'rgb(0, 255, 0 )',
    border: 'none',
    borderRadius: 5,
  }
  const Button = () => <button style={buttonStyles}> action </button>
const FunctionalComponent = () => {
    return(
        <div>
            {header}
        <h1> This is a functional component</h1>
        <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      {personAge}
      <Button/>
      {/* <UserCard /> */}
      <HexaColor/>
   
    </div>
)
}
export  default FunctionalComponent;