import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Image, Icon, Grid, Segment } from 'semantic-ui-react';
import jenny from '../images/jenny.jpg';
import eevee from '../images/eevee.png';
import whiteimage from '../images/white-image.png';

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
        {/* {console.log('RenderAllDecksComponent Props: ----', this.props)}; */}
        <Grid.Column floated="right" width={6}>
          <Card.Group itemsPerRow={1}>
            <Card color="red" image={eevee} />
            <Card color="orange" image={eevee} />
            <Card color="yellow" image={eevee} />
            <Card color="olive" image={eevee} />
            <Card color="green" image={eevee} />
            <Card color="teal" image={eevee} />
          </Card.Group>
        </Grid.Column>
      </div>
    );
  }
}
