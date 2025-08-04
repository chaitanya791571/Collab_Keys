// src/components/AdminDashboard/AdminDashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CandidatesSection from './CandidatesSection';
import EventsSection from './EventsSection';
import HomePageUpdateSection from './HomePageUpdateSection';
import '../../styles/AdminDashboard.css'; // Import the CSS file

const AdminDashboard = ({triggerRefresh,refreshKey}) => {
    const navigate = useNavigate();
   
    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (!isAdmin) {
             // Redirect to login if not admin
        }
    }, [navigate]);

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-grid">
                <div className="dashboard-section1">
                    <CandidatesSection />
                </div>
                <div className="dashboard-section">
                    <EventsSection />
                </div>
                <div className="dashboard-section">
                    <HomePageUpdateSection triggerRefresh={triggerRefresh} refreshKey={refreshKey}/>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
