import React, { Component } from 'react';
import { Image, Container } from 'semantic-ui-react'
import lashedlogo from '../images/lashedlogo.png';

class Home extends Component {
  render() {
    return (
      <Container>
        <Image src={lashedlogo} centered size="large"/>
      </Container>
    );
  }
}

export default Home;