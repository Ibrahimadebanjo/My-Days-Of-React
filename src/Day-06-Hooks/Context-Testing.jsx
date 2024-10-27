import  { useContext } from 'react'
import { AppContext } from '../Context/Context'

function ContextTesting() {
    const {phone, user, array} = useContext(AppContext)
  return (
    <div>
      <p>Phone : {phone} </p>
      <p>DIsplay User: {user.name}  and {array}</p>
    </div>
  )
}

export default ContextTesting
