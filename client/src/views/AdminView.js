import React, { useState, useEffect } from "react";

function AdminView(props) {
  // let [posts, setposts] = useState([]);

  // useEffect(() => {
  //   getposts();
  // }, []);

  // const getposts = async () => {
  //   let options = {
  //     method: "GET",
  //   };

  //   try {
  //     let response = await fetch(`/posts`, options);

  //     if (response.ok) {
  //       let data = await response.json();
  //       setposts(data);
  //     } else {
  //       console.log(`server error: ${response.status} ${response.statusText}`);
  //     }
  //   } catch (err) {
  //     console.log(`network error: ${err.message}`);
  //   }
  // };

  return (
    <div className="UserHomeView">
      <h2>My posts</h2>
      <div className="posts">
        {props.posts.map((post) => (
          <div key={post.id}>
            <h3> {post.company}</h3>
            <p>{post.title} </p>
            <p>{post.postdescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminView;
