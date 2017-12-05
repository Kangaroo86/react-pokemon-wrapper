import React, { Component } from 'react';
import jenny from '../images/jenny.jpg';
import { Link } from 'react-router-dom';

import {
  Segment,
  Card,
  Header,
  Grid,
  Icon,
  List,
  Image,
  Button,
  Progress,
  Label
} from 'semantic-ui-react';

export default class CreateDeckComponent extends Component {
  constructor(props) {
    super(props);

    let currentPokemon = [];
    this.props.userDecks.forEach(deck => {
      console.log('userDecks from updateCompnent----', deck);
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
    let result = this.state.selectedPokemon
      .slice()
      .filter(pokemonObj => pokemonObj.id !== data.id);
    this.setState({
      selectedPokemon: result
    });
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
    console.log('bf click selected pokemon', this.state.selectedPokemon);
    const characterIdArray = this.state.selectedPokemon.map(pokemon => {
      return pokemon.id;
    });
    const deckId = this.props.match.params.deckId;
    const userId = localStorage.getItem('userId');
    console.log(
      'after click this.state.selectedPokemon',
      this.state.selectedPokemon
    );
    console.log('deckId---------', deckId);
    console.log('userId---------', userId);
    this.props.update_decks(
      {
        characterIdArray
      },
      userId,
      deckId
    );
    this.setState({ redirect: true });
  };
  render() {
    let userObj = this.props.userDecks.filter(
      result => result.id === parseInt(this.props.match.params.deckId, 10)
    );

    return (
      <div>
        <Grid textAlign="center">
          <Header as="h3" style={{ fontSize: '2em' }}>
            Update your Pokemon
          </Header>
          <br />
          <Card.Group ref="pokemonDisplayed" itemsPerRow={9}>
            {this.props.pokemonArray &&
              this.props.pokemonArray.map(pokemonObj => {
                return (
                  <Card
                    color="red"
                    name={pokemonObj.name}
                    id={pokemonObj.id}
                    image={pokemonObj.sprites.front_default}
                    onClick={this.handle_selectedPokemon}
                  />
                );
              })}
          </Card.Group>
        </Grid>

        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column floated="right">
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
                      <Card.Header name="deckName" value={userObj[0].deckname}>
                        {userObj[0].deckname}
                      </Card.Header>
                      <List size="massive" horizontal>
                        {userObj[0].cards.map(character => {
                          return (
                            <Label size="small" image>
                              <Image src={character.sprites.front_default} />
                              {character.name}
                            </Label>
                          );
                        })}
                      </List>
                    </Card.Content>
                    <Card.Content extra>
                      <Button basic color="green">
                        READY
                      </Button>
                      <Link to="/decks/render">
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
                <Grid container stackable verticalAlign="middle">
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
      </div>
    );
  }
}
