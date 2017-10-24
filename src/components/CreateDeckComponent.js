import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import professorOak from '../images/professorOak.png';
import palletTown from '../images/palletTown.png';

import {
  Button,
  Form,
  Segment,
  Card,
  Header,
  Divider,
  Grid,
  Image,
  Popup
} from 'semantic-ui-react';

export default class CreateDeckComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPokemon: [],
      selectedDeckName: '',
      redirect: false
      //selectedUserName: ''
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

  //**delete Deck**// TODO WIP
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

  //**call Pokemon API**//
  handle_onPokemonObj = () => {
    if (this.props.pokemonArray.length < 18) {
      this.props.defaultPokemonArray.map(pokemon => {
        return this.props.onPokemonObj(pokemon.pokemonId);
      });
    }
  };

  //**setState Deck Name**//
  handle_selectedDeckName = data => {
    this.setState(this.setState({ selectedDeckName: data.target.value }));
  };

  //**setState User Name**//
  handle_selectedUserName = data => {
    this.setState(this.setState({ selectedUserName: data.target.value }));
  };

  //**Create Deck**//
  handle_createDeck = event => {
    const deckName = this.state.selectedDeckName.trim();
    const pickedPokemonId = this.state.selectedPokemon.map(
      character => character.id
    );
    this.props.create_decks(deckName, pickedPokemonId);
    this.setState({ redirect: true });
  };

  render() {
    return (
      <div>
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
        <Segment style={{ padding: '5em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row right>
              <Popup trigger={<Image src={professorOak} size="medium" />}>
                {this.state.selectedPokemon.length < 6
                  ? <Popup.Header>- Select at least 6 pokemon</Popup.Header>
                  : 'got your pokemon!!'}

                {this.state.selectedDeckName === ''
                  ? <Popup.Header>- Provide a deck name</Popup.Header>
                  : 'Good job!!'}

                {/* {this.state.selectedUserName === ''
                  ? <Popup.Header>- Missing UserName</Popup.Header>
                  : 'Nice user name'} */}
              </Popup>
              <Grid.Column width={5} floated="right">
                <Segment inverted width={2}>
                  <Form inverted>
                    <Form.Group widths="equal">
                      <Form.Input
                        label="Deck Name"
                        onChange={this.handle_selectedDeckName}
                        placeholder="Deck Name"
                        width={2}
                      />
                    </Form.Group>
                    {/* <Form.Group widths="equal">
                      <Form.Input
                        label="User Name"
                        onChange={this.handle_selectedUserName}
                        placeholder="User Name"
                        width={2}
                      />
                    </Form.Group> */}
                    <Form.Checkbox label="I agree to use pokemon for good, not evil" />
                    <Link to="/decks/render">
                      <Button type="submit" onClick={this.handle_createDeck}>
                        CREATE
                      </Button>
                    </Link>
                  </Form>
                </Segment>
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
