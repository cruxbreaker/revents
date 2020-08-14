import React from 'react';
import { Button, Segment, Item, Icon, List } from 'semantic-ui-react';
import EventAttendee from './EventAttendee';

function EventListItem({ event }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Description>
                Hosted by <a href='/'>{event.hostedBy}</a>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {event.date} |
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees &&
            event.attendees.map((attendee) => (
              <EventAttendee key={attendee.id} attendee={attendee} />
            ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button color='teal' floated='right' content='View' />
      </Segment>
    </Segment.Group>
  );
}

export default EventListItem;
