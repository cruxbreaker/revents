import React from 'react';
import { List, Image } from 'semantic-ui-react';

function EventAttendee() {
    return (
        <List.Item>
            <Image as='a' size='mini' circular src='https://randomuser.me/api/portraits/women/42.jpg' />
        </List.Item>
    )
}

export default EventAttendee
