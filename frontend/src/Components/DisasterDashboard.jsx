import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, MapPin, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

const DisasterDashboard = () => {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/disasters")
      .then((res) => setDisasters(res.data))
      .catch((err) => console.error("Error fetching disasters:", err));
  }, []);

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Real-Time Disaster Tracking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {disasters.length > 0 ? (
          disasters.map((disaster, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card className="p-5 shadow-lg rounded-2xl border-l-8 border-red-500 bg-gray-50">
                <CardContent>
                  <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-900">
                    <ShieldAlert className="text-red-500" /> {disaster.name}
                  </h2>
                  <p className="text-gray-700 flex items-center gap-2 mt-2 text-lg">
                    <MapPin className="text-blue-500" /> {disaster.location}
                  </p>
                  <p className={`mt-3 flex items-center gap-2 text-${disaster.severity === 'High' ? 'red' : 'yellow'}-500 text-lg font-medium`}>
                    <AlertTriangle /> Severity: {disaster.severity}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600 text-xl">No disasters reported.</p>
        )}
      </div>
    </div>
  );
};

export default DisasterDashboard;
