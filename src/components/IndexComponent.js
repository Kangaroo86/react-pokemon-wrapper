import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokemonTitle from '../images/pokemonTitle.png';
import pokeball2 from '../images/pokeball2.png';
import cinema1 from '../images/cinema1.webm';
import cinema2 from '../images/cinema2.webm';
import cinema3 from '../images/cinema3.webm';
import cinema4 from '../images/cinema4.webm';
import oak1 from '../images/oak1.png';

import ReactPlayer from 'react-player';
import {
  Segment,
  Header,
  Image,
  Form,
  Card,
  List,
  Container,
  Button,
  Icon,
  Menu,
  Grid,
  Divider
} from 'semantic-ui-react';

export default class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //**setState select pokemon**//
  handle_selectedPokemon = (event, data) => {
    event.preventDefault();
    let duplicate = false;
    this.state.selectedPokemon.forEach(pokemon => {
      if (pokemon.id === data.id) {
        duplicate = true;
      }
    });
    if (!duplicate && this.state.selectedPokemon.length < 6) {
      this.setState(
        currentState => {
          return {
            selectedPokemon: [...currentState.selectedPokemon, data]
          };
        },
        () => {
          console.log(
            'selectedPokemon state ----->',
            this.state.selectedPokemon
          );
        }
      );
    }
  };

  //**delete state Pokemon**//
  handle_deletePokemon = (event, data) => {
    let result = this.state.selectedPokemon
      .slice()
      .filter(pokemonObj => pokemonObj.id !== data.id);

    // let result = [...this.state.selectedPokemon].filter(
    //   pokemonObj => pokemonObj.id !== data.id
    // );
    this.setState({
      selectedPokemon: result
    });
  };

  //**setState Deck Name**//
  handle_selectedDeckName = data => {
    this.setState({ selectedDeckName: data.target.value });
  };

  //**Create Deck**//
  handle_createDeck = event => {
    const deckName = this.state.selectedDeckName.trim();
    const pokemonIds = this.state.selectedPokemon.map(pokemon => pokemon.id);
    const userId = localStorage.getItem('userId');
    this.props.create_decks({
      deckName,
      pokemonIds,
      userId
    });
    this.setState({ redirect: true });
  };

  // <Container text>
  //   <ReactPlayer
  //     url={cinema1}
  //     //url="https://www.youtube.com/watch?v=FypSxNQ1QB8"
  //     //url="https://www.youtube.com/watch?v=XorMFUYd7q0"
  //     //url="https://www.youtube.com/watch?v=SWBpBJs-E4A"
  //     loop="true"
  //     playing
  //     //url={[{ src: '../images/cinema1.webm', type: 'video/webm' }]}
  //   />
  // </Container>
  // <Segment>
  //   <Image src={oak1} />
  // </Segment>
  render() {
    return (
      <Grid colums="equal">
        <Grid.Row>
          <Grid.Column>
            <Segment
              textAlign="center"
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical>
              <Segment fluid>
                <ReactPlayer
                  // style={{ display: '100%' }}
                  width="100%"
                  height="100%"
                  url={cinema2}
                  playing
                />
              </Segment>
            </Segment>

            <Grid colums="equal">
              <Grid.Row>
                <Grid.Column>
                  <Segment>
                    <Grid columns="equal" padded>
                      <Grid.Column style={{ maxWidth: 450 }} floated="left">
                        <Header as="h2" color="teal" textAlign="center">
                          <Image src={pokeball2} /> Sign-In to your account
                        </Header>
                        <Form size="large">
                          <Segment stacked>
                            <Form.Input
                              fluid
                              icon="user"
                              id="userId"
                              iconPosition="left"
                              placeholder="username"
                              onChange={this.handle_selectedName}
                            />
                            {this.state.errorName !== ''
                              ? <p style={{ color: 'Red' }}>
                                  {this.state.errorName}
                                </p>
                              : null}
                            <Form.Input
                              fluid
                              icon="lock"
                              id="passwordId"
                              iconPosition="left"
                              placeholder="password"
                              type="password"
                              onChange={this.handle_selectedPassword}
                            />
                            {this.state.errorPassword !== ''
                              ? <p style={{ color: 'Red' }}>
                                  {this.state.errorPassword}
                                </p>
                              : null}
                            <Button
                              color="teal"
                              fluid
                              size="large"
                              onClick={this.handle_signin}>
                              Sign-In
                            </Button>
                            <Divider horizontal>Or</Divider>
                            <Link to="/signup">
                              <Button color="black" fluid size="large">
                                Sign-Up
                              </Button>
                            </Link>
                          </Segment>
                        </Form>
                      </Grid.Column>

                      {/* {-------} */}

                      <Grid.Column>
                        <Header as="h2" color="teal" textAlign="center">
                          <Image src={pokeball2} /> Set-Up your account
                        </Header>
                        <Form size="large">
                          <Segment stacked>
                            <Form.Input
                              fluid
                              icon="user"
                              id="userId"
                              iconPosition="left"
                              placeholder="username"
                              onChange={this.handle_selectedName}
                            />
                            {this.state.errorName !== ''
                              ? <p style={{ color: 'Red' }}>
                                  {this.state.errorName}
                                </p>
                              : null}
                            <Form.Input
                              fluid
                              icon="lock"
                              id="passwordId"
                              iconPosition="left"
                              placeholder="password"
                              type="password"
                              onChange={this.handle_selectedPassword}
                            />
                            {this.state.errorPassword !== ''
                              ? <p style={{ color: 'Red' }}>
                                  {this.state.errorPassword}
                                </p>
                              : null}
                            <Button
                              color="teal"
                              fluid
                              size="large"
                              onClick={this.handle_signup}>
                              Sign-up
                            </Button>
                          </Segment>
                        </Form>
                      </Grid.Column>
                    </Grid>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Segment inverted vertical style={{ padding: '2em 0em' }}>
              <Container textAlign="center">
                <Image centered size="mini" src={pokeball2} />
                <List horizontal inverted divided link>
                  <List.Item as="a" href="#">
                    gotta catch em all
                  </List.Item>
                </List>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
