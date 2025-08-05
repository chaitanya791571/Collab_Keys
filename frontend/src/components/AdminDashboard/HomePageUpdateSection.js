import React, { useState } from 'react';
import "../../styles/updateDate.css";
import axios from 'axios';
const HomePageUpdateSection = ({triggerRefresh}) => {
    const [eventDate, setEventDate] = useState('');
    const [selectedEventId, setSelectedEventId] = useState(''); // Define the state for selected event ID

    const updateEventDate =async () => {
        if (!selectedEventId) {
            alert('Please select an event.');
            return;
        }
        try {
            const response = await axios.post('https://collabkeys-backend.onrender.com/api/home/update-date', {
              id: selectedEventId, // Pass the event ID
              date: eventDate, // Pass the new date
            });
        
            if (response.data.message === 'Event date updated successfully') {
              alert('Event date updated successfully');
              if (triggerRefresh) { // Check if triggerRefresh is available
                triggerRefresh(); // Call triggerRefresh to refresh the timeline
            } else {
                console.error('triggerRefresh is not a function');
            }
            }
          } catch (error) {
            console.error('Error updating event date:', error);
          }
        };

    return (
        <div>
            <h2>Update Events Date</h2>
            <div className='uDate'>
                {/* Dropdown to select an event */}
                <select value={selectedEventId} onChange={(e) => setSelectedEventId(e.target.value)}>
                    <option value="">Select Event</option>
                    <option value="1">HackerRank Contest</option>
                    <option value="2">Quiz</option>
                    <option value="3">Group Discussion</option>
                </select>

                {/* Date input */}
                <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                />
                <button onClick={updateEventDate}>Update Date</button>
            </div>
        </div>
    );
};

export default HomePageUpdateSection;
