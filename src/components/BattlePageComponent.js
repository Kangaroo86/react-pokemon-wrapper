import React, { Component } from 'react';
import pokeball2 from '../images/pokeball2.png';
import { Link } from 'react-router-dom';
import bg2 from '../images/bg2.jpg';
import eevee from '../images/eevee.png';
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

let colors = ['red', 'violet', 'blue', 'pink', 'green'];

export default class RenderAllDecksComponent extends Component {
  constructor(props) {
    super(props);

    let { userDecks } = this.props;
    let P1_cards = [];
    let P2_cards = [];

    userDecks.filter(deck => {
      if (deck.id === Number(this.props.match.params.deckId)) {
        P1_cards = deck.cards.map((pokeObj, i) => {
          let updatedStats = {};
          pokeObj.stats.forEach(statObj => {
            if (statObj.stat.name === 'hp') {
              updatedStats.hp = statObj.base_stat;
              updatedStats.total_hp = statObj.base_stat;
            } else if (statObj.stat.name === 'special-defense') {
              updatedStats.spec_def = statObj.base_stat;
            } else if (statObj.stat.name === 'special-attack') {
              updatedStats.spec_atk = statObj.base_stat;
            } else if (statObj.stat.name === 'defense') {
              updatedStats.def = statObj.base_stat;
            } else if (statObj.stat.name === 'attack') {
              updatedStats.atk = statObj.base_stat;
            } else if (statObj.stat.name === 'speed') {
              updatedStats.spd = statObj.base_stat;
            }
          });
          console.log('updatedStats*********', updatedStats);
          return {
            id: pokeObj.id,
            name: pokeObj.name,
            moves: pokeObj.moves,
            image: pokeObj.sprites.front_default,
            types: pokeObj.types,
            stats: updatedStats
          };
        });
      }
    });
    this.state = {
      activeItem: '',

      P1_animation: 'shake',
      P1_duration: 500,
      P1_visible: true,
      P1_battle_zone: [],
      P1_deck_zone: P1_cards,
      P1_grave_yard: [],

      P2_animation: 'shake',
      P2_duration: 500,
      P2_visible: true,
      P2_battle_zone: [],
      P2_deck_zone: P1_cards, //TODO this is hardcoded. Change me later
      P2_grave_yard: []
    };
  }

  //P1 attacking P2 with special atk
  handle_P1_specialAtk = (event, data) => {
    let { P1_battle_zone, P2_battle_zone, P2_grave_yard } = this.state;
    let P1_specialAtkCounter = P1_battle_zone[0].stats.spec_atk;
    let P2_spdCounter = P2_battle_zone[0].stats.spd;
    let P2_defCounter = P2_battle_zone[0].stats.def;

    P2_battle_zone[0].stats.hp =
      P2_battle_zone[0].stats.hp - P1_specialAtkCounter;

    if (P2_battle_zone[0].stats.hp <= 0) {
      this.setState({
        P2_grave_yard: [...P2_grave_yard, P2_battle_zone[0]]
      });
      this.setState({
        P2_battle_zone: []
      });
    }
  };

  handle_P1_atk = (event, data) => {
    let { P1_battle_zone, P2_battle_zone } = this.state;
    //let P1_atkCounter = P1_battle_zone[0].stats[4].base_stat; //P1's battle zone ATK stat
    //let P2_spdCounter = P2_battle_zone[0].stats[0].base_stat;
    //let P2_defCounter = P2_battle_zone[0].stats[3].base_stat;
    //let P2_hpCounter = P2_battle_zone[0].stats[5].base_stat;
    this.P2_toggleVisibility();
    //return P2_hpCounter - P1_atkCounter;
  };

  handle_P2_atk = (event, data) => {
    let { P1_battle_zone, P2_battle_zone } = this.state;
    let P2_atkCounter = 10; //hardcoded
    //let P2_atkCounter = P2_battle_zone[0].stats[4].base_stat; //P1's battle zone ATK stat
    let P1_spdCounter = P1_battle_zone[0].stats[0].base_stat;
    let P1_defCounter = P1_battle_zone[0].stats[3].base_stat;
    let P1_hpCounter = P1_battle_zone[0].stats[5].base_stat;
    this.P1_toggleVisibility();
    return P1_hpCounter - P2_atkCounter;
  };

  handle_P1_battle_zone = (event, data) => {
    let { P1_battle_zone, P1_deck_zone } = this.state;
    if (P1_battle_zone.length < 1) {
      this.setState({ P1_battle_zone: [data] });
      let updatedDeckZone = P1_deck_zone.filter(pokeObj => {
        if (pokeObj.id !== data.id) {
          return pokeObj;
        }
      });
      this.setState({ P1_deck_zone: updatedDeckZone });
    }
  };

  P1_toggleVisibility = () =>
    this.setState({ P1_visible: !this.state.P1_visible });

  P2_toggleVisibility = () =>
    this.setState({ P2_visible: !this.state.P2_visible });

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
    let {
      activeItem,
      P1_animation,
      P1_duration,
      P1_visible,
      P1_battle_zone,
      P1_deck_zone,
      P2_animation,
      P2_duration,
      P2_visible,
      P2_battle_zone,
      P2_deck_zone
    } = this.state;

    console.log('P1_deck_zone--------', P1_deck_zone);
    console.log('P1_battle_zone--------', P1_battle_zone);
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

            {/* Play1*/}
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

              {/* 1nd Player */}
              <Grid centered columns={5}>
                <Grid.Row>
                  <Grid.Column floated="left" width={2}>
                    <Card.Group itemsPerRow={1}>
                      {P1_deck_zone &&
                        P1_deck_zone.map((pokeObj, i) => {
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
                              onClick={this.handle_P1_battle_zone}
                            />
                          );
                        })}
                    </Card.Group>
                  </Grid.Column>
                  <Grid.Column floated="left">
                    <Segment inverted color="black">
                      <Label size="large" as="a" color="olive" ribbon="right">
                        {P1_battle_zone[0] ? P1_battle_zone[0].name : ''}
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
                                      P1_battle_zone[0]
                                        ? P1_battle_zone[0].stats.hp
                                        : 0
                                    }
                                    total={
                                      P1_battle_zone[0]
                                        ? P1_battle_zone[0].stats.total_hp
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
                          animation={P1_animation}
                          duration={P1_duration}
                          visible={P1_visible}>
                          <Image
                            bordered
                            src={P1_battle_zone[0] && P1_battle_zone[0].image}
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
                              onClick={this.handle_P1_specialAtk}>
                              <Icon name="lightning" />
                              SPEC ATK
                            </Button>
                            <Button
                              compact
                              size="medium"
                              inverted
                              color="violet"
                              onClick={this.handle_P1_atk}>
                              <Icon name="bomb" />
                              ATK
                            </Button>
                            <Button
                              compact
                              size="medium"
                              inverted
                              color="brown">
                              <Icon name="shield" />
                              DEF
                            </Button>
                          </Button.Group>
                        </Segment>
                      </Grid>
                    </Segment>
                  </Grid.Column>

                  <Comment.Group>
                    <Header as="h3" dividing>
                      Comments
                    </Header>

                    <Comment>
                      <Comment.Avatar src={jenny} />
                      <Comment.Content>
                        <Comment.Author as="a">Matt</Comment.Author>
                        <Comment.Text>How artistic!</Comment.Text>
                      </Comment.Content>
                    </Comment>

                    <Comment>
                      <Comment.Avatar src={jenny} />
                      <Comment.Content>
                        <Comment.Author as="a">Joe Henderson</Comment.Author>
                        <Comment.Text>
                          Dude, this is awesome. Thanks so much
                        </Comment.Text>
                      </Comment.Content>
                    </Comment>

                    <Form reply>
                      <Form.TextArea />
                      <Button
                        onClick={this.toggleVisibility}
                        content="Add Reply"
                        labelPosition="left"
                        icon="edit"
                        primary
                      />
                    </Form>
                  </Comment.Group>

                  {/* 2nd Player */}
                  <Grid.Column floated="right">
                    <Segment inverted color="black">
                      <Label as="a" size="large" color="olive" ribbon>
                        Eevee
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
                                      P2_battle_zone[0]
                                        ? P2_battle_zone[0].stats.hp
                                        : 0
                                    }
                                    total={
                                      P2_battle_zone[0]
                                        ? P2_battle_zone[0].stats.total_hp
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
                          animation={P2_animation}
                          duration={P2_duration}
                          visible={P2_visible}>
                          <Image bordered src={eevee} centered size="small" />
                        </Transition>
                      </Segment>
                      <Divider />
                      <Grid celled centered>
                        <Segment inverted>
                          <Button.Group vertical labeled icon>
                            <Button compact size="medium" inverted color="teal">
                              <Icon name="lightning" />
                              SPEC ATK
                            </Button>
                            <Button
                              compact
                              size="medium"
                              inverted
                              color="violet"
                              onClick={this.handle_P2_atk}>
                              <Icon name="bomb" />
                              ATK
                            </Button>
                            <Button
                              compact
                              size="medium"
                              inverted
                              color="brown">
                              <Icon name="shield" />
                              DEF
                            </Button>
                          </Button.Group>
                        </Segment>
                      </Grid>
                    </Segment>
                  </Grid.Column>

                  <Grid.Column floated="right" width={2}>
                    <Card.Group itemsPerRow={1}>
                      <Card color="red" image={eevee} />
                      <Card color="orange" image={eevee} />
                      <Card color="yellow" image={eevee} />
                      <Card color="olive" image={eevee} />
                      <Card color="green" image={eevee} />
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
