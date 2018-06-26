import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import lashedlogo from '../images/lashedlogo.png';

class NoMatch extends Component {
  render() {
    return(
      <Segment basic style={styles.fullHeight}>
        <Segment basic textAlign='center'>
          <Image src={lashedlogo} style={styles.centered} size='large' alt='LashedxB logo' />
          <Header as='h1' style={styles.header}>Page not found</Header>
        </Segment>
        <Header as='h1' textAlign='center' inverted>
          Page Not Found
          <Link to='/'> - Go Home</Link>
        </Header>
      </Segment>
    );
  }
}

const styles = {
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#ffcdc8'
  },
  fullHeight: {
    height: '100vh',
  },
}

export default NoMatch;