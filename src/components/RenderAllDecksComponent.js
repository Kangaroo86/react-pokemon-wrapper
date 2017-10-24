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

  handle_deleteDecks = data => {
    //console.log('clicked', data.target.id);
    this.props.delete_decks(data.target.id);
  };

  handle_updateDecks = (event, id) => {
    event.preventDefault();
    this.props.update_Decks(id);
  };

  render() {
    return (
      <div>
        {/* {console.log('User deck obj-------:', this.props.userDecks)} */}
        <Grid columns={3} divided>
          <Grid.Row stretched>
            {this.props.userDecks.map((deck, i) => {
              console.log('this deck is ', deck);
              let numWin = parseInt(
                Math.round(deck.wins / (deck.wins + deck.losses) * 100)
              );
              let numLose = parseInt(
                Math.round(deck.losses / (deck.wins + deck.losses) * 100)
              );
              return (
                <Grid.Column>
                  <Card.Group>
                    <Card>
                      <Icon
                        id={deck.id}
                        floated="left"
                        name="delete"
                        onClick={this.handle_deleteDecks}
                      />
                      <Card.Content>
                        <Image floated="right" size="mini" src={jenny} />
                        <Card.Header>
                          {deck.name}
                        </Card.Header>
                        <Card.Meta>User Name</Card.Meta>
                        <List size="massive" horizontal>
                          {deck.cards.map(character => {
                            return (
                              <Label size="small" image>
                                <Image src={character.sprites.front_default} />
                                {character.name}
                              </Label>
                            );
                          })}
                          {/* <Label size="small" image>
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
                          </Label> */}
                        </List>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="ui two buttons">
                          <Button basic color="green">
                            Ready
                          </Button>
                          <Button
                            basic
                            color="red"
                            onClick={this.handle_updateDecks}>
                            Edit
                          </Button>
                        </div>
                      </Card.Content>
                      <Segment inverted>
                        <Progress
                          percent={numWin ? numWin : 0}
                          inverted
                          progress
                          success>
                          WINS
                        </Progress>
                        <Progress
                          percent={numLose ? numLose : 0}
                          inverted
                          progress
                          warning>
                          LOSSES
                        </Progress>
                      </Segment>
                    </Card>
                  </Card.Group>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
