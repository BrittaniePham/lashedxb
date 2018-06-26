import React, { Component } from 'react';
import { Card, Container, Header, Image } from 'semantic-ui-react';
import classic from '../images/classic.png';
import mixed from '../images/mixed.png';
import volume from '../images/volume.png';
import mega from '../images/mega.png';


class Lashes extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center">Prices</Header>
          <Card.Group itemsPerRow={4}>
              <Card raised>
                <Image src={classic} />
                <Card.Content>
                  <Card.Header>
                    Classic
                  </Card.Header>
                  <Card.Description>
                    Full Set: $100
                  </Card.Description>
                  <Card.Description>
                    Fill: $40
                  </Card.Description>
                </Card.Content>
              </Card>

              <Card raised>
                <Image src={mixed} />
                <Card.Content>
                  <Card.Header>
                    Classic/Volume Mix
                  </Card.Header>
                  <Card.Description>
                    Full Set: $135
                  </Card.Description>
                  <Card.Description>
                    Fill: $55
                  </Card.Description>
                </Card.Content>
              </Card>

              <Card raised>
                <Image src={volume} />
                <Card.Content>
                  <Card.Header>
                    Volume
                  </Card.Header>
                  <Card.Description>
                    Full Set: $175
                  </Card.Description>
                  <Card.Description>
                    Fill: $65
                  </Card.Description>
                </Card.Content>
              </Card>

              <Card raised>
                <Image src={mega} />
                <Card.Content>
                  <Card.Header>
                    Mega Volume
                  </Card.Header>
                  <Card.Description>
                    Full Set: $215
                  </Card.Description>
                  <Card.Description>
                    Fill: $75
                  </Card.Description>
                </Card.Content>
              </Card>

          </Card.Group>
      </Container>
    );
  }
}

export default Lashes;