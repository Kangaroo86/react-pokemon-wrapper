import React from 'react';
import pokeball2 from '../images/pokeball2.png';
import { Link } from 'react-router-dom';

import {
  Segment,
  Image,
  List,
  Container,
  Menu,
  Divider
} from 'semantic-ui-react';

export default function UpdateDeckPageLayout(props) {
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item as="a" heade>
            <Link to="/decks/render">
              <Image
                size="mini"
                src={pokeball2}
                style={{ marginRight: '1.5em' }}
              />
            </Link>
            Deck Management
          </Menu.Item>
        </Container>
      </Menu>

      <Segment>
        {props.children}
      </Segment>

      <Segment inverted style={{ margin: '1em 0em 0em', padding: '5em 0em' }}>
        <Container textAlign="center">
          <Divider inverted section />
          <Image centered size="mini" src={pokeball2} />
          <List horizontal inverted divided link>
            <List.Item as="a" href="#">
              gotta catch em all
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}
