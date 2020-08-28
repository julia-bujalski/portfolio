import React from 'react';
import './App.css';
import { Switch, withRouter, Route } from 'react-router';

import Home from './views/Home';
import About from './views/About';
import Starlies from './views/Starlies';
import Spectra from './views/Spectra';
import Hausily from './views/Hausily';
import Connections from './views/Connections';
import Quickscope from './views/Quickscope';
import Introspection from './views/Introspection';
import Misfits from './views/Misfits';
import BackThenHistory from './views/BackThenHistory';
import Minerva from './views/Minerva';
import Freelance from './views/Freelance';

import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/starlies" component={Starlies} />
        <Route exact path="/spectra" component={Spectra} />
        <Route exact path="/hausily" component={Hausily} />
        <Route exact path="/connections" component={Connections} />
        <Route exact path="/quickscope" component={Quickscope} />
        <Route exact path="/introspection" component={Introspection} />
        <Route exact path="/backthenhistory" component={BackThenHistory} />
        <Route exact path="/minerva" component={Minerva} />
        <Route exact path="/freelance" component={Freelance} />
        <Route exact path="/allwork" component={Misfits} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
