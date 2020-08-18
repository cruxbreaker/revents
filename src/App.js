import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import Home from './views/Home';
import EventDashboard from './views/EventDashboard';
import EventDetails from './views/EventDetails';
import People from './views/People';
import Profile from './views/Profile';
import Settings from './views/Settings';

import Navbar from './components/Navbar/Navbar';
import EventForm from './components/EventForm';

function App() {
  return (
    <>
      <Route path='/' exact component={Home} />
      <Route
        path='/(.+)'
        render={() => (
          <>
            <Navbar />
            <Container className='main'>
              <Route path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetails} />
              <Route path='/people' component={People} />
              <Route path='/profile/:id' component={Profile} />
              <Route path='/settings' component={Settings} />
              <Route path='/createEvent' component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
