const Skill = ({ skill: [tech, level] }) => (
    <li>
      {tech} {level}
    </li>
  )

  const Skills = ({ skills }) => {
    const skillsList = skills.map((skill) => <Skill skill={skill} />)
    console.log(skillsList)
    return <ul>{skillsList}</ul>
  }
  Skills.propTypes = {
    
}
  export default Skills