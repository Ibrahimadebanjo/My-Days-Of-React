import { useEffect, useState } from 'react';

function PostsList() {
  // State to store the fetched data, loading state, and any error
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Using useEffect to trigger the fetch only when component mounts
  useEffect(() => {
    // Async function to fetch data
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json(); // Parse the JSON response
        setPosts(data);                     // Update posts state
        setLoading(false);                   // Update loading state
      } catch (err) {
        setError(err.message);               // Set error if request fails
        setLoading(false);                   // Update loading state
      }
    };

    fetchPosts();
  }, []); // Empty dependency array to fetch only once

  // Handling different states: loading, error, and displaying data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
