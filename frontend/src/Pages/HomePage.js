import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Disaster Management System</h1>
      <p>Track disasters and respond efficiently.</p>
      <Link to="/report" className="btn btn-primary">Report a Disaster</Link>
    </div>
  );
};

export default HomePage;
