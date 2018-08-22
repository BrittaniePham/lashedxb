import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Flash from './components/Flash';
import Services from './components/Services';
import Lashes from './components/Lashes';
import Contact from './components/Contact';

// #FFCDC8 pink theme

class App extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/services/lashes' component={Lashes} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    );
  }
}

export default App;
