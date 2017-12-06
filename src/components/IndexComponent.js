import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokemonTitle from '../images/pokemonTitle.png';
import pokeball2 from '../images/pokeball2.png';
import cinema1 from '../images/cinema1.webm';
import cinema2 from '../images/cinema2.webm';
import cinema3 from '../images/cinema3.webm';
import cinema4 from '../images/cinema4.webm';
import oak1 from '../images/oak1.png';

import ReactPlayer from 'react-player';
import {
  Segment,
  Header,
  Image,
  Form,
  List,
  Container,
  Button,
  Grid,
  Divider
} from 'semantic-ui-react';

export default class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signIn_name: '',
      signIn_password: '',
      signIn_errorName: ''
    };
  }

  handle_signIn_selectedName = data => {
    this.setState({ signIn_name: data.target.value });
  };

  handle_signIn_selectedPassword = data => {
    this.setState({ signIn_password: data.target.value });
  };

  //Validating user's userName & signIn_password
  signIn_validate = (signIn_name, signIn_password) => {
    let isThereError = false;

    let errors = {
      signIn_errorName: '',
      errorPassword: ''
    };

    if (signIn_name === '') {
      isThereError = true;
      errors.signIn_errorName = 'Please enter your signIn_name';
    }

    if (signIn_password === '') {
      isThereError = true;
      errors.errorPassword = 'Password entered is blank';
    }

    if (this.props.errorMessage !== null) {
      isThereError = true;
      errors.errorPassword = this.props.errorMessage;
    }

    return isThereError ? errors : false;
  };

  handle_signin = (event, data) => {
    event.preventDefault();
    const signIn_name = this.state.signIn_name.trim();
    const signIn_password = this.state.signIn_password.trim();

    this.props.signIn_user({ signIn_name, signIn_password });
    let errorPass = this.signIn_validate(signIn_name, signIn_password);

    if (errorPass !== false) {
      this.setState(errorPass);
    } else {
      this.props.history.push(`/decks/render`);
    }
  };

  render() {
    return (
      <Grid colums="equal">
        <Grid.Row>
          <Grid.Column>
            <Segment
              textAlign="center"
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical>
              <Segment fluid>
                <ReactPlayer
                  // style={{ display: '100%' }}
                  width="100%"
                  height="100%"
                  url={cinema2}
                  playing
                />
              </Segment>
            </Segment>

            <Grid colums="equal">
              <Grid.Row>
                <Grid.Column>
                  <Segment>
                    <Grid columns="equal" padded>
                      <Grid.Column style={{ maxWidth: 450 }} floated="left">
                        <Header as="h2" color="teal" textAlign="center">
                          <Image src={pokeball2} /> Sign-In to your account
                        </Header>
                        <Form size="large">
                          <Segment stacked>
                            <Form.Input
                              fluid
                              icon="user"
                              id="userId"
                              iconPosition="left"
                              placeholder="username"
                              onChange={this.handle_signIn_selectedName}
                            />
                            {this.state.signIn_errorName !== ''
                              ? <p style={{ color: 'Red' }}>
                                  {this.state.signIn_errorName}
                                </p>
                              : null}
                            <Form.Input
                              fluid
                              icon="lock"
                              id="passwordId"
                              iconPosition="left"
                              placeholder="signIn_password"
                              type="signIn_password"
                              onChange={this.handle_signIn_selectedPassword}
                            />
                            {this.state.errorPassword !== ''
                              ? <p style={{ color: 'Red' }}>
                                  {this.state.errorPassword}
                                </p>
                              : null}
                            <Button
                              color="teal"
                              fluid
                              size="large"
                              onClick={this.handle_signin}>
                              Sign-In
                            </Button>
                            <Divider horizontal>Or</Divider>
                            <Link to="/signup">
                              <Button color="black" fluid size="large">
                                Sign-Up
                              </Button>
                            </Link>
                          </Segment>
                        </Form>
                      </Grid.Column>

                      {/* {-------} */}

                      <Grid.Column>
                        <Header as="h2" color="teal" textAlign="center">
                          <Image src={pokeball2} /> Set-Up your account
                        </Header>
                        <Form size="large">
                          <Segment stacked>
                            <Form.Input
                              fluid
                              icon="user"
                              id="userId"
                              iconPosition="left"
                              placeholder="username"
                              onChange={this.handle_signIn_selectedName}
                            />
                            {this.state.signIn_errorName !== ''
                              ? <p style={{ color: 'Red' }}>
                                  {this.state.signIn_errorName}
                                </p>
                              : null}
                            <Form.Input
                              fluid
                              icon="lock"
                              id="passwordId"
                              iconPosition="left"
                              placeholder="signIn_password"
                              type="signIn_password"
                              onChange={this.handle_signIn_selectedPassword}
                            />
                            {this.state.errorPassword !== ''
                              ? <p style={{ color: 'Red' }}>
                                  {this.state.errorPassword}
                                </p>
                              : null}
                            <Button
                              color="teal"
                              fluid
                              size="large"
                              onClick={this.handle_signup}>
                              Sign-up
                            </Button>
                          </Segment>
                        </Form>
                      </Grid.Column>
                    </Grid>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Segment inverted vertical style={{ padding: '2em 0em' }}>
              <Container textAlign="center">
                <Image centered size="mini" src={pokeball2} />
                <List horizontal inverted divided link>
                  <List.Item as="a" href="#">
                    gotta catch em all
                  </List.Item>
                </List>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
