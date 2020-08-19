import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Segment, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';

import { createEvent, updateEvent } from '../actions/eventActions';

function EventForm({
  event,
  history,
  createEvent,
  updateEvent,
  selectedEvent,
}) {
  const [state, setState] = useState(event);

  useEffect(() => {
    if (selectedEvent) setState({ ...selectedEvent });
  }, [selectedEvent]);

  // handle form fields change
  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, [name]: value });

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.id) {
      updateEvent(state);
      history.push(`/events/${state.id}`);
    } else {
      const newEvent = {
        ...state,
        id: cuid(),
        attendees: [],
        hostPhotoURL: '/assets/user.png',
      };
      createEvent(newEvent);
      history.push(`/events/${newEvent.id}`);
    }
    setState(event);
  };

  // destructure the state
  const { title, date, city, venue, hostedBy } = state;

  return (
    <Segment>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Field>
          <label>Event Title</label>
          <input
            name='title'
            value={title}
            onChange={handleChange}
            placeholder='Event Name'
          />
        </Form.Field>
        <Form.Field>
          <label>Event Date</label>
          <input
            type='date'
            name='date'
            value={date}
            onChange={handleChange}
            placeholder='Event Date'
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            name='city'
            value={city}
            onChange={handleChange}
            placeholder='City event is taking place'
          />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input
            name='venue'
            value={venue}
            onChange={handleChange}
            placeholder='Enter the Venue of the event'
          />
        </Form.Field>
        <Form.Field>
          <label>Hosted By</label>
          <input
            name='hostedBy'
            value={hostedBy}
            onChange={handleChange}
            placeholder='Enter the name of person hosting'
          />
        </Form.Field>
        <Button positive type='submit'>
          Submit
        </Button>
        <Button type='button' onClick={history.goBack}>
          Cancel
        </Button>
      </Form>
    </Segment>
  );
}

const mapStateToProps = (state, props) => {
  const eventId = props.match.params.id;

  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: '',
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }
  console.log(props);
  return { event };
};

const mapDispatchToProps = {
  createEvent,
  updateEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
