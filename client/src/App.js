import React, { useState, useEffect } from "react";

import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import UserHomeView from "./views/UserHomeView";
import AdminView from "./views/AdminView";
import AdminPost from "./views/AdminPost";
// import AdminFilled from "./views/AdminFilled";
// import UserApplied from "./views/UserApplied";

function App() {
  let [posts, setposts] = useState([]);
  let [applicants, setApplicants] = useState([]);
  let [postApplicants, setPostApplicants] = useState([]);

  useEffect(() => {
    getposts();
  }, []);

  useEffect(() => {
    getApplicants();
  }, []);

  // useEffect(() => {
  //   getPostsWithApplicants();
  // }, []);

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

  const getPostsWithApplicants = async (id) => {
    let options = {
      method: "GET",
    };

    try {
      let response = await fetch(`/applicants/${id}`, options);

      if (response.ok) {
        let data = await response.json();
        setPostApplicants(data);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  };

  const getApplicants = async () => {
    let options = {
      method: "GET",
    };

    try {
      let response = await fetch(`/applicants`, options);

      if (response.ok) {
        let data = await response.json();
        setApplicants(data);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  };

  async function addPost(newPost) {
    newPost.filled = 0;

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    };

    try {
      let response = await fetch("/posts", options);

      if (response.ok) {
        let data = await response.json();
        setposts(data);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  }

  async function addApplicant(newApplicant) {
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newApplicant),
    };

    try {
      let response = await fetch("/applicants", options);

      if (response.ok) {
        let data = await response.json();
        setApplicants(data);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  }

  async function fillPost(post) {
    let options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    };
    try {
      let response = await fetch(`/posts/${post.post_id}`, options);

      if (response.ok) {
        let data = await response.json();
        setposts(data);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  }

  async function fillPostApplicant(post, applicant) {
    let tempObject = {
      post_id: post.post_id,
      applicant_id: applicant.applicant_id,
    };
    let options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tempObject),
    };
    try {
      let response = await fetch(`/posts_applicants/`, options);

      if (response.ok) {
        let data = await response.json();
        setApplicants(data);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <UserHomeView
              posts={posts}
              addApplicant={(newApplicant) => addApplicant(newApplicant)}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <AdminView
              posts={posts}
              applicants={applicants}
              fillPost={fillPost}
              fillPostApplicant={fillPostApplicant}
              postApplicants={postApplicants}
              getPostsWithApplicants={getPostsWithApplicants}
            />
          }
        />
        <Route
          path="/admin/post"
          element={<AdminPost addPost={(newPost) => addPost(newPost)} />}
        />
        {/* <Route path="/admin/filled" element={<AdminFilled />} /> */}
        {/* <Route
          path="/user/applied"
          element={
            <UserApplied
              postApplicants={postApplicants}
              applicants={applicants}
            />
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
