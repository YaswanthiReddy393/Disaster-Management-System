import React, { useEffect, useState } from "react";
import axios from "axios";

const DisasterDashboard = () => {
  const [disasters, setDisasters] = useState([]);
  const [formData, setFormData] = useState({ location: "", type: "", severity: "" });

  useEffect(() => {
    fetchDisasters();
  }, []);

  const fetchDisasters = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/disasters");
      setDisasters(response.data);
    } catch (error) {
      console.error("Error fetching disasters:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const reportDisaster = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/disasters", formData);
      fetchDisasters();
      setFormData({ location: "", type: "", severity: "" });
    } catch (error) {
      console.error("Error reporting disaster:", error);
    }
  };

  return (
    <div>
      <h1>Disaster Management Dashboard</h1>
      
      <h2>Report a Disaster</h2>
      <form onSubmit={reportDisaster}>
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleInputChange} required />
        <input type="text" name="type" placeholder="Disaster Type" value={formData.type} onChange={handleInputChange} required />
        <input type="text" name="severity" placeholder="Severity" value={formData.severity} onChange={handleInputChange} required />
        <button type="submit">Report</button>
      </form>

      <h2>Ongoing Disasters</h2>
      <ul>
        {disasters.map((disaster) => (
          <li key={disaster._id}>{disaster.location} - {disaster.type} (Severity: {disaster.severity})</li>
        ))}
      </ul>
    </div>
  );
};

export default DisasterDashboard;