import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <AppBar position="static">
              <Toolbar>
                <Tabs>
                  <Link to="/">
                    <Tab label="General"></Tab>
                  </Link>
                  <Link to="/mash">
                    <Tab label="Mash & Boil"></Tab>
                  </Link>
                  <Link to="/fermentation">
                    <Tab label="Fermentation"></Tab>
                  </Link>
                  <Link to="/digital-twin">
                    <Tab label="3D View"></Tab>
                  </Link>
                </Tabs>
              </Toolbar>
            </AppBar>
          </div>
        </header>
        <section>
          <Switch>
            <Route path="/mash">
              <Mash />
            </Route>
            <Route path="/fermentation">
              <Fermentation />
            </Route>
            <Route path="/digital-twin">
              <DigitalTwin />
            </Route>
            <Route path="/">
              <General />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );

  function General() {
    return <h2>General</h2>;
  }

  function Mash() {
    return <h2>Mash</h2>;
  }

  function Fermentation() {
    return <h2>Fermentation</h2>;
  }

  function DigitalTwin() {
    return <h2>DigitalTwin</h2>;
  }
}

export default App;
