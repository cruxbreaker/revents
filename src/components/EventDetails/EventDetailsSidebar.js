import React from 'react';
import { Segment, Item, Label } from 'semantic-ui-react';

function EventDetailsSidebar({ attendees }) {
  const isHost = false;

  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color='teal'>
        {attendees && attendees.length}{' '}
        {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
      </Segment>
      <Segment attached>
        <Item.Group divided>
          {attendees &&
            attendees.map((attendee) => (
              <Item key={attendee.id} style={{ position: 'relative' }}>
                {isHost ? (
                  <Label
                    style={{ position: 'absolute' }}
                    color='orange'
                    ribbon='right'>
                    Host
                  </Label>
                ) : null}
                <Item.Image size='tiny' src={attendee.photoURL} />
                <Item.Content verticalAlign='middle'>
                  <Item.Header as='h3'>{attendee.name}</Item.Header>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      </Segment>
    </>
  );
}

export default EventDetailsSidebar;
