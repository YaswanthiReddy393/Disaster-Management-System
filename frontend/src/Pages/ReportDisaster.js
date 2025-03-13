import React, { useState } from "react";
import axios from "axios";

const ReportDisaster = () => {
  const [formData, setFormData] = useState({
    disasterType: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/disasters", formData);
      alert("Disaster reported successfully!");
    } catch (error) {
      console.error("Error reporting disaster:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Report a Disaster</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Disaster Type</label>
          <input type="text" name="disasterType" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" name="location" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-danger">Report</button>
      </form>
    </div>
  );
};

export default ReportDisaster;
