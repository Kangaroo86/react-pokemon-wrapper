import React from 'react';
import pokeball04 from '../images/pokeball04.png';
import pokeball2 from '../images/pokeball2.png';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

import {
  Segment,
  Image,
  List,
  Container,
  Menu,
  Divider
} from 'semantic-ui-react';

export default function InboxPageLayout(props) {
  // console.log('this prossss', props);
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item as="a" heade>
            <Link to="/">
              <Image
                size="mini"
                src={pokeball2}
                style={{ marginRight: '1.5em' }}
              />
            </Link>
            Pokemon Decks
          </Menu.Item>
          <Menu.Item as="a" heade>
            <Link to="/">
              <Image
                size="mini"
                src={pokeball2}
                style={{ marginRight: '1.5em' }}
              />
            </Link>
            Build Decks
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
