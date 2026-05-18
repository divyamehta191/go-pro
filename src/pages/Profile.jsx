import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("No token found. Please login again.");
        return;
      }

      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data.user);
      } catch (error) {
        setMessage(
          error.response?.data?.message || "Unauthorized access"
        );
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="container">
      <div className="form">
       

        {message && <p>{message}</p>}

        {user ? (
          <h1 className="message1">Welcome, {user.name}</h1>
        ) : (
          !message && <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;