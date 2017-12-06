import React from 'react';
import pokeball2 from '../images/pokeball2.png';
import { Link } from 'react-router-dom';
//import ReactAudioPlayer from 'react-audio-player';

import {
  Segment,
  Image,
  List,
  Container,
  Menu,
  Divider
} from 'semantic-ui-react';

export default function RenderAllDecksPageLayout(props) {
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item>
            <Image
              size="mini"
              src={pokeball2}
              style={{ marginRight: '1.5em' }}
            />
            Pokemon Decks
          </Menu.Item>
          <Link to="/decks/createDeck">
            <Menu.Item>
              <Image
                size="mini"
                src={pokeball2}
                style={{ marginRight: '1.5em' }}
              />
              Create New Deck
            </Menu.Item>
          </Link>
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
            {/* <ReactAudioPlayer
              src="http://files.simey.me/pokonami/battle.mp3"
              autoPlay
              // loop="true"
            /> */}
          </List>
        </Container>
      </Segment>
    </div>
  );
}
