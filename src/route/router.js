import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../Pages/login";
import Quizapp from "../Pages/Quizapp";

export default function appRouter() {
  return (
    // <div></div>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quizapp" element={<Quizapp />} />
      </Routes>
    </Router>
  );
}
