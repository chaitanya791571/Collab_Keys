const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Path to events.json
const eventsFilePath = path.join(__dirname, '../data/events.json');

router.post('/update-date', (req, res) => {
    const { id, date } = req.body;
  
    if (!id || !date) {
      return res.status(400).json({ error: 'ID and date are required' });
    }
  
    fs.readFile(eventsFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading events file:', err);
        return res.status(500).json({ error: 'Failed to read events file' });
      }
  
      try {
        const events = JSON.parse(data);
  
        // Update the event
        const event = events.find(event => event.id === id);
        if (!event) {
          return res.status(404).json({ error: 'Event not found' });
        }
        event.date = date;
  
        // Save updated events
        fs.writeFile(eventsFilePath, JSON.stringify(events, null, 2), (writeErr) => {
          if (writeErr) {
            console.error('Error writing to events file:', writeErr);
            return res.status(500).json({ error: 'Failed to update events file' });
          }
  
          // Return updated events
          res.json({ message: 'Event date updated successfully', events });
        });
      } catch (parseErr) {
        console.error('Error parsing events file:', parseErr);
        return res.status(500).json({ error: 'Failed to parse events file' });
      }
    });
  });

module.exports = router;
