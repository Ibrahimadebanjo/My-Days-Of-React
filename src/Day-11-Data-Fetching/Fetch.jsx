import { useEffect, useState } from "react"
const Data_URL = "https://api.webz.io/newsApiLite?token=9e5ba7af-dfd2-4593-99ba-fb97ae24a831&q=Bitcoin"

const Fetching = ()=> {
    const [posts, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=> {
    const fetchPost = async () => {
try {
const response = await fetch(`${Data_URL}`)
if(!response.ok){
    throw new Error("Network error")
}
const data = await response.json()
setPost(data)
setLoading(false)
} catch(e){
setError(e.message)
setLoading(false)
}
    };
 fetchPost()
    },[])

    if(loading) return <p>Loading...</p>
    if(error) return  <p>Error: {error}</p>

    return(
        <div>
            <h2>Post Image</h2>
            <ul>
              <li> {posts}</li>
            </ul>
        </div>
        
    )
}
export default Fetching