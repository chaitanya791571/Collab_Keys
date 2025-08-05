// src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../styles/candidate.css"
const CandidatesSection = () => {
  const [unapprovedUsers, setUnapprovedUsers] = useState([]);

  // Fetch unapproved users when the component mounts
  useEffect(() => {
    const fetchUnapprovedUsers = async () => {
      try {
        const response = await axios.get('https://collabkeys-backend.onrender.com/api/users/unapproved');
        setUnapprovedUsers(response.data);
      } catch (error) {
        console.error('Error fetching unapproved users:', error);
      }
    };
    fetchUnapprovedUsers();
  }, []);

  // Approve a user
  const approveUser = async (userId) => {
    try {
      await axios.put(`https://collabkeys-backend.onrender.com/api/users/${userId}/approve`);
      // Update local state to remove the approved user from the unapproved list
      setUnapprovedUsers(unapprovedUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error approving user:', error);
    }
  };

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Unapproved Users</h2>
      <div className="unapproved-users-list">
        {unapprovedUsers.length > 0 ? (
          unapprovedUsers.map((user) => (
            <div key={user._id} className="user-card">
              <p><strong>Name:</strong> {user.fullName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Roll Number:</strong> {user.rollNumber}</p>
              <button onClick={() => approveUser(user._id)}>Approve</button>
            </div>
          ))
        ) : (
          <p>No unapproved users at this time.</p>
        )}
      </div>
    </div>
  );
};

export default CandidatesSection;
