import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Events.css';

const EventsPage = () => {
  const [userData, setUserData] = useState(null);
  const [events, setEvents] = useState([]); // State to store events
  const [loading, setLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true); // Separate loading state for events

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
  
        const response = await axios.get('http://localhost:5000/api/users/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        setUserData(response.data); // Set user data if successful
      } catch (error) {
        console.error('Failed to fetch user data:', error.response?.data || error.message);
        
        if (error.response?.status === 403) {
          alert('Access denied: You are not an approved user.');
        }
  
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data); // Set fetched events
      } catch (error) {
        console.error('Failed to fetch events:', error.response?.data || error.message);
      } finally {
        setEventsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="loader">Loading user data...</div>;
  }

  if (!userData) {
    return <p>Error: Please log in to access this page.</p>;
  }

  return (
    <div className="events-page">
      <div className="user-details">
        <h1>Welcome, {userData.name}!</h1>
        <p>Email: {userData.email}</p>
        <p>Roll Number: {userData.rollNumber}</p>
      </div>
      
      <div className="e-container">
        {eventsLoading ? (
          <div className="loader">Loading events...</div>
        ) : events.length > 0 ? (
          events.map((event) => (
            <section key={event._id} className="events-section">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="btn">
                Go to Event
              </a>
            </section>
          ))
        ) : (
          <p>No events available at this time.</p>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
