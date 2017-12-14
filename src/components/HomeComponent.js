import React, { Component } from 'react';
import pokeball2 from '../images/pokeball2.png';
import { Link } from 'react-router-dom';
import { USER_CREATED, VERIFY_USER, LOGOUT } from '../serverChat/Events';
import bg1 from '../images/bg1.jpg';
import jenny from '../images/jenny.jpg';
import {
  Segment,
  Button,
  Card,
  Image,
  Icon,
  Progress,
  List,
  Label,
  Grid,
  Header,
  Container,
  Menu
} from 'semantic-ui-react';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null, //socketIo
      room: '',

      activeItem: '',
      selectedPokemon: [],
      selectedDeckName: '',
      selectedDeckId: [],
      redirect: false
    };
  }

  handle_deleteDecks = data => {
    let deckId = data.target.id;
    this.props.delete_decks(deckId);
  };

  onChange_selectedPokemon = data => {
    this.setState({ selectedPokemon: data.target.value });
  };

  onChange_selectedDeckName = data => {
    this.setState({ selectedDeckName: data.target.value });
  };

  onChange_selectedDeckId = data => {
    this.setState({ selectedDeckId: data.target.id });
  };

  handle_updateDeck = (event, data, deckName, pokemonIds) => {
    this.props.history.push(`/decks/${data.value.id}/update`);
    this.setState({ redirect: true }); //current this is not doing anything
  };

  handle_battlePage = (event, data) => {
    //this.handle_verifyUser();
    this.props.history.push(`/decks/${data.value.id}/battle`);
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handle_signOut = (event, { name }) => {
    event.preventDefault();
    this.setState({ activeItem: name });

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userIdSocket');

    this.socket_disconnect();
    this.props.signOut();
    this.props.history.push(`/`);
  };

  // ************************* SOCKET-IO CODES: ************************* //

  componentDidMount() {
    this.socket_verifyUser(); //does the 2nd user execute DidMount
  }

  setUser = user => {
    localStorage.setItem('userIdSocket', user.id);
  };

  socket_verifyUser = event => {
    const { userSignIn, socket } = this.props;
    let userIdSocket = localStorage.getItem('userIdSocket');

    socket && socket.emit(VERIFY_USER, userSignIn.name, userIdSocket);
    if (socket && userIdSocket === 'null') {
      socket.on(USER_CREATED, user => {
        this.setUser(user);
      });
    }
  };

  socket_disconnect = () => {
    const { userSignIn, socket } = this.props;
    let userIdSocket = localStorage.getItem('userIdSocket');
    if (!userIdSocket) {
      socket.emit(LOGOUT, userSignIn.name);
    }
  };

  //WIP allow user to choose a room
  socket_room = data => {
    this.setState({ room: data.target.value });
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
              <Image src={bg1} width="100%" height="300" />
            </Segment>

            <br />

            <Grid textAlign="center">
              <Header style={{ fontSize: '2em' }}>Deck Management</Header>
            </Grid>

            <br />

            <Menu compact onClick={this.handle_room}>
              <Menu.Item as="a">
                <Icon name="mail" /> Messages
                <Label color="red" floating>
                  22
                </Label>
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="users" /> Friends
                <Label color="teal" floating>
                  22
                </Label>
              </Menu.Item>
            </Menu>

            <Grid centered padded columns={4}>
              <Grid.Row>
                {this.props.userDecks.map((deck, i) => {
                  let numWin = parseInt(
                    Math.round(deck.wins / (deck.wins + deck.losses) * 100),
                    10
                  );
                  let numLose = parseInt(
                    Math.round(deck.losses / (deck.wins + deck.losses) * 100),
                    10
                  );
                  return (
                    <Grid.Column key={i} textAlign="center" stretched>
                      <Card.Group>
                        <Card id={deck.id} name="deckId">
                          <Icon
                            id={deck.id}
                            name="delete"
                            onClick={this.handle_deleteDecks}
                          />
                          <Card.Content>
                            <Image floated="right" size="mini" src={jenny} />
                            <Card.Header name="deckName" value={deck.deckname}>
                              {deck.deckname}
                            </Card.Header>
                            <List size="massive" horizontal>
                              {deck.cards.map((character, i) => {
                                return (
                                  <Label size="small" key={i} image>
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
                              value={deck}
                              basic
                              color="green"
                              onClick={this.handle_battlePage}>
                              READY
                            </Button>
                            <Button
                              value={deck}
                              basic
                              color="red"
                              onClick={this.handle_updateDeck}>
                              EDIT
                            </Button>
                          </Card.Content>
                          <Segment inverted>
                            <Progress
                              percent={numWin ? numWin : 0}
                              inverted
                              success
                              active
                              color="green"
                              progress="percent">
                              WINS
                            </Progress>
                            <Progress
                              percent={numLose ? numLose : 0}
                              inverted
                              warning
                              active
                              color="orange"
                              progress="percent">
                              LOSSES
                            </Progress>
                          </Segment>
                        </Card>
                      </Card.Group>
                      <br />
                    </Grid.Column>
                  );
                })}
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
