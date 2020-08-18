import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';

function SignedInMenu({ signOut }) {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png' />
      <Dropdown pointing='top left' text='Username'>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item text='My Events' icon='calendar' />
          <Dropdown.Item
            as={Link}
            to='/people'
            text='My Network'
            icon='users'
          />
          <Dropdown.Item
            as={Link}
            to='/profile'
            text='My Profile'
            icon='user'
          />
          <Dropdown.Item
            as={Link}
            to='/settings'
            text='Settings'
            icon='settings'
          />
          <Dropdown.Item text='Sign Out' icon='power' onClick={signOut} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}

export default SignedInMenu;
