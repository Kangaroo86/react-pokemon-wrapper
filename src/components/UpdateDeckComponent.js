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

    this.state = {
      selectedPokemon: [],
      selectedDeckName: '',
      redirect: false
    };
  }

  //**setState select pokemon**//
  handle_selectedPokemon = (event, data) => {
    event.preventDefault();
    if (this.state.selectedPokemon.length < 6) {
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
    const characterIdArray = this.state.selectedPokemon.map(pokemon => {
      return pokemon.characterId;
    });
    const deckId = this.props.match.params.deckId;
    this.props.update_decks(
      {
        characterIdArray
      },
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
        </Grid>
        <br />
        <Card.Group ref="pokemonDisplayed" itemsPerRow={9}>
          {this.props.pokemonArray &&
            this.props.pokemonArray.map(pokemonObj => {
              return (
                <Card
                  color="red"
                  name={pokemonObj.name}
                  characterId={pokemonObj.characterId}
                  id={pokemonObj.id}
                  moves={pokemonObj.moves
                    .slice(0, 2)
                    .map(result => result.move.name)}
                  stats={pokemonObj.stats.map(result => {
                    let newState = {};
                    newState.base_stat = result.base_stat;
                    newState.name = result.stat.name;
                    return newState;
                  })}
                  types={pokemonObj.types.map(result => result.type.name)}
                  image={pokemonObj.sprites.front_default}
                  onClick={this.handle_selectedPokemon}
                />
              );
            })}
        </Card.Group>

        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Card.Group>
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
                    {/* <Card.Meta>User Name</Card.Meta> */}
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
                </Card>
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/* <Divider section /> */}
        <Segment style={{ padding: '5em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row right>
              <Grid.Column floated="right" width={6}>
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
        <br />
      </div>
    );
  }
}
