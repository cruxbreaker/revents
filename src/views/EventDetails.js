import React from 'react';
import { Grid } from 'semantic-ui-react';

import EventDetailsHeader from '../components/EventDetails/EventDetailsHeader';
import EventDetailsInfo from '../components/EventDetails/EventDetailsInfo';
import EventDetailsComments from '../components/EventDetails/EventDetailsComments';
import EventDetailsSidebar from '../components/EventDetails/EventDetailsSidebar';

function EventDetails() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader />
        <EventDetailsInfo />
        <EventDetailsComments />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailsSidebar />
      </Grid.Column>
    </Grid>
  );
}

export default EventDetails;
