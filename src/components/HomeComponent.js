import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import pokeball2 from '../images/pokeball2.png';
import { Link } from 'react-router-dom';
import bg1 from '../images/bg1.jpg';
import jenny from '../images/jenny.jpg';
import {
  Segment,
  Button,
  Card,
  Image,
  Icon,
  Progress,
  Message,
  Statistic,
  List,
  Label,
  Grid,
  Header,
  Modal,
  Container,
  Menu
} from 'semantic-ui-react';

let colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
  'red',
  'orange',
  'yellow',
  'olive',
  'green'
];

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: '',
      selectedDeck: '',
      createBattle: false,
      createRoom: false,
      ready: false
      //redirect: false
    };
  }

  handle_countDown = ({ hours, minutes, seconds, completed }) => {
    let deckId = localStorage.getItem('deckSelected');
    let { history } = this.props;
    if (completed) {
      history.push(`/decks/${deckId}/battle`);
    } else {
      return (
        <Statistic color="olive" inverted size="tiny">
          <Statistic.Value>
            {seconds}'
          </Statistic.Value>
        </Statistic>
      );
    }
  };

  handle_deleteDecks = data => {
    let deckId = data.target.id;
    this.props.delete_decks(deckId);
  };

  handle_updateDeck = (event, data, deckName, pokemonIds) => {
    this.props.history.push(`/decks/${data.value.id}/update`);
    //this.setState({ redirect: true }); //current this is not doing anything
  };

  handle_createBattle = (event, data) => {
    const { create_battle } = this.props;

    create_battle();
    this.setState({ createBattle: true });
  };

  handle_createRoom = () => {
    const battleId = localStorage.getItem('currentBattleId');
    let { create_room } = this.props;

    this.setState({ createRoom: true });
    create_room(battleId);

    this.setState({ ready: true });
    //history.push(`/decks/${deckId}/battle`);
  };

  handle_selectDeck = (event, data) => {
    localStorage.setItem('deckSelected', data.value.id);
    this.setState({ selectedDeck: data.value });
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handle_signOut = (event, { name }) => {
    event.preventDefault();
    this.setState({ activeItem: name });

    localStorage.removeItem('currentBattleId');
    localStorage.removeItem('deckSelected');
    localStorage.removeItem('playerNum');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userIdSocket');

    this.props.signOut();
    this.props.history.push(`/`);
  };

  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps********insde Props', nextProps);
  //   if (nextProps.userDecks !== this.props.userDecks) {
  //     this.props.get_userDecks();
  //   }
  // }

  // ************************* SOCKET-IO CODES: ************************* //

  render() {
    let {
      activeItem,
      createBattle,
      createRoom,
      selectedDeck,
      ready
    } = this.state;
    let { userDecks } = this.props;

    //console.log('props-----------', this.props);

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
                  active={activeItem === 'home'}
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
                  active={activeItem === 'Create Deck'}
                  onClick={this.handleItemClick}>
                  <Link to="/createdeck">Create Deck</Link>
                </Menu.Item>
                <Menu.Item
                  fitted="vertically"
                  name="signout"
                  active={activeItem === 'signout'}
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

            {/* <Menu inverted compact onClick={this.handle_room}>
              <Menu.Item as="a" active="createBattle" color={'teal'}>
                <Icon size="big" name="game" color={'black'} /> CREATE BATTLE
                <Label color="red" floating>
                  22
                </Label>
              </Menu.Item>

              <Menu.Item as="a" onClick={this.socket_requestBattle}>
                <Icon size="big" name="users" /> REQUEST BATTLE
                <Label color="teal" floating>
                  22
                </Label>
              </Menu.Item>
            </Menu> */}

            {/* ternary operator, when a user have no deck */}
            {userDecks.length <= 0
              ? <Message compact color="red">
                  please create a deck
                </Message>
              : !selectedDeck.id
                ? <Message compact color="red">
                    please select a deck for battle
                  </Message>
                : <Message compact color="blue">
                    {selectedDeck.deckname + ' was selected'}
                  </Message>}

            <br />

            {selectedDeck
              ? <Modal
                  size={'mini'}
                  trigger={
                    <Button basic color="green">
                      READY
                    </Button>
                  }>
                  <Segment inverted>
                    <Header
                      textAlign="center"
                      size="large"
                      inverted
                      color="grey">
                      {selectedDeck.deckname}
                    </Header>
                  </Segment>
                  <Modal.Content image>
                    <Image wrapped size="tiny" src={jenny} />

                    <Modal.Description>
                      <List divided relaxed>
                        <List.Item>
                          {!createBattle
                            ? <List.Icon
                                name="close"
                                size="large"
                                verticalAlign="middle"
                              />
                            : <List.Icon
                                color="green"
                                name="check"
                                size="large"
                                verticalAlign="middle"
                              />}
                          <List.Content>
                            {!createBattle
                              ? <List.Header as="a">
                                  create a battle
                                </List.Header>
                              : <List.Header as="a">
                                  battle was created!
                                </List.Header>}
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          {!createRoom
                            ? <List.Icon
                                name="close"
                                size="large"
                                verticalAlign="middle"
                              />
                            : <List.Icon
                                color="green"
                                name="check"
                                size="large"
                                verticalAlign="middle"
                              />}
                          <List.Content>
                            {!createRoom
                              ? <List.Header as="a">
                                  create a chat-room
                                </List.Header>
                              : <List.Header as="a">
                                  chat-room was created!
                                </List.Header>}
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          {!createRoom || !createBattle
                            ? <List.Icon
                                name="close"
                                size="large"
                                verticalAlign="middle"
                              />
                            : <List.Icon
                                color="green"
                                name="check"
                                size="large"
                                verticalAlign="middle"
                              />}
                          <List.Content>
                            {!ready
                              ? <List.Header as="a">PENDING...</List.Header>
                              : <List.Header as="a">SUCCESSFUL</List.Header>}
                          </List.Content>
                        </List.Item>
                      </List>
                    </Modal.Description>
                  </Modal.Content>
                  {!ready
                    ? <Segment size="tiny" inverted textAlign="right">
                        {!createBattle
                          ? <Button
                              basic
                              color="green"
                              onClick={this.handle_createBattle}>
                              CREATE BATTLE
                            </Button>
                          : <Button
                              basic
                              color="blue"
                              onClick={this.handle_createRoom}>
                              CREATE ROOM
                            </Button>}
                      </Segment>
                    : <Segment size="tiny" inverted textAlign="right">
                        <Countdown
                          date={Date.now() + 5000}
                          renderer={this.handle_countDown}
                        />
                      </Segment>}
                </Modal>
              : ''}

            <Grid centered padded columns={4}>
              <Grid.Row>
                {userDecks.map((deck, i) => {
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
                        <Card
                          id={deck.id}
                          name="deckId"
                          fluid
                          color={colors[i]}>
                          <Icon
                            id={deck.id}
                            name="delete"
                            size="large"
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
                              onClick={this.handle_selectDeck}>
                              SELECT DECK
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
                <List horizontal inverted divided>
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
