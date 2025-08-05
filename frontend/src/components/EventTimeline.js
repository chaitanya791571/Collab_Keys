import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Importing basic styles
import Modal from 'react-modal';
import '../styles/EventTimeline.css'; // Custom styling
import { FaCalendarAlt } from 'react-icons/fa'; // Icon for date
import { Link } from 'react-router-dom';

const EventTimeline = ({ triggerRefresh, refreshKey }) => { // Receive the props
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  // Function to fetch events
  const fetchEvents = useCallback(() => {
    axios
      .get('https://collabkeys-backend.onrender.com/api/auth/events')
      .then((response) => setEvents(response.data))
      .catch((error) => console.error('Error fetching events data:', error));
  }, []);

  // Initial and subsequent fetching
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents, refreshKey]); // Refetch when refreshKey changes

  // Open and close modal
  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="timeline-container">
      <h2 className="timeline-header">Upcoming Events</h2>
      <VerticalTimeline>
        {events.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            date={
              <span>
                <FaCalendarAlt style={{ marginRight: '2px', color: '#6a11cb' }} /> {/* Calendar Icon */}
                {event.date}
              </span>
            }
            icon={<FaCalendarAlt />} // Icon in the timeline point
            iconStyle={{ background: 'linear-gradient(to bottom right, #6a11cb, #2575fc)', color: '#fff' }}
            contentStyle={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease-in-out',
            }}
            contentArrowStyle={{ borderRight: '7px solid #2575fc' }}
            onTimelineElementClick={() => openModal(event)}
            className="timeline-element"
          >
            <h3 className="vertical-timeline-element-title">{event.name}</h3>
            <p>{event.details}</p>
            {event.topic && <p className="event-topic"><strong>Topic:</strong> {event.topic}</p>}
            <Link to="/events" className="details-btn">View Details</Link>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Modal for Event Details */}
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onRequestClose={closeModal}
          contentLabel="Event Details"
          className="modal"
          overlayClassName="overlay"
        >
          <h2>{selectedEvent.name}</h2>
          <p>
            <strong>Date:</strong>{' '}
            <FaCalendarAlt style={{ marginRight: '5px', color: '#6a11cb' }} /> {selectedEvent.date}
          </p>
          {selectedEvent.topic && <p><strong>Topic:</strong> {selectedEvent.topic}</p>}
          <p>{selectedEvent.details}</p>
          <button onClick={closeModal} className="close-btn">Close</button>
        </Modal>
      )}
    </div>
  );
};

export default EventTimeline;
