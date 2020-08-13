import React from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import { Container } from "semantic-ui-react";

import EventsDashboard from "./views/EventsDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container className="main">
        <EventsDashboard />
      </Container>
    </>
  );
}

export default App;
