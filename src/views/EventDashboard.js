import React, { useState } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import { connect } from 'react-redux';

import { createEvent, updateEvent, deleteEvent } from '../actions/eventActions';

import EventList from '../components/EventList/EventList';
import EventForm from '../components/EventForm';

function EventsDashboard({ events, createEvent, updateEvent, deleteEvent }) {
  const [isFormOpen, setIsFormOpen] = useState(false, 'isFormOpen');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  // handle create event request
  const handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.attendees = [];
    newEvent.hostPhotoURL = '/assets/user.png';
    createEvent(newEvent);
    setIsFormOpen(false);
  };

  // handle select event
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsFormOpen(true);
  };

  // handle update event
  const handleUpdateEvent = (updatedEvent) => {
    updateEvent(updatedEvent);
    setIsFormOpen(false);
    setSelectedEvent(null);
  };

  // handle delete event
  const handleDeleteEvent = (id) => {
    deleteEvent(id);
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          selectEvent={handleSelectEvent}
          deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button onClick={toggleForm} positive content='Create Event' />
        {isFormOpen && (
          <EventForm
            key={selectedEvent ? selectedEvent.id : 0}
            onCancel={toggleForm}
            createEvent={handleCreateEvent}
            updateEvent={handleUpdateEvent}
            selectedEvent={selectedEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  events: state.events,
});

const mapDispatchToProps = {
  createEvent,
  updateEvent,
  deleteEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsDashboard);
