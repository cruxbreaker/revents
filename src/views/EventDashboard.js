import React, { useState } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';

import EventList from '../components/EventList/EventList';
import EventForm from '../components/EventForm';

const eventsFromDashboard = [
  {
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
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
    ],
  },
];

function EventsDashboard() {
  const [events, setEvents] = useState(eventsFromDashboard, 'events');
  const [isFormOpen, setIsFormOpen] = useState(false, 'isFormOpen');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  // handle create event request
  const handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    setEvents([...events, newEvent]);
    setIsFormOpen(false);
  };

  // handle select event
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsFormOpen(true);
  };

  // handle update event
  const handleUpdateEvent = (updatedEvent) => {
    setEvents(
      events.map((event) => {
        if (event.id === updatedEvent.id) {
          return { ...updatedEvent };
        } else {
          return event;
        }
      })
    );
    setIsFormOpen(false);
    setSelectedEvent(null);
  };

  // handle delete event
  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
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

export default EventsDashboard;
