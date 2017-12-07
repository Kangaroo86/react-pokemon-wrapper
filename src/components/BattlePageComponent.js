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
    userDecks.filter(deck => {
      if (deck.id === Number(this.props.match.params.deckId)) {
        P1_cards = deck.cards.map((pokeObj, i) => {
          return {
            id: pokeObj.id,
            name: pokeObj.name,
            moves: pokeObj.moves.slice(0, 2).map(result => result.move.name),
            image: pokeObj.sprites.front_default,
            types: pokeObj.types.map(result => result.type.name),
            stats: pokeObj.stats.map(result => {
              let newState = {};
              newState.base_stat = result.base_stat;
              newState.name = result.stat.name;
              return newState;
            })
          };
        });
      }
    });

    this.state = {
      activeItem: '',
      P1_battle_zone: [],
      P1_deck_zone: P1_cards
    };
  }

  handle_P1_battle_zone = (event, data) => {
    let { P1_battle_zone } = this.state;
    let duplicate = false;

    P1_battle_zone.forEach(pokeObj => {
      if (pokeObj.id === data.id) {
        duplicate = true;
      }
    });

    if (!duplicate && P1_battle_zone.length < 1) {
      let currentState = P1_battle_zone.slice(0);
      this.setState({ P1_battle_zone: [...currentState, data] });
    }
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
    let { activeItem, P1_battle_zone, P1_deck_zone } = this.state;

    //let { userDecks } = this.props;

    console.log('this.state.P1_battle_zone------array', P1_battle_zone);
    //console.log('this.state.P1_battle_zone------index', P1_battle_zone[0]);
    //console.log('this.state.P1_battle_zone------name', P1_battle_zone[0].name);

    // let P1_deck_zone = this.props.userDecks.filter(
    //   decks => decks.id === Number(this.props.match.params.deckId)
    // );
    // console.log('my state P1_deck_zone-------', P1_deck_zone);
    //console.log('P1_cards******', P1_cards);
    //console.log('my selected deck cards---******', P1_deck_zone[0].cards);
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
                                    value={Math.floor(39)}
                                    total={
                                      P1_battle_zone[0]
                                        ? P1_battle_zone[0].stats[5].base_stat
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
                        <Image
                          bordered
                          src={P1_battle_zone[0] && P1_battle_zone[0].image}
                          centered
                          size="small"
                        />
                      </Segment>
                      <Divider />
                      <Grid celled>
                        <Segment inverted>
                          <Button.Group vertical labeled icon>
                            <Button compact size="medium" inverted color="teal">
                              <Icon name="lightning" />
                              ATK
                            </Button>
                            <Button
                              compact
                              size="medium"
                              inverted
                              color="violet">
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
                                    value="70"
                                    total="100"
                                  />
                                </Table.Cell>
                              </Table.Row>
                            </Table.Body>
                          </Table>
                        </Grid.Column>
                      </Grid>
                      <Divider />
                      <Segment inverted color="olive" textAlign="center">
                        <Image bordered src={eevee} centered size="small" />
                      </Segment>
                      <Divider />
                      <Grid celled>
                        <Segment inverted>
                          <Button.Group vertical labeled icon>
                            <Button compact size="medium" inverted color="teal">
                              <Icon name="lightning" />
                              ATK
                            </Button>
                            <Button
                              compact
                              size="medium"
                              inverted
                              color="violet">
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
