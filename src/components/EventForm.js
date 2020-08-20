import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan,
} from 'revalidate';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import cuid from 'cuid';

import { createEvent, updateEvent } from '../actions/eventActions';
import TextInput from './Form/TextInput';
import TextArea from './Form/TextArea';
import SelectInput from './Form/SelectInput';
import DateInput from './Form/DateInput';

const category = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' },
];

const validate = combineValidators({
  title: isRequired({ message: 'Event title is required' }),
  category: isRequired({ message: 'Category is required' }),
  description: composeValidators(
    isRequired({ message: 'Category is required' }),
    hasLengthGreaterThan(4)({
      message: 'Description needs to be atleast 5 characters',
    })
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date'),
});

function EventForm({
  initialValues,
  invalid,
  submitting,
  pristine,
  history,
  createEvent,
  updateEvent,
  handleSubmit,
}) {
  // const [state, setState] = useState(event);

  // handle form submit
  const onFormSubmit = (values) => {
    if (initialValues.id) {
      updateEvent(values);
      history.push(`/events/${initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        attendees: [],
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Bob',
      };
      createEvent(newEvent);
      history.push(`/events/${newEvent.id}`);
    }
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment>
          <Header sub color='teal' content='Event Details' />
          <Form onSubmit={handleSubmit(onFormSubmit)} autoComplete='off'>
            <Field
              name='title'
              type='text'
              component={TextInput}
              placeholder='Give your event a name'
            />
            <Field
              name='category'
              type='text'
              component={SelectInput}
              options={category}
              placeholder='What is your event about?'
            />
            <Field
              name='description'
              type='text'
              component={TextArea}
              rows={3}
              placeholder='Tell us about your event'
            />
            <Header sub color='teal' content='Event Location Details' />
            <Field name='city' component={TextInput} placeholder='Event City' />
            <Field
              name='venue'
              component={TextInput}
              placeholder='Event Venue'
            />
            <Field
              name='date'
              component={DateInput}
              dateFormat='dd LLL yyyy h:mm a'
              showTimeSelect
              timeFormat='HH:mm'
              placeholder='Event Date'
            />

            <Button
              disabled={invalid || submitting || pristine}
              positive
              type='submit'>
              Submit
            </Button>
            <Button
              type='button'
              onClick={
                initialValues.id
                  ? () => history.push(`/events/${initialValues.id}`)
                  : () => history.push('/events')
              }>
              Cancel
            </Button>
          </Form>
        </Segment>
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
  return { initialValues: event };
};

const mapDispatchToProps = {
  createEvent,
  updateEvent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'eventForm', validate })(EventForm));
