import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  Button,
  Form,
  Segment,
  Card,
  Header,
  Divider,
  Grid
} from 'semantic-ui-react';

const default_list_of_Pokemon = [
  {
    id: 1,
    name: 'Bulbasaur'
  },
  {
    id: 4,
    name: 'Charmander'
  },
  {
    id: 7,
    name: 'Squirtle'
  },
  {
    id: 152,
    name: 'Chikorita'
  },
  {
    id: 155,
    name: 'Cyndaquil'
  },
  {
    id: 158,
    name: 'Totodile'
  },
  {
    id: 252,
    name: 'Treecko'
  },
  {
    id: 255,
    name: 'Torchic'
  },
  {
    id: 258,
    name: 'Mudkip'
  },
  {
    id: 150,
    name: 'Mewtwo'
  },
  {
    id: 151,
    name: 'Mew'
  },
  {
    id: 25,
    name: 'Pikachu'
  },
  {
    id: 144,
    name: 'Articuno'
  },
  {
    id: 145,
    name: 'Zapdo'
  },
  {
    id: 146,
    name: 'Moltres'
  },
  {
    id: 243,
    name: 'Raikou'
  },
  {
    id: 244,
    name: 'Entei'
  },
  {
    id: 245,
    name: 'Suicune'
  }
];

export default class CreateDeckComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPokemon: [],
      selectedDeckName: ''
    };
  }

  // TODO: WIP: currently selected pokemon ID is incorrect, as it is one behind
  handle_selectedPokemon = (event, data) => {
    event.preventDefault();
    if (this.state.selectedPokemon.length < 6) {
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

  //**handle_deletePokemon**//
  handle_deletePokemon = (event, data) => {
    event.preventDefault();

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

  //**handle_selectedPokemon**//
  handle_onPokemonObj = () => {
    //console.log('default pokemon', this.props.defaultPokemonArray);
    if (this.props.pokemonArray.length < 18) {
      this.props.defaultPokemonArray.map(pokemon => {
        return this.props.onPokemonObj(pokemon.pokemonId);
      });
    }
  };

  //**handle_selectedDeckName**//
  handle_selectedDeckName = event => {
    this.setState({ selectedDeckName: event.target.value });
    console.log('deck name', this.state.selectedDeckName);
  };

  //**handle_selectedDeckName**// TODO WIP
  handle_submitDeck = event => {
    let deckName = this.state.selectedDeckName.trim();
  };

  render() {
    return (
      <div>
        {/* {console.log('Prop passed in: ', this.props)}; */}
        {/* {console.log('defaultPokemon', this.props.defaultPokemonArray)}; */}
        <br />
        <Grid textAlign="center">
          <Header as="h3" style={{ fontSize: '2em' }}>
            Choose your Pokemon
          </Header>
        </Grid>
        <br />
        <Card.Group ref="pokemonDisplayed" itemsPerRow={9}>
          {/* {this.handle_onPokemonObj} */}
          {this.props.pokemonArray &&
            this.props.pokemonArray.map(character =>
              <Card
                color="red"
                name={character.name}
                id={character.id}
                moves={character.moves
                  .slice(0, 2)
                  .map(result => result.move.name)}
                stats={character.stats.map(result => {
                  let newState = {};
                  newState.base_stat = result.base_stat;
                  newState.name = result.stat.name;
                  return newState;
                })}
                types={character.types.map(result => result.type.name)}
                image={character.sprites.front_default}
                onClick={this.handle_selectedPokemon}
              />
            )}
        </Card.Group>
        <Divider section />
        <Segment style={{ padding: '1em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={10}>
                <Form>
                  <Form.Group unstackable widths={2}>
                    <Form.Input
                      label="Deck Name"
                      placeholder="Deck Name"
                      onChange={this.handle_selectedDeckName}
                    />
                    <Form.Input label="User Name" placeholder="User Name" />
                  </Form.Group>
                  <Button
                    type="submit"
                    size="huge"
                    positive
                    fluid
                    onClick={this.handle_onPokemonObj}>
                    Create Deck
                  </Button>
                  <br />
                  <Link to="/decks/render">
                    <Button type="submit" size="huge" positive fluid>
                      Go to RenderPage
                    </Button>
                  </Link>
                </Form>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Card.Group ref="pokemonDisplayed" itemsPerRow={2}>
                  {this.state.selectedPokemon.map(character =>
                    <Card
                      color="blue"
                      image={character.image}
                      id={character.id}
                      onClick={this.handle_deletePokemon}
                    />
                  )}
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <br />
      </div>
    );
  }
}
