import React from 'react';
import EventListItem from './EventListItem';

function EventList({ events, deleteEvent }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} deleteEvent={deleteEvent} />
      ))}
    </>
  );
}

export default EventList;
