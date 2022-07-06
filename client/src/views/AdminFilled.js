import React, { useState, useEffect } from "react";

function AdminFilled() {
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
    <div>
      <p>and this paragraph is in admin filled</p>
      {posts.map((post) =>
        post.filled === 1 ? (
          <div key={post.id}>
            <h3> {post.company}</h3>
            <p>{post.title} </p>
            <p>{post.postdescription}</p>
          </div>
        ) : null
      )}
    </div>
  );
}

export default AdminFilled;
