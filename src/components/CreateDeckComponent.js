import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import professorOak from '../images/professorOak.png';
import pokeball2 from '../images/pokeball2.png';
import bg4 from '../images/bg4.jpg';
import {
  Button,
  Menu,
  Form,
  Segment,
  Card,
  Header,
  Divider,
  Grid,
  Container,
  List,
  Image,
  Popup
} from 'semantic-ui-react';

export default class CreateDeckComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: '',
      selectedPokemon: [],
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
    this.props.history.push(`/home`);
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handle_signOut = (event, { name }) => {
    event.preventDefault();
    this.setState({ activeItem: name });
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.props.signOut();
    this.props.history.push(`/`);
  };

  render() {
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
              <Image src={bg4} width="100%" height="300" />
            </Segment>
            <br />
            <Grid textAlign="center">
              <Header style={{ fontSize: '2em' }}>Choose your Team</Header>
            </Grid>
            <br />
            <Card.Group itemsPerRow={9}>
              {this.props.pokemonArray &&
                this.props.pokemonArray.map((character, i) =>
                  <Card
                    key={i}
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
                <Grid.Row>
                  <Popup trigger={<Image src={professorOak} size="medium" />}>
                    {this.state.selectedPokemon.length < 6
                      ? <Popup.Header>- Select at least 6 pokemon</Popup.Header>
                      : 'got your pokemon!!'}

                    {this.state.selectedDeckName === ''
                      ? <Popup.Header>- Provide a deck name</Popup.Header>
                      : 'Good job!!'}
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
                        <Form.Checkbox label="I agree to use pokemon for good, not evil" />
                        <Button type="submit" onClick={this.handle_createDeck}>
                          CREATE
                        </Button>
                      </Form>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column floated="right" width={6}>
                    <Card.Group itemsPerRow={2}>
                      {this.state.selectedPokemon.map(character => {
                        return (
                          <Card
                            color="blue"
                            image={character.image}
                            id={character.id}
                            onClick={this.handle_deletePokemon}
                          />
                        );
                      })}
                    </Card.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
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
