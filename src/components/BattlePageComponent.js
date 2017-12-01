import React, { Component } from 'react';
import {
  Card,
  Grid,
  Menu,
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
        {/* <Grid columns="equal" divided padded>
          <Grid.Row textAlign="center">
            <Grid.Column>
              <Segment color="blue">
                <Image src={eevee} />
                "eevee"
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black">
                <Image src={eevee} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black">
                <Image src={eevee} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black">
                <Image src={eevee} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black">
                <Image src={eevee} />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign="center">
            <Grid.Column>
              <Segment color="black">
                <Image src={eevee} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black">
                <Image src={eevee} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black">
                <Image src={eevee} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black">
                <Image src={eevee} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black">
                <Image src={eevee} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}

        {/* <Grid celled>
          <Grid.Row columns="equal">
            <Grid.Column>
              <Button basic color="green">
                ATK
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button basic color="green">
                ATK
              </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns="equal">
            <Grid.Column>
              <Button basic color="green">
                ATK
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button basic color="green">
                ATK
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}

        <Grid columns="equal" divided padded>
          <Grid.Row textAlign="center">
            <Card.Group itemsPerRow={5}>
              <Card color="red" image={eevee} />
              <Card color="orange" image={eevee} />
              <Card color="yellow" image={eevee} />
              <Card color="olive" image={eevee} />
              <Card color="green" image={eevee} />
            </Card.Group>
          </Grid.Row>

          <Grid.Row textAlign="center">
            <Card.Group itemsPerRow={5}>
              <Card color="red" image={eevee} />
              <Card color="orange" image={eevee} />
              <Card color="yellow" image={eevee} />
              <Card color="olive" image={eevee} />
              <Card color="green" image={eevee} />
            </Card.Group>
          </Grid.Row>
        </Grid>

        <Grid columns="equal" padded>
          <Grid.Row>
            <Grid.Column>
              <Card.Group>
                <Card>
                  <Header as="h2">eevee</Header>
                  <Grid columns="equal" divided>
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
                  </Segment>
                </Card>
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
