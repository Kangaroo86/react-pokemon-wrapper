import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokeball2 from '../images/pokeball2.png';
import bg2 from '../images/bg2.jpg';
import jenny from '../images/jenny.jpg';
import {
  TextArea,
  Card,
  Grid,
  Divider,
  Comment,
  Container,
  List,
  Menu,
  Transition,
  Form,
  Icon,
  Label,
  Image,
  Table,
  Header,
  Button,
  Progress,
  Segment
} from 'semantic-ui-react';

import io from 'socket.io-client'; //socket-io
import env from '../env'; //socket-io
const socketUrl = `${env.API_BASE_URL}`; //socket-io
export const socket = io(socketUrl); //exported to battlePageContainer

let colors = ['red', 'violet', 'blue', 'pink', 'green'];

export default class BattlePageComponent extends Component {
  constructor(props) {
    super(props);

    let { getBattleState } = this.props;

    socket.on('connect', () => {
      console.log(
        'Socket Connected. Initalized from BattleComponent ',
        socket.id
      );
    });

    socket.on('MESSAGE_RESPONSE', messageObj => {
      console.log('>>>>>>textmessage & SocketId', messageObj, socket.id);
      this.props.updateMessagesProcess(messageObj);
    });

    this.state = {
      activeItem: '', //animation
      p1_animation: 'shake', //animation
      p1_duration: 500, //animation
      p1_visible: true, //animation
      p2_animation: 'shake', //animation
      p2_duration: 500, //animation
      p2_visible: true, //animation
      message: '', //socet io
      receivedMessages: [], //socket io
      socketMessages: [],
      ...getBattleState
    };
  }

  // *********************** PLAYER-1 CODES: *********************** //
  //p1 select a card from deckzone to battlezone
  handle_p1_select_card = (event, data) => {
    let { p1_battle_zone, p1_deck_zone } = this.state;
    let { set_BattleState } = this.props;

    if (p1_battle_zone.length < 1) {
      this.setState({ p1_battle_zone: [data] });

      let updatedDeckZone = p1_deck_zone.filter(pokeObj => {
        if (pokeObj.id !== data.id) {
          return pokeObj;
        }
      });

      this.setState({ p1_deck_zone: updatedDeckZone });

      set_BattleState(this.state);
    }
  };

  //p1 inflicts special atks to p2  TODO add more complex battle phase
  handle_p1_specialAtk = (event, data) => {
    let { p1_battle_zone, p2_battle_zone, p2_grave_yard } = this.state;
    let { set_BattleState } = this.props;
    let p1_stats = p1_battle_zone[0].stats;
    let p2_stats = p2_battle_zone[0].stats;

    p2_stats.hp = p2_stats.hp - p1_stats.spec_atk;

    this.p2_toggleVisibility();

    if (p2_stats.hp <= 0) {
      this.setState({ p2_grave_yard: [...p2_grave_yard, p2_battle_zone[0]] });
      this.setState({ p2_battle_zone: [] });
    } else {
      this.setState({ p2_battle_zone: p2_battle_zone });
    }

    this.setState({ p1_turn: false, p2_turn: true });
    set_BattleState(this.state);
  };

  //P1 inflicts normal atk to P2
  handle_p1_atk = (event, data) => {
    let { p1_battle_zone, p2_battle_zone, p2_grave_yard } = this.state;
    let { set_BattleState } = this.props;

    let p1_stats = p1_battle_zone[0].stats;
    let p2_stats = p2_battle_zone[0].stats;

    p2_stats.hp = p2_stats.hp - p1_stats.atk;

    if (p2_stats.hp <= 0) {
      this.setState({ p2_grave_yard: [...p2_grave_yard, p2_battle_zone] });
      this.setState({ p2_battle_zone: [] });
    } else {
      this.setState({ p2_battle_zone: p2_battle_zone });
    }

    this.setState({ p1_turn: false, p2_turn: true });
    set_BattleState(this.state);
  };

  // *********************** PLAYER-2 CODES: *********************** //
  //p2 select card to battle zone
  handle_p2_select_card = (event, data) => {
    let { p2_battle_zone, p2_deck_zone } = this.state;
    let { set_BattleState } = this.props;

    if (p2_battle_zone.length < 1) {
      this.setState({ p2_battle_zone: [data] });
      let updatedDeckZone = p2_deck_zone.filter(pokeObj => {
        if (pokeObj.id !== data.id) {
          return pokeObj;
        }
      });

      this.setState({ p2_deck_zone: updatedDeckZone });

      set_BattleState(this.state);
    }
  };

  //p2 atks p1 w/ special atk TODO add more complex battle phase
  handle_p2_specialAtk = (event, data) => {
    let { p2_battle_zone, p1_battle_zone, p1_grave_yard } = this.state;
    let { set_BattleState } = this.props;

    let p1_stats = p1_battle_zone[0].stats;
    let p2_stats = p2_battle_zone[0].stats;

    p1_stats.hp = p1_stats.hp - p2_stats.spec_atk;

    if (p1_stats.hp <= 0) {
      this.setState({ p1_grave_yard: [...p1_grave_yard, p1_battle_zone[0]] });
      this.setState({ p1_battle_zone: [] });
    } else {
      this.setState({ p1_battle_zone: p1_battle_zone });
    }

    this.setState({ p1_turn: true, p2_turn: false });
    set_BattleState(this.state);
  };

  //P2 inflicts normal atk to P1
  handle_p2_atk = (event, data) => {
    let { p2_battle_zone, p1_battle_zone, p1_grave_yard } = this.state;
    let { set_BattleState } = this.props;

    let p1_stats = p1_battle_zone[0].stats;
    let p2_stats = p2_battle_zone[0].stats;

    p1_stats.hp = p1_stats.hp - p2_stats.atk;

    if (p1_stats.hp <= 0) {
      this.setState({ p1_grave_yard: [...p1_grave_yard, p1_battle_zone[0]] });
      this.setState({ p1_battle_zone: [] });
    } else {
      this.setState({ p1_battle_zone: p1_battle_zone });
    }

    this.setState({ p1_turn: true, p2_turn: false });
    set_BattleState(this.state);
  };

  handle_ready = (event, data) => {
    let { listen_For_Updates } = this.props;
    listen_For_Updates();
  };

  // *********************** CSS ANIMATION CODES: *********************** //
  //image toggle when p1 get atked
  p1_toggleVisibility = () =>
    this.setState({ p1_visible: !this.state.p1_visible });

  //image toggle when p2 get atked
  p2_toggleVisibility = () =>
    this.setState({ p2_visible: !this.state.p2_visible });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handle_signOut = (event, { name }) => {
    event.preventDefault();
    this.setState({ activeItem: name });

    localStorage.removeItem('currentBattleId');
    localStorage.removeItem('playerNum');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userIdSocket');
    localStorage.removeItem('deckSelected');

    this.props.signOut();
    this.props.history.push(`/`);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.getBattleState !== this.props.getBattleState) {
      this.setState({
        ...nextProps.getBattleState
      });
    }
    // if (nextProps.messages !== this.props.messages) {
    //   this.setState({
    //     receivedMessages: nextProps.messages
    //   });
    // }
  }

  // componentDidMount() {
  //   // let { socket } = this.props;
  //   // console.log('socket---------------', socket);
  //
  //   socket.on('connect', () => {
  //     console.log(
  //       'Socket Connected. Initalized from BattleComponent ',
  //       socket.id
  //     );
  //   });
  //
  //   socket.on('MESSAGE_RESPONSE', messageObj => {
  //     console.log('>>>>>>textmessage & SocketId', messageObj, socket.id);
  //     this.props.updateMessagesProcess(messageObj);
  //   });
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('componentWillUpdate nextProps----------', nextProps);
  //   console.log('componentWillUpdate nextState----------', nextState);
  //   if (nextProps.messages === []) {
  //     this.setState({
  //       receivedMessages: false
  //     });
  //   }
  // }

  // ************************* SOCKET-IO CODES: ************************* //
  //send messages TO-THE backend
  //.emit means you are SENDING data to backend with specific a route, in this case SEND_MESSAGE
  handle_messageInput = data => {
    this.setState({ message: data.target.value });
  };

  handle_submitMessage = event => {
    event.preventDefault();
    const battleId = localStorage.getItem('currentBattleId');
    const userId = localStorage.getItem('userId');
    const { userSignIn } = this.props;
    let { message } = this.state;

    // listen_For_Message_Update({
    //   userId: userId,
    //   battleId: battleId,
    //   text: message,
    //   name: userSignIn.name
    // });

    let messageInputed = {
      userId: userId,
      battleId: battleId,
      text: message,
      name: userSignIn.name
    };

    socket.emit('MESSAGE_CREATE', messageInputed);

    this.setState({ message: '' });
  };

  render() {
    let {
      activeItem,
      message,
      p1_animation,
      p1_duration,
      p1_visible,
      p1_battle_zone,
      p1_deck_zone,
      p1_turn,
      p2_animation,
      p2_duration,
      p2_visible,
      p2_battle_zone,
      p2_deck_zone,
      p2_turn
    } = this.state;

    let { messages } = this.props;

    //console.log('this.state from BattlePageComponent------------', this.state);
    console.log('my props from BattlePageComponen------------', this.props);

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
              <Image src={bg2} width="100%" height="300" />
            </Segment>

            <Grid columns="equal" padded>
              <Grid>
                <Grid.Column floated="left" width={6}>
                  <Segment inverted>
                    <Divider fitted horizontal inverted>
                      Player - 1
                    </Divider>
                  </Segment>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Segment inverted>
                    <Divider fitted horizontal inverted>
                      Player - 2
                    </Divider>
                  </Segment>
                </Grid.Column>
              </Grid>

              {/* PLAYER-1 */}
              <Grid centered columns={5}>
                <Grid.Row>
                  <Grid.Column floated="left" width={2}>
                    <Card.Group itemsPerRow={1}>
                      {p1_deck_zone &&
                        p1_deck_zone.map((pokeObj, i) => {
                          return (
                            <Card
                              key={i}
                              color={colors[i]}
                              name={pokeObj.name}
                              id={pokeObj.id}
                              moves={pokeObj.moves}
                              stats={pokeObj.stats}
                              types={pokeObj.types}
                              image={pokeObj.image}
                              onClick={this.handle_p1_select_card}
                            />
                          );
                        })}
                    </Card.Group>
                  </Grid.Column>
                  <Grid.Column floated="left">
                    <Segment inverted color="black">
                      <Label size="large" as="a" color="olive" ribbon="right">
                        {p1_battle_zone && p1_battle_zone[0]
                          ? p1_battle_zone[0].name
                          : ''}
                      </Label>
                      <br />
                      <br />
                      <Grid columns="equal">
                        <Grid.Column>
                          <Table compact celled inverted selectable>
                            <Table.Body>
                              <Table.Row>
                                <Table.Cell width={1}>
                                  <Icon
                                    color="red"
                                    name="heartbeat"
                                    size="large"
                                  />
                                  HP:
                                </Table.Cell>
                                <Table.Cell>
                                  <br />
                                  <Progress
                                    active
                                    color="green"
                                    size="large"
                                    progress="ratio"
                                    value={
                                      p1_battle_zone && p1_battle_zone[0]
                                        ? p1_battle_zone[0].stats.hp
                                        : 0
                                    }
                                    total={
                                      p1_battle_zone && p1_battle_zone[0]
                                        ? p1_battle_zone[0].stats.total_hp
                                        : 0
                                    }
                                  />
                                </Table.Cell>
                              </Table.Row>
                            </Table.Body>
                          </Table>
                        </Grid.Column>
                      </Grid>
                      <Divider />
                      <Segment inverted color="olive" textAlign="center">
                        <Transition
                          animation={p1_animation}
                          duration={p1_duration}
                          visible={p1_visible}>
                          <Image
                            bordered
                            src={
                              p1_battle_zone &&
                              p1_battle_zone[0] &&
                              p1_battle_zone[0].image
                            }
                            centered
                            size="small"
                          />
                        </Transition>
                      </Segment>
                      <Divider />
                      <Grid celled centered>
                        <Segment inverted>
                          <Button.Group vertical labeled icon>
                            <Button
                              compact
                              size="medium"
                              inverted
                              color="teal"
                              //onClick={this.handle_p1_specialAtk}
                              onClick={this.player_1}>
                              <Icon name="lightning" />
                              SPEC ATK
                            </Button>
                            <Button
                              compact
                              size="medium"
                              inverted
                              color="violet"
                              onClick={this.handle_p1_atk}>
                              <Icon name="bomb" />
                              ATK
                            </Button>
                            <Button
                              onClick={!p1_turn ? this.handle_ready : null}
                              compact
                              size="medium"
                              inverted
                              color="brown">
                              <Icon name="shield" />
                              READY
                            </Button>
                          </Button.Group>
                        </Segment>
                      </Grid>
                    </Segment>
                  </Grid.Column>

                  <Comment.Group>
                    <Header as="h3" dividing>
                      Chat Room
                    </Header>

                    {messages &&
                      messages.map((message, i) => {
                        return (
                          <Comment key={i}>
                            <Comment.Content>
                              <Comment.Avatar src={jenny} />
                              <Comment.Author as="a">
                                {message.name ? message.name : 'Anonymous'}
                              </Comment.Author>
                              <Comment.Text>
                                {message.text}
                              </Comment.Text>
                            </Comment.Content>
                          </Comment>
                        );
                      })}

                    <Form>
                      <Form.Field
                        control={TextArea}
                        placeholder="Message..."
                        value={message}
                        onChange={this.handle_messageInput}
                      />
                      <Button
                        onClick={this.handle_submitMessage}
                        content="SEND"
                        color="blue"
                      />
                    </Form>
                  </Comment.Group>

                  {/* 2nd Player */}
                  <Grid.Column floated="right">
                    <Segment inverted color="black">
                      <Label size="large" as="a" color="olive" ribbon="right">
                        {p2_battle_zone && p2_battle_zone[0]
                          ? p2_battle_zone[0].name
                          : ''}
                      </Label>
                      <br />
                      <br />
                      <Grid columns="equal">
                        <Grid.Column>
                          <Table compact celled inverted selectable>
                            <Table.Body>
                              <Table.Row>
                                <Table.Cell width={1}>
                                  <Icon
                                    color="red"
                                    name="heartbeat"
                                    size="large"
                                  />
                                  HP:
                                </Table.Cell>

                                <Table.Cell>
                                  <br />
                                  <Progress
                                    active
                                    color="green"
                                    size="large"
                                    progress="ratio"
                                    value={
                                      p2_battle_zone && p2_battle_zone[0]
                                        ? p2_battle_zone[0].stats.hp
                                        : 0
                                    }
                                    total={
                                      p2_battle_zone && p2_battle_zone[0]
                                        ? p2_battle_zone[0].stats.total_hp
                                        : 0
                                    }
                                  />
                                </Table.Cell>
                              </Table.Row>
                            </Table.Body>
                          </Table>
                        </Grid.Column>
                      </Grid>
                      <Divider />
                      <Segment inverted color="olive" textAlign="center">
                        <Transition
                          animation={p2_animation}
                          duration={p2_duration}
                          visible={p2_visible}>
                          <Image
                            bordered
                            src={
                              p2_battle_zone &&
                              p2_battle_zone[0] &&
                              p2_battle_zone[0].image
                            }
                            centered
                            size="small"
                          />
                        </Transition>
                      </Segment>
                      <Divider />
                      <Grid celled centered>
                        <Segment inverted>
                          <Button.Group vertical labeled icon>
                            <Button
                              compact
                              size="medium"
                              inverted
                              color="teal"
                              //onClick={this.handle_p2_specialAtk}
                              onClick={this.player_2}>
                              <Icon name="lightning" />
                              SPEC ATK
                            </Button>
                            <Button
                              compact
                              size="medium"
                              inverted
                              color="violet"
                              onClick={this.handle_p2_atk}>
                              <Icon name="bomb" />
                              ATK
                            </Button>
                            <Button
                              onClick={!p2_turn ? this.handle_ready : null}
                              compact
                              size="medium"
                              inverted
                              color="brown">
                              <Icon name="shield" />
                              READY
                            </Button>
                          </Button.Group>
                        </Segment>
                      </Grid>
                    </Segment>
                  </Grid.Column>

                  <Grid.Column floated="right" width={2}>
                    <Card.Group itemsPerRow={1}>
                      {p2_deck_zone &&
                        p2_deck_zone.map((pokeObj, i) => {
                          return (
                            <Card
                              key={i}
                              color={colors[i]}
                              name={pokeObj.name}
                              id={pokeObj.id}
                              moves={pokeObj.moves}
                              stats={pokeObj.stats}
                              types={pokeObj.types}
                              image={pokeObj.image}
                              onClick={this.handle_p2_select_card}
                            />
                          );
                        })}
                    </Card.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid>

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
