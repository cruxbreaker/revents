import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { createEvent, updateEvent, deleteEvent } from '../actions/eventActions';

import EventList from '../components/EventList/EventList';

function EventsDashboard({ events, createEvent, updateEvent, deleteEvent }) {
  // handle delete event
  const handleDeleteEvent = (id) => {
    deleteEvent(id);
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity Feed</h2>
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
