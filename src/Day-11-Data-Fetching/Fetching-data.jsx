import { useEffect, useState } from "react"

const Data_URL = "https://jsonplaceholder.typicode.com/photos"

const Api01 = ()=>{
    const [posts, setPost] = useState<Post[]>([]);
    useEffect(()=>{
        const fetchPost = async () => {
            const response = await fetch(`${Data_URL}`)
        }
    }
    ,[])

    return (
        <div>
        <h1> Data Fetching in react</h1>
        <ul>
            {posts.map((post) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
        </div>
    )


}
export default Api01