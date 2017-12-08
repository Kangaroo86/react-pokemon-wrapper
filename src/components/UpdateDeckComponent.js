import React, { Component } from 'react';
import jenny from '../images/jenny.jpg';
import pokeball2 from '../images/pokeball2.png';
import { Link } from 'react-router-dom';
import bg10 from '../images/bg10.png';

import {
  Segment,
  Card,
  Header,
  Grid,
  Icon,
  List,
  Image,
  Button,
  Menu,
  Container,
  Progress,
  Label
} from 'semantic-ui-react';

export default class CreateDeckComponent extends Component {
  constructor(props) {
    super(props);

    let currentPokemon = [];
    this.props.userDecks.forEach(deck => {
      if (deck.id === Number(this.props.match.params.deckId)) {
        currentPokemon = deck.cards.map(pokemon => {
          return {
            color: 'red',
            name: pokemon.name,
            id: pokemon.id,
            image: pokemon.sprites.front_default
          };
        });
      }
    });

    this.state = {
      activeItem: '',
      selectedPokemon: currentPokemon,
      selectedDeckName: '',
      redirect: false
    };
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
      this.setState(currentState => {
        return {
          selectedPokemon: [...currentState.selectedPokemon, data]
        };
      });
    }
  };

  //**delete state Pokemon**//
  handle_deletePokemon = (event, data) => {
    let { selectedPokemon } = this.setState;
    let filteredArray = selectedPokemon.filter(
      pokeArray => pokeArray.id !== data.id
    );
    this.setState({ selectedPokemon: filteredArray });
  };

  //**setState Deck Name**//
  handle_selectedDeckName = data => {
    this.setState({ selectedDeckName: data.target.value });
  };

  //**setState User Name**//
  handle_selectedUserName = data => {
    this.setState({ selectedUserName: data.target.value });
  };

  //**Update Deck**//
  handle_updateDeck = event => {
    const characterIdArray = this.state.selectedPokemon.map(pokemon => {
      return pokemon.id;
    });
    const deckId = this.props.match.params.deckId;
    const userId = localStorage.getItem('userId');
    this.props.update_decks(
      {
        characterIdArray,
        userId
      },
      deckId
    );
    this.setState({ redirect: true });
  };

  handle_battlePage = (event, data) => {
    //console.log('my updatedeck data--------', data);
    //console.log('my updatedeck data--------', data.value[0].id);
    this.props.history.push(`/decks/${data.value[0].id}/battle`);
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  //**Sign out**//
  handle_signOut = (event, { name }) => {
    event.preventDefault();
    this.setState({ activeItem: name });
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.props.signOut();
    this.props.history.push(`/`);
  };

  render() {
    let userObj = this.props.userDecks.filter(
      result => result.id === parseInt(this.props.match.params.deckId, 10)
    );
    return (
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 300, padding: '1em 0em' }}
              vertical>
              <Menu inverted size="mini">
                <Menu.Item
                  fitted="vertically"
                  name="home"
                  active={this.state.activeItem === 'home'}
                  onClick={this.handleItemClick}>
                  <Image
                    size="mini"
                    src={pokeball2}
                    style={{ marginRight: '1.5em' }}
                  />
                  <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item
                  fitted="vertically"
                  name="Create Deck"
                  active={this.state.activeItem === 'Create Deck'}
                  onClick={this.handleItemClick}>
                  <Link to="/createdeck">Create Deck</Link>
                </Menu.Item>
                <Menu.Item
                  fitted="vertically"
                  name="signout"
                  active={this.state.activeItem === 'signout'}
                  onClick={this.handle_signOut}>
                  Sign-out
                </Menu.Item>
              </Menu>
              <Image src={bg10} width="100%" height="300" />
            </Segment>
            <br />
            <Grid textAlign="center">
              <Header style={{ fontSize: '2em' }}>Update your Deck</Header>
              <br />
              <Card.Group ref="pokemonDisplayed" itemsPerRow={9}>
                {this.props.pokemonArray &&
                  this.props.pokemonArray.map(pokemonObj => {
                    return (
                      <Card
                        id={pokemonObj.id}
                        color="red"
                        name={pokemonObj.name}
                        image={pokemonObj.sprites.front_default}
                        onClick={this.handle_selectedPokemon}
                      />
                    );
                  })}
              </Card.Group>
            </Grid>

            <Grid centered columns={3}>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Card.Group>
                    {userObj &&
                      userObj[0] &&
                      <Card id={userObj[0].id} name="deckId">
                        <Icon
                          id={userObj[0].id}
                          floated="left"
                          name="delete"
                          onClick={this.handle_deleteDecks}
                        />
                        <Card.Content>
                          <Image floated="right" size="mini" src={jenny} />
                          <Card.Header
                            name="deckName"
                            value={userObj[0].deckname}>
                            {userObj[0].deckname}
                          </Card.Header>
                          <List size="massive" horizontal>
                            {userObj[0].cards.map(character => {
                              return (
                                <Label size="small" image>
                                  <Image
                                    src={character.sprites.front_default}
                                  />
                                  {character.name}
                                </Label>
                              );
                            })}
                          </List>
                        </Card.Content>
                        <Card.Content extra>
                          <Button
                            value={userObj}
                            basic
                            color="green"
                            onClick={this.handle_battlePage}>
                            READY
                          </Button>
                          <Link to="/home">
                            <Button
                              basic
                              color="red"
                              onClick={this.handle_updateDeck}>
                              UPDATE
                            </Button>
                          </Link>
                        </Card.Content>
                        <Segment inverted>
                          <Progress percent={50} inverted progress success>
                            WINS
                          </Progress>
                          <Progress percent={50} inverted progress warning>
                            LOSSES
                          </Progress>
                        </Segment>
                      </Card>}
                  </Card.Group>
                </Grid.Column>

                <Grid.Column>
                  <Segment style={{ padding: '5em 0em' }} vertical>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column floated="left" width={8}>
                          <Card.Group ref="pokemonDisplayed" itemsPerRow={2}>
                            {this.state.selectedPokemon.map(pokemonObj =>
                              <Card
                                characterId={pokemonObj.characterId}
                                color="blue"
                                image={pokemonObj.image}
                                id={pokemonObj.id}
                                onClick={this.handle_deletePokemon}
                              />
                            )}
                          </Card.Group>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <br />

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
