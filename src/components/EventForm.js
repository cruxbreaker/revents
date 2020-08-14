import React, { useState } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const initialFormState = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: '',
};

function EventForm({ onSubmit, onCancel }) {
  const [state, setState] = useState(initialFormState);

  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
    setState(initialFormState);
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
        <Button type='button' onClick={onCancel}>
          Cancel
        </Button>
      </Form>
    </Segment>
  );
}

export default EventForm;
