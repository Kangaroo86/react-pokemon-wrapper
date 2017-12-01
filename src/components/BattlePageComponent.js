import React, { Component } from 'react';
import {
  Card,
  Grid,
  Divider,
  Menu,
  Comment,
  Form,
  Icon,
  Item,
  List,
  Label,
  Image,
  Feed,
  Header,
  Button,
  Progress,
  Segment
} from 'semantic-ui-react';
import eevee from '../images/eevee.png';
import jenny from '../images/jenny.jpg';

const colors = [
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
  'black'
];

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
        <Grid center columns="equal" padded>
          <Grid.Row textAlign="center">
            <Grid.Column />
            <Card.Group itemsPerRow={5}>
              <Card color="red" image={eevee} />
              <Card color="orange" image={eevee} />
              <Card color="yellow" image={eevee} />
              <Card color="olive" image={eevee} />
              <Card color="green" image={eevee} />
            </Card.Group>
            <Grid.Column />
          </Grid.Row>

          <Segment inverted>
            <Divider fitted horizontal inverted>
              Horizontal
            </Divider>
          </Segment>

          <Grid centered columns={5}>
            <Grid.Row>
              {/* 1nd Player */}
              <Grid.Column>
                <Card>
                  <Header as="h2">eevee</Header>
                  <Grid columns="equal">
                    <Grid.Row>
                      <Grid.Column>
                        <Label color="black">
                          <Icon name="heartbeat" size="huge" />
                          HP:
                        </Label>
                      </Grid.Column>
                      <Grid.Column>
                        <Progress
                          active
                          color="green"
                          size="big"
                          value="4"
                          total="5"
                          progress="percent"
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Segment color="blue" textAlign="center">
                    <Image src={eevee} centered size="small" />
                  </Segment>
                  <Segment inverted>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column>
                          <Menu compact icon="labeled">
                            <Menu.Item name="bomb" onClick={''}>
                              <Icon name="bomb" />
                              Attack
                            </Menu.Item>
                            <Menu.Item
                              name="lightning"
                              onClick={this.handleItemClick}>
                              <Icon name="lightning" />
                              Attack
                            </Menu.Item>
                            <Menu.Item
                              name="video play"
                              onClick={this.handleItemClick}>
                              <Icon name="shield" />
                              Defend
                            </Menu.Item>
                          </Menu>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                </Card>
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
              <Grid.Column>
                <Card>
                  <Header as="h2">eevee</Header>
                  <Grid columns="equal">
                    <Grid.Row>
                      <Grid.Column>
                        <Label color="black">
                          <Icon name="heartbeat" size="huge" />
                          HP:
                        </Label>
                      </Grid.Column>
                      <Grid.Column>
                        <Progress
                          active
                          color="green"
                          size="big"
                          value="4"
                          total="5"
                          progress="percent"
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Segment color="blue" textAlign="center">
                    <Image src={eevee} centered size="small" />
                  </Segment>
                  <Segment inverted>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column>
                          <Menu compact icon="labeled">
                            <Menu.Item name="bomb" onClick={''}>
                              <Icon name="bomb" />
                              Attack
                            </Menu.Item>
                            <Menu.Item
                              name="lightning"
                              onClick={this.handleItemClick}>
                              <Icon name="lightning" />
                              Attack
                            </Menu.Item>
                            <Menu.Item
                              name="video play"
                              onClick={this.handleItemClick}>
                              <Icon name="shield" />
                              Defend
                            </Menu.Item>
                          </Menu>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Segment inverted>
            <Divider fitted horizontal inverted>
              Player - 2
            </Divider>
          </Segment>

          <Grid.Row textAlign="center">
            <Grid.Column />
            <Card.Group itemsPerRow={5}>
              <Card color="red" image={eevee} />
              <Card color="orange" image={eevee} />
              <Card color="yellow" image={eevee} />
              <Card color="olive" image={eevee} />
              <Card color="green" image={eevee} />
            </Card.Group>
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
