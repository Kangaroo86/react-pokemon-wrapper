import React from 'react';
import { Link } from 'react-router-dom';
import pokemonTitle from '../images/pokemonTitle.png';
import pokeball2 from '../images/pokeball2.png';

import {
  Segment,
  Header,
  Image,
  List,
  Container,
  Menu,
  Grid,
  Divider
} from 'semantic-ui-react';

export default function InboxPageLayout(props) {
  // console.log('this prossss', props);

  return (
    <div>
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical>
        <Container>
          <Menu inverted pointing secondary size="large">
            <Link to="/signin">
              <Menu.Item as="a" active>
                SignIn
              </Menu.Item>
            </Link>
            <Link to="/signup">
              <Menu.Item as="a">SignUp</Menu.Item>
            </Link>
          </Menu>
        </Container>

        <Container text>
          <Image src={pokemonTitle} />
          <div className="box" />
          <div className="box box4" />
          <div className="box box2" />
          <Header
            as="h1"
            content="Imagine-a-Battle"
            inverted
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '4em'
            }}
          />
        </Container>
      </Segment>

      <Segment>
        {props.children}
      </Segment>

      <Segment inverted vertical style={{ padding: '2em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Container textAlign="center">
                <Divider inverted section />
                <Image centered size="mini" src={pokeball2} />
                <List horizontal inverted divided link>
                  <List.Item as="a" href="#">
                    gotta catch em all
                  </List.Item>
                </List>
              </Container>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
