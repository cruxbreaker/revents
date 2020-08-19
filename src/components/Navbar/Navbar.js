import React, { useState } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';

import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

function Navbar() {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignIn = () => setAuthenticated(true);
  const handleSignOut = () => {
    history.push('/');
    setAuthenticated(false);
  };

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} exact to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/people' name='People' />
        <Menu.Item>
          <Button
            as={Link}
            to='/createEvent'
            floated='right'
            positive
            inverted
            content='Create Event'
          />
        </Menu.Item>
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu signIn={handleSignIn} />
        )}
      </Container>
    </Menu>
  );
}

export default Navbar;
