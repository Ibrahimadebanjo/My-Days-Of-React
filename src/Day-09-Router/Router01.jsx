import { Link } from "react-router-dom"

const Router01 = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
        <Link to="/about"> About </Link>
        </li>
        <li>
        <Link to="/profile"> Profile </Link>
        </li>
    
          
      </ul>
    </div>
  )
}

export default Router01