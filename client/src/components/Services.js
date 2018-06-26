import React, { Component } from 'react';
import { Menu, Header, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import classic from '../images/classic.png';
import wax from '../images/wax.jpg';
import nails from '../images/nails.jpg';
import lashext from '../images/lashext.jpg'


class Services extends Component {
  render() {
    return (
      <div>
        <Card.Group itemsPerRow={3}>

          <Card>
            <Card.Content>
              <Card.Header style={styles.header}>
                Waxing
              </Card.Header>
              <Image src={wax} size="medium"/>
              <Card.Description>
              Waxing is one of the most commonly used methods of hair removal. For those of you who don’t know, this technique basically consists of extracting hair from below the surface of the skin, making it detach from the follicle easier.  In spite of the different techniques that exist and that have sprouted up, waxing continues to be preferred, as its effects are longer-lasting than other methods of hair removal, such as shaving, and it is very easy to apply.
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header style={styles.header}>
                Lash Extensions
              </Card.Header>
              <Image src={lashext} size="medium"/>
              <Card.Description>
                <p>
                  Long, thick and full eyelashes are desired by many women and often seen on the
                  pages of many beauty magazines. Unfortunately, we are not all genetically blessed 
                  with perfect lashes.
                </p>
                <p> 
                  By attaching synthetic hairs to your individual natural eyelashes with a 
                  special adhesive, you can get fabulous looking eyes that will make you stand out in a crowd.  
                  Lash extensions applied by a Certified Lash technician, can be costly, and although 
                  some lash stylists offer lash extensions dirt cheap, you get what you pay for.
                </p>
                <p>
                  Not to worry,
                  after making this investment in yourself, the many benefits will quickly remind you why 
                  you did it.
                </p>
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header style={styles.header}>
                Nails
              </Card.Header>
              <Image src={nails} size="medium"/>
              <Card.Description>
                some cool words will go here about another service or something. Idk, maybe you do massages or something. lol. These words are here as a placeholder. idk waht to write and im lazy to go copy and paste so im just oging to type random things like how funny ryan gosling and his cereal is. Cats are cool. To be honest, I'm going to vegas for july 4th and you dont even know it yet muahahhahah
              </Card.Description>
            </Card.Content>
          </Card>

        </Card.Group>
      </div>
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

export default Services;