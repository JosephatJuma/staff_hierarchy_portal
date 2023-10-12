import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import MainLayout from "./MainLayout";
import Users from "./users/Users";
import Home from "./home/Home";
import Staff from "./staff/Staff";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Welcome />} /> */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="staff" element={<Staff />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
