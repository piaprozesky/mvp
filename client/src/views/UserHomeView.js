import React, { useState, useEffect } from "react";

function UserHomeView(props) {
  return (
    <div className="UserHomeView">
      <h2>Home</h2>

      <div className="posts">
        {props.posts.map((post) => (
          <div key={post.id}>
            <h3> {post.company}</h3>
            <p>{post.title} </p>
            <p>{post.postdescription}</p>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default UserHomeView;
