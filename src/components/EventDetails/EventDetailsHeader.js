import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image, Button, Item, Header } from 'semantic-ui-react';

const styles = {
  eventImageStyle: {
    filter: 'brightness(30%)',
  },
  eventImageTextStyle: {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white',
  },
};

function EventDetailsHeader({ event }) {
  return (
    <Segment.Group>
      <Segment basic attached='top' style={{ padding: '0' }}>
        <Image
          src={`/assets/categoryImages/${event && event.category}.jpg`}
          fluid
          style={styles.eventImageStyle}
        />

        <Segment basic style={styles.eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size='huge'
                  content={event && event.title}
                  style={{ color: 'white' }}
                />
                <p>{event && event.date}</p>
                <p>
                  Hosted by <strong>{event && event.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached='bottom'>
        <Button>Cancel My Place</Button>
        <Button color='teal'>JOIN THIS EVENT</Button>

        <Button
          as={Link}
          to={`/updateEvent/${event.id}`}
          color='orange'
          floated='right'>
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
}

export default EventDetailsHeader;
