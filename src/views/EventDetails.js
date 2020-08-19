import React from 'react';
import { Grid } from 'semantic-ui-react';

import EventDetailsHeader from '../components/EventDetails/EventDetailsHeader';
import EventDetailsInfo from '../components/EventDetails/EventDetailsInfo';
import EventDetailsComments from '../components/EventDetails/EventDetailsComments';
import EventDetailsSidebar from '../components/EventDetails/EventDetailsSidebar';

const event = {
  id: '1',
  title: 'Trip to Tower of London',
  date: '2018-03-27',
  category: 'culture',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
  city: 'London, UK',
  venue: "Tower of London, St Katharine's & Wapping, London",
  hostedBy: 'Bob',
  hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
  attendees: [
    {
      id: 'a',
      name: 'Bob',
      photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    },
    {
      id: 'b',
      name: 'Tom',
      photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
  ],
};

function EventDetails() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader event={event} />
        <EventDetailsInfo event={event} />
        <EventDetailsComments />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailsSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
}

export default EventDetails;
