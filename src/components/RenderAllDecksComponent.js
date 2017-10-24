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

  handle_deleteDecks = (event, id) => {
    event.preventDefault();
    this.props.delete_decks(id);
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
              return deck.cards.map(pokemonObj => {
                return (
                  <Grid.Column>
                    <Card.Group>
                      <Card>
                        <Icon floated="left" name="delete" />
                        <Card.Content>
                          <Image
                            floated="right"
                            size="mini"
                            src={jenny}
                            onClick={this.handle_deleteDecks}
                          />
                          <Card.Header>
                            {deck.name}
                          </Card.Header>
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
                            percent={parseInt(
                              Math.round(
                                deck.wins / (deck.wins + deck.losses) * 100
                              )
                            )}
                            inverted
                            progress
                            success>
                            WINS
                          </Progress>
                          <Progress
                            percent={parseInt(
                              Math.round(
                                deck.losses / (deck.wins + deck.losses) * 100
                              )
                            )}
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
              });
            })}
          </Grid.Row>
        </Grid>;
      </div>
    );
  }
}
