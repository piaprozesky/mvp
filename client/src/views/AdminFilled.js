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
    <div className="container">
      <div className="pt-5"></div>
      <h2>Filled Postions</h2>
      <div className="pt-2"></div>
      {posts.map((post) =>
        post.filled === 1 ? (
          <div className="card col-md-3 p-4" key={post.id}>
            <h4 className="card-title"> {post.company}</h4>
            <h6 className="card-subtitle">{post.title} </h6>
            <p className="card-text">{post.postdescription}</p>
          </div>
        ) : null
      )}
    </div>
  );
}

export default AdminFilled;
