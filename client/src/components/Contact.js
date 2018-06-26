import React, { Component } from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import phone from '../images/phone.jpg';
import ig from '../images/ig.gif';

class Contact extends Component {
  render() {
    return (
      <div>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image src={phone} size="medium"/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as='h1'> Phone: 555-555-5555 </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image src={ig} size="medium" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as='h1'> Instagram: LashedxB </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image src={phone} size="medium" />
            </Grid.Column>
            <Grid.Column>
              <Header as='h1'> Phone: 555-555-5555 </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Contact;