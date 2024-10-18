import propTypes from "prop-types"

// const Skills = (props) => {
//     console.log(props.skills)
//     const skillList = props.skills.map((skill) => <li key={skill}>{skill}</li>);
//     return( 
//         <ul>{skillList}</ul>  
//     )   
    
// }
 
const UserInfo = (props) => {
    
    return(
  <div>
    <h1>{props.name}</h1>
    <p>with age :{props.age}</p>
    <p>I have {props.skills} skills</p>
    <p>Other info : {props.data.name},{props.data.school} and {props.data.status}</p>
    {/* <Skills/> */}
  </div>
    )
}
UserInfo.propTypes = {
    name : propTypes.string,
    age : propTypes.number,
    skills : propTypes.array,
    data : propTypes.object
}
export default UserInfo ;