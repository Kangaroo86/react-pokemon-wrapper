import React, { Component } from 'react';
import {
  Card,
  Grid,
  Divider,
  Comment,
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
import eevee from '../images/eevee.png';
import jenny from '../images/jenny.jpg';

export default class RenderAllDecksComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  handle_defaultPokemonArray = event => {
    event.preventDefault();
    console.log(this.props.defaultPokemonArray);
  };

  render() {
    return (
      <div>
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

          <Grid centered columns={5}>
            <Grid.Row>
              <Grid.Column floated="left" width={2}>
                <Card.Group itemsPerRow={1}>
                  <Card color="red" image={eevee} />
                  <Card color="orange" image={eevee} />
                  <Card color="yellow" image={eevee} />
                  <Card color="olive" image={eevee} />
                  <Card color="green" image={eevee} />
                </Card.Group>
              </Grid.Column>
              {/* 1nd Player */}
              <Grid.Column floated="left">
                <Segment inverted color="black">
                  <Label as="a" color="olive" ribbon="right">
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
                                inverted
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
                                size="small"
                                value="4"
                                total="5"
                                progress="percent"
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
                        <Button compact size="medium" inverted color="violet">
                          <Icon name="bomb" />
                          ATK
                        </Button>
                        <Button compact size="medium" inverted color="brown">
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
                  <Label as="a" color="olive" ribbon>
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
                                inverted
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
                                size="small"
                                value="4"
                                total="5"
                                progress="percent"
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
                        <Button compact size="medium" inverted color="violet">
                          <Icon name="bomb" />
                          ATK
                        </Button>
                        <Button compact size="medium" inverted color="brown">
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
      </div>
    );
  }
}
