import React, { Component } from 'react';
import pokeball2 from '../images/pokeball2.png';
import { Link } from 'react-router-dom';
import bg1 from '../images/bg1.jpg';
import {
  Segment,
  Header,
  List,
  Image,
  Container,
  Icon,
  Button,
  Grid,
  Sidebar,
  Menu
} from 'semantic-ui-react';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: ''
    };
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // <Segment
    //   inverted
    //   textAlign="center"
    //   style={{ minHeight: 300, padding: '1em 0em' }}
    //   vertical
    // />
    return (
      // <img class="ui image" src={bg1} />
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Segment
              //style={{ 'background-image': src = { bg1 }) }}
              inverted
              textAlign="center"
              style={{ minHeight: 300, padding: '1em 0em' }}
              vertical>
              <Menu inverted>
                <Menu.Item
                  name="home"
                  active={this.state.activeItem === 'home'}
                  onClick={this.handleItemClick}>
                  <Image
                    size="mini"
                    src={pokeball2}
                    style={{ marginRight: '1.5em' }}
                  />
                  Home
                </Menu.Item>
                <Menu.Item
                  name="deck management"
                  active={this.state.activeItem === 'deck management'}
                  onClick={this.handleItemClick}>
                  Deck Management
                </Menu.Item>
                <Menu.Item
                  name="signout"
                  active={this.state.activeItem === 'signout'}
                  onClick={this.handleItemClick}>
                  Sign-out
                </Menu.Item>
              </Menu>
              <Image src={bg1} width="100%" height="250" />
            </Segment>
            <Segment />
            <Segment inverted vertical style={{ padding: '2em 0em' }}>
              <Container textAlign="center">
                <Image centered size="mini" src={pokeball2} />
                <List horizontal inverted divided link>
                  <List.Item>gotta catch em all</List.Item>
                </List>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
