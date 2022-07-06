import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import UserHomeView from "./views/UserHomeView";
import AdminView from "./views/AdminView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/user" element={<UserHomeView />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
    </div>
  );
}

export default App;
