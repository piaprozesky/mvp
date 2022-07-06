import React, { useState, useEffect } from "react";

import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import UserHomeView from "./views/UserHomeView";
import AdminView from "./views/AdminView";
import AdminPost from "./views/AdminPost";
import AdminFilled from "./views/AdminFilled";

function App() {
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

  async function addPost(newPost) {
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

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/user" element={<UserHomeView posts={posts} />} />
        <Route path="/admin" element={<AdminView posts={posts} />} />
        <Route
          path="/admin/post"
          element={<AdminPost addPost={(newPost) => addPost(newPost)} />}
        />
        <Route path="/admin/filled" element={<AdminFilled />} />
      </Routes>
    </div>
  );
}

export default App;
