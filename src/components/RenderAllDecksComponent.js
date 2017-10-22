import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Image,
  Icon,
  Progress,
  Segment,
  List,
  Label,
  Grid
} from 'semantic-ui-react';
import jenny from '../images/jenny.jpg';
import eevee from '../images/eevee.png';

export default class RenderAllDecksComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  handle_defaultPokemonArray = event => {
    //event.preventDefault();
    // console.log('this props: ', this.props);
    // console.log('Rental userDecks-----', this.props.userDecks);
    console.log('Rental Component page-----', this.props.get_userDecks());
  };

  render() {
    return (
      <div>
        {/* {console.log(
          'RenderAllDecksComponent Props: ----',
          this.props.defaultPokemonArray
        )}; */}
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Card.Group>
                <Card>
                  <Icon floated="left" name="delete" />
                  <Card.Content>
                    <Image floated="right" size="mini" src={jenny} />
                    <Card.Header>Deck Name</Card.Header>
                    <Card.Meta>User Name</Card.Meta>
                    <List size="massive" horizontal>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                    </List>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        Ready
                      </Button>
                      <Button basic color="red">
                        Edit
                      </Button>
                    </div>
                  </Card.Content>
                  <Segment inverted>
                    <Progress percent={75} inverted progress success>
                      WINS
                    </Progress>
                    <Progress percent={25} inverted progress warning>
                      LOSSES
                    </Progress>
                  </Segment>
                </Card>
              </Card.Group>
            </Grid.Column>
            <Grid.Column>
              <Card.Group>
                <Card>
                  <Icon floated="left" name="delete" />
                  <Card.Content>
                    <Image floated="right" size="mini" src={jenny} />
                    <Card.Header>Deck Name</Card.Header>
                    <Card.Meta>User Name</Card.Meta>
                    <List size="massive" horizontal>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                    </List>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        Ready
                      </Button>
                      <Button basic color="red">
                        Edit
                      </Button>
                    </div>
                  </Card.Content>
                  <Segment inverted>
                    <Progress percent={75} inverted progress success>
                      WINS
                    </Progress>
                    <Progress percent={25} inverted progress warning>
                      LOSSES
                    </Progress>
                  </Segment>
                </Card>
              </Card.Group>
            </Grid.Column>
            <Grid.Column>
              <Card.Group>
                <Card>
                  <Icon floated="left" name="delete" />
                  <Card.Content>
                    <Image floated="right" size="mini" src={jenny} />
                    <Card.Header>Deck Name</Card.Header>
                    <Card.Meta>User Name</Card.Meta>
                    <List size="massive" horizontal>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                      <Label size="small" image>
                        <Image src={eevee} />
                        eevee
                      </Label>
                    </List>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        Ready
                      </Button>
                      <Button basic color="red">
                        Edit
                      </Button>
                    </div>
                  </Card.Content>
                  <Segment inverted>
                    <Progress percent={75} inverted progress success>
                      WINS
                    </Progress>
                    <Progress percent={25} inverted progress warning>
                      LOSSES
                    </Progress>
                  </Segment>
                </Card>
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button primary onClick={this.handle_defaultPokemonArray}>
          Primary
        </Button>
        <Button secondary>Secondary</Button>
      </div>
    );
  }
}
