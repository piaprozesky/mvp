import React, { useState, useEffect } from "react";

function UserHomeView() {
  let [posts, setposts] = useState([]);

  useEffect(() => {
    getposts();
  }, []);

  const getposts = async () => {
    let options = {
      method: "GET",
    };

    try {
      let response = await fetch(`/posts`, options);

      if (response.ok) {
        let data = await response.json();
        setposts(data);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  };

  return (
    <div className="UserHomeView">
      <h2>Home</h2>
      <p>Welcome!</p>

      <div className="posts">
        <ul>
          {/* {posts.map((post) => (
            <li key={post.id}>{post.company}</li>
          ))} */}
          {console.log(posts)}
        </ul>
      </div>
    </div>
  );
}

export default UserHomeView;
