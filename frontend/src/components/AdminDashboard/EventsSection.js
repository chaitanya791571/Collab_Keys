import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/updateEvent.css"
const EventSection = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', link: '' });

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddEvent = async () => {
    try {
      await axios.post('http://localhost:5000/api/events', newEvent);
      fetchEvents();
      setNewEvent({ title: '', description: '', link: '' });
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className='gLayout'>
      <div className='update'>
      <h2>Manage Events</h2>
        <input
          type="text"
          placeholder="Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Link"
          value={newEvent.link}
          onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <div className='event-detail'>
      <h2 style={{textAlign:'center'}}>Active Events</h2>
        {events.map((event) => (
          <div key={event._id} className='event-card'>
            <h3>{event.title}</h3>
            <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
