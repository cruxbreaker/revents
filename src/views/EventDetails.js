import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import EventDetailsHeader from '../components/EventDetails/EventDetailsHeader';
import EventDetailsInfo from '../components/EventDetails/EventDetailsInfo';
import EventDetailsComments from '../components/EventDetails/EventDetailsComments';
import EventDetailsSidebar from '../components/EventDetails/EventDetailsSidebar';

function EventDetails({ event }) {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader event={event} />
        <EventDetailsInfo event={event} />
        <EventDetailsComments />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailsSidebar attendees={event && event.attendees} />
      </Grid.Column>
    </Grid>
  );
}

const mapStateToProps = (state, props) => {
  const eventId = props.match.params.id;
  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }

  return {
    event,
  };
};

export default connect(mapStateToProps)(EventDetails);
