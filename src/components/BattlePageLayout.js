import React from 'react';
import pokeball2 from '../images/pokeball2.png';
import { Link } from 'react-router-dom';

import { Image, Container, Menu } from 'semantic-ui-react';

export default function BattlePageLayout(props) {
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
        </Container>
      </Menu>

      {props.children}
    </div>
  );
}
