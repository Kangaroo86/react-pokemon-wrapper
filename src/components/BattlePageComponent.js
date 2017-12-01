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
        <Grid columns="equal" divided padded>
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
        </Grid>

        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column key={''}>
              <Card.Group>
                <Card id={''} name="deckId">
                  <Header as="h2">eevee</Header>

                  {/* <Label.Group size="huge">
                    <Label>eevee</Label>
                  </Label.Group> */}

                  <Grid columns="equal" divided>
                    <Grid.Row>
                      <Grid.Column>
                        <Label as="a" color="blue" image>
                          <Icon name="heartbeat" size="huge" />
                          HP
                        </Label>
                      </Grid.Column>
                      <Grid.Column>
                        <Progress
                          active
                          percent={32}
                          color="red"
                          value="3"
                          total="5"
                          progress="ratio"
                          size="big"
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>

                  <Segment color="blue" textAlign="center">
                    <Image src={eevee} centered size="small" bordered />
                  </Segment>
                  <Card.Content extra>
                    <Button basic color="green">
                      READY
                    </Button>
                    <Button
                      value={'deck'}
                      basic
                      color="red"
                      onClick={this.handle_updateDecks}>
                      EDIT
                    </Button>
                  </Card.Content>
                  <Segment inverted>
                    <Progress percent={50} inverted progress success>
                      WINS
                    </Progress>
                    <Progress percent={10} inverted progress warning>
                      LOSSES
                    </Progress>
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
