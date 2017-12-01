import React, { Component } from 'react';
import {
  Card,
  Grid,
  Menu,
  Icon,
  Item,
  List,
  Image,
  Table,
  Header,
  Button,
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
        <Grid columns="equal" divided inverted padded>
          <Grid.Row color="black" textAlign="center">
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              {/* <Image src={eevee} />
              <Image src={eevee} /> */}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row color="black" textAlign="center">
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/* <Grid columns={4} centered>
          <Grid.Row verticalAlign="top">
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Image src={eevee} />
              <Image src={eevee} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row verticalAlign="bottom">
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
            <Grid.Column>
              <Image src={eevee} />
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </div>
    );
  }
}
