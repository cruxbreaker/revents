import React from 'react';
import { Grid, Button } from "semantic-ui-react";
import EventList from '../components/EventList/EventList';
import EventForm from '../components/EventForm';

function EventsDashboard() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList />
            </Grid.Column>
            <Grid.Column width={6}>
                <Button positive content='Create Event' />
                <EventForm />
            </Grid.Column>
        </Grid>
    )
}

export default EventsDashboard
