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
    event.preventDefault();
    //console.log('this props: ', this.props);
    // console.log('Rental userDecks state-----', this.props.userDecks);
    // console.log('Rental Component page-----', this.props.get_userDecks());
    //console.log('Rental userDecks state-----', this.props.userDecks);
  };

  render() {
    return (
      <div>
        {/* {console.log('User deck obj-------:', this.props.userDecks)} */}
        {this.props.userDecks.map((decksObj, i) => {
          //console.log('decksObj ++++++', decksObj);
          return decksObj.cards.map(pokemonObj => {
            //console.log('pokemonObj----', pokemonObj);
            return (
              <Grid columns={3} divided>
                <Grid.Row stretched>
                  <Grid.Column>
                    <Card.Group>
                      <Card>
                        <Icon floated="left" name="delete" />
                        <Card.Content>
                          <Image floated="right" size="mini" src={jenny} />
                          <Card.Header>
                            {decksObj.name}
                          </Card.Header>
                          <Card.Meta>User Name</Card.Meta>
                          <List size="massive" horizontal>
                            <Label size="small" image>
                              <Image src={pokemonObj.sprites.front_default} />
                              {pokemonObj.name}
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
                          <Progress
                            percent={parseInt(
                              Math.round(
                                decksObj.wins /
                                  (decksObj.wins + decksObj.losses) *
                                  100
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
                                decksObj.losses /
                                  (decksObj.wins + decksObj.losses) *
                                  100
                              )
                            )}
                            inverted
                            progress
                            warning>
                            LOSSES
                          </Progress>
                        </Segment>
                      </Card>
                      <Button primary onClick={this.handle_defaultPokemonArray}>
                        Primary
                      </Button>
                      <Button secondary>Secondary</Button>
                    </Card.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            );
          });
        })}
        {/* <p>
          {this.props.userDecks.map((decksObj, i) => {
            return decksObj.cards.map(pokemonObj => {
              console.log('pokeObj is this: ', pokemonObj);
              return (
                <img
                  key={i}
                  src={pokemonObj.sprites.front_default}
                  alt={pokemonObj.name}
                />
              );
            });
          })}
        </p> */}
      </div>
    );
  }
}
