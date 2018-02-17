import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokeball2 from '../images/pokeball2.png';
import bg2 from '../images/bg2.jpg';
import jenny from '../images/jenny.jpg';
import {
  Card,
  Grid,
  Divider,
  Comment,
  Container,
  List,
  Menu,
  Transition,
  Input,
  Icon,
  Label,
  Image,
  Table,
  Button,
  Progress,
  Segment
} from 'semantic-ui-react';

// import io from 'socket.io-client'; //socket-io
// import env from '../env'; //socket-io
// const socketUrl = `${env.API_BASE_URL}`; //socket-io
// export const socket = io(socketUrl); //exported to battlePageContainer

let colors = ['red', 'violet', 'blue', 'pink', 'green'];

export default class BattlePageComponent extends Component {
  constructor(props) {
    super(props);

    let {
      getBattleState,
      update_messages,
      listen_for_updates,
      get_battleState
    } = this.props;

    //initalized socket & created room
    // socket.on('connect', () => {
    //   console.log('Socket initalized: ', socket.id);
    // });

    //update_messages();
    listen_for_updates();
    //get_battleState();

    // socket.on('MESSAGE_RESPONSE', messageObj => {
    //   //console.log('am i receing messages-------------', messageObj);
    //   update_messages(messageObj);
    // });

    // console.log('battleId+++++++++++++++++', battleId);
    // socket.emit('CREATE_ROOM', battleId);

    // socket.on('UPDATED_BATTLE_STATE', obj => {
    //   console.log('backend result-----------', obj);
    //   listen_for_updates(obj);
    // });

    this.state = {
      activeItem: '', //animation
      p1_animation: 'shake', //animation
      p1_duration: 500, //animation
      p1_visible: true, //animation
      p2_animation: 'shake', //animation
      p2_duration: 500, //animation
      p2_visible: true, //animation
      message: '', //socet io
      createRoom: false,
      ...getBattleState
    };
  }

  // *********************** PLAYER-1 CODES: *********************** //

  //
  handle_ready = (event, data) => {
    let { listen_for_updates, set_battleState } = this.props;

    console.log('this.state----------------', this.state);
    // this.setState({ p2_turn: true, p1_turn: false });
    //this.setState({ p2_turn: true });
    set_battleState(this.state);
    //listen_for_updates();
  };

  //p1 select a card from deckzone to battlezone
  handle_p1_select_card = (event, data) => {
    let { p1_battle_zone, p1_deck_zone } = this.state;
    let { set_battleState } = this.props;

    if (p1_battle_zone.length < 1) {
      this.setState({ p1_battle_zone: [data] });

      let updatedDeckZone = p1_deck_zone.filter(
        pokeObj => pokeObj.id !== data.id
      );

      this.setState({ p1_deck_zone: updatedDeckZone });
    }
    console.log('handle_p1_select_card myState-------', this.state);
    set_battleState(this.state);
  };

  //p1 inflicts special atks to p2  TODO add more complex battle phase
  handle_p1_specialAtk = (event, data) => {
    let { p1_battle_zone, p2_battle_zone, p2_grave_yard } = this.state;
    let { set_battleState } = this.props;
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
    console.log('myState22222-------', this.state);
    //set_battleState(this.state);
  };

  //P1 inflicts normal atk to P2
  handle_p1_atk = (event, data) => {
    let { p1_battle_zone, p2_battle_zone, p2_grave_yard } = this.state;
    let { set_battleState } = this.props;

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
    set_battleState(this.state);
  };

  // *********************** PLAYER-2 CODES: *********************** //
  //p2 select card to battle zone
  handle_p2_select_card = (event, data) => {
    let { p2_battle_zone, p2_deck_zone } = this.state;
    let { set_battleState } = this.props;

    if (p2_battle_zone.length < 1) {
      this.setState({ p2_battle_zone: [data] });
      let updatedDeckZone = p2_deck_zone.filter(
        pokeObj => pokeObj.id !== data.id
      );

      this.setState({ p2_deck_zone: updatedDeckZone });

      set_battleState(this.state);
    }
  };

  //p2 atks p1 w/ special atk TODO add more complex battle phase
  handle_p2_specialAtk = (event, data) => {
    let { p2_battle_zone, p1_battle_zone, p1_grave_yard } = this.state;
    let { set_battleState } = this.props;

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
    set_battleState(this.state);
  };

  //P2 inflicts normal atk to P1
  handle_p2_atk = (event, data) => {
    let { p2_battle_zone, p1_battle_zone, p1_grave_yard } = this.state;
    let { set_battleState } = this.props;

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
    set_battleState(this.state);
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
    let { delete_battleState } = this.props;
    let battleId = localStorage.getItem('currentBattleId');

    this.setState({ activeItem: name });
    delete_battleState(battleId);

    localStorage.removeItem('currentBattleId');
    localStorage.removeItem('deckSelected');
    localStorage.removeItem('playerNum');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userIdSocket');

    this.props.clear_rootReducer();

    this.props.signOut();
    this.props.history.push(`/`);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.getBattleState !== this.props.getBattleState) {
      this.setState({
        ...nextProps.getBattleState
      });
    }
  }

  // componentDidMount() {
  //   console.log('did i happen');
  //   this.props.get_userDecks().then(() => {
  //     console.log('A----------');
  //     this.props.get_battleState().then(() => {
  //       console.log('B----------');
  //       this.handle_createRoom();
  //     });
  //   });
  // }
  // ************************* SOCKET-IO CODES: ************************* //
  //send messages TO-THE backend
  handle_messageInput = event => {
    this.setState({ message: event.target.value });
  };

  handle_createRoom = () => {
    const battleId = localStorage.getItem('currentBattleId');

    this.setState({ createRoom: true });
    this.props.create_room(battleId);
  };

  handle_submitMessage = event => {
    let { message } = this.state;

    if (event.which === 13) {
      event.preventDefault();
      const battleId = localStorage.getItem('currentBattleId');
      const userId = localStorage.getItem('userId');
      const userName = localStorage.getItem('userName');

      let messageInputed = {
        userId: userId,
        battleId: battleId,
        text: message,
        name: userName
      };

      //socket.emit('CREATE_ROOM', battleId);
      //socket.emit('CREATE_MESSAGE', messageInputed);
      //this.props.create_room(battleId);
      this.props.create_message(messageInputed);

      this.setState({ message: '' });
    }
  };

  render() {
    let {
      activeItem,
      createRoom,
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

    console.log('rendered this state: ------------', this.state);
    //console.log('messages+++++++++++', this.props.messages);

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
                              //onClick={this.player_1}
                              onClick={this.handle_p1_specialAtk}>
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
                              onClick={p1_turn ? this.handle_ready : null}
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
                    {/* <Header as="h3" dividing>
                      Chat Room
                    </Header> */}

                    {!createRoom
                      ? <Menu inverted compact onClick={this.handle_createRoom}>
                          <Menu.Item as="a">
                            <Icon size="big" name="users" /> CREATE ROOM
                            <Label color="teal" floating>
                              0
                            </Label>
                          </Menu.Item>
                        </Menu>
                      : <Menu inverted compact disabled>
                          <Menu.Item as="a">
                            <Icon size="big" name="users" /> CHAT ROOM
                            <Label color="teal" floating>
                              22
                            </Label>
                          </Menu.Item>
                        </Menu>}

                    {messages &&
                      messages.map((message, i) => {
                        return (
                          <Comment key={i}>
                            <Comment.Content>
                              <Comment.Avatar src={jenny} />
                              <Comment.Author as="a">
                                {message && message.name
                                  ? message.name
                                  : 'Anonymous'}
                              </Comment.Author>
                              <Comment.Text>
                                {message && message.text}
                              </Comment.Text>
                            </Comment.Content>
                          </Comment>
                        );
                      })}

                    {/* <Form>
                      <Form.Field
                        control={TextArea}
                        placeholder="Message..."
                        value={message}
                        onChange={this.handle_messageInput}
                      />
                      <Button
                        content="SEND"
                        color="blue"
                        onClick={this.handle_submitMessage}
                      />
                    </Form> */}
                    <div
                      style={{
                        zIndex: '52',
                        left: '21.1rem',
                        right: '1rem',
                        width: '100%',
                        flexShrink: '0',
                        order: '2',
                        marginTop: '0.5em'
                      }}>
                      <Input
                        style={{
                          height: '1%',
                          fontSize: '2em',
                          marginBottom: '1em'
                        }}
                        type="textarea"
                        name="message"
                        ref="BattlePageComponent"
                        autoFocus="true"
                        placeholder="message"
                        value={message}
                        onChange={this.handle_messageInput}
                        onKeyDown={this.handle_submitMessage}
                      />
                    </div>
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
                              onClick={p2_turn ? this.handle_ready : null}
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
