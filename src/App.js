import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import EventDashboard from './views/EventDashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container className='main'>
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;
