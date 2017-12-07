import React, { Component } from 'react';
import pokeball2 from '../images/pokeball2.png';
import cinema2 from '../images/cinema2.webm';
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
      signUp_name: '',
      signUp_password: ''
    };
  }

  //*************************//
  //**** sign up section ****//
  //*************************//
  handle_signUp_selectedName = data => {
    this.setState({ signUp_name: data.target.value });
  };

  handle_signUp_selectedPassword = data => {
    this.setState({ signUp_password: data.target.value });
  };

  signUp_validate = (signUp_name, signUp_password) => {
    let isThereError = false;
    const errors = {
      signUp_errorName: '',
      signUP_errorPassword: ''
    };

    let duplicateName = '';
    this.props.users.usersObj.forEach(listOfUsers => {
      if (listOfUsers.name === signUp_name) {
        return (duplicateName = true);
      }
    });

    if (signUp_name === '') {
      isThereError = true;
      errors.signUp_errorName = 'This is required';
    } else if (signUp_name.length < 4) {
      isThereError = true;
      errors.signUp_errorName = 'Username need at least 4 characters';
    } else if (duplicateName === true) {
      isThereError = true;
      errors.signUp_errorName = 'Username has already taken';
    } else if (duplicateName === false) {
      isThereError = false;
    }

    if (signUp_password === '') {
      isThereError = true;
      errors.signUP_errorPassword = 'This is required';
    } else if (signUp_password.length < 4) {
      isThereError = true;
      errors.signUP_errorPassword = 'Password need at least 4 characters';
    }
    return isThereError ? errors : true;
  };

  handle_signup = (event, data) => {
    event.preventDefault();
    const signUp_name = this.state.signUp_name.trim();
    const signUp_password = this.state.signUp_password.trim();

    const errorPass = this.signUp_validate(signUp_name, signUp_password);

    if (errorPass !== true) {
      this.setState(errorPass);
      return;
    } else {
      this.props.user_signup({ name: signUp_name, password: signUp_password });
      this.props.history.push(`/`);
    }
  };

  //*************************//
  //**** sign in section ****//
  //*************************//
  handle_signIn_selectedName = data => {
    this.setState({ signIn_name: data.target.value });
  };

  handle_signIn_selectedPassword = data => {
    this.setState({ signIn_password: data.target.value });
  };

  signIn_validate = (name, password) => {
    let isThereError;

    let errorsObj = {
      signIn_errorName: '',
      signIn_errorPassword: ''
    };

    if (name === '') {
      isThereError = true;
      errorsObj.signIn_errorName = 'Please enter your name';
    }

    if (password === '') {
      isThereError = true;
      errorsObj.signIn_errorPassword = 'Password entered is blank';
    }

    return isThereError ? errorsObj : false;
  };

  handle_signin = (event, data) => {
    event.preventDefault();
    const name = this.state.signIn_name.trim();
    const password = this.state.signIn_password.trim();

    let failedValidation = this.signIn_validate(name, password); //return an obj when true

    if (failedValidation) {
      this.setState(failedValidation);
    } else {
      this.props.signIn_user({ name, password });
    }

    //!failedValidation && this.props.signIn_user({ name, password });
  };

  render() {
    if (this.props.userSignIn && this.props.userSignIn.name) {
      this.props.history.push('/home');
    }
    return (
      <Grid colums="equal">
        <Grid.Row>
          <Grid.Column>
            <Container fluid>
              <ReactPlayer
                // style={{ display: '100%' }}
                width="100%"
                height="100%"
                url={cinema2}
                playing
              />
            </Container>

            <Grid centered columns="equal" padded>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                  <Image src={pokeball2} /> Welcome
                </Header>
                <Segment stacked>
                  <Form size="large">
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
                      placeholder="password"
                      type="password"
                      onChange={this.handle_signIn_selectedPassword}
                    />

                    {this.state.signIn_errorPassword !== ''
                      ? <p style={{ color: 'Red' }}>
                          {this.state.signIn_errorPassword}
                        </p>
                      : null}
                    {this.state.signIn_errorPassword !== '' &&
                      this.props.errorMessage &&
                      <p style={{ color: 'Red' }}>
                        {this.props.errorMessage}
                      </p>}
                    <Button
                      color="teal"
                      fluid
                      size="large"
                      onClick={this.handle_signin}>
                      Sign-In
                    </Button>
                  </Form>

                  <Divider horizontal>OR</Divider>

                  <Form size="large">
                    <Form.Input
                      fluid
                      icon="user"
                      id="userId"
                      iconPosition="left"
                      placeholder="username"
                      onChange={this.handle_signUp_selectedName}
                    />
                    {this.state.signUp_errorName !== ''
                      ? <p style={{ color: 'Red' }}>
                          {this.state.signUp_errorName}
                        </p>
                      : null}
                    <Form.Input
                      fluid
                      icon="lock"
                      id="passwordId"
                      iconPosition="left"
                      placeholder="password"
                      type="password"
                      onChange={this.handle_signUp_selectedPassword}
                    />
                    {this.state.signUP_errorPassword !== ''
                      ? <p style={{ color: 'Red' }}>
                          {this.state.signUP_errorPassword}
                        </p>
                      : null}
                    <Button
                      color="teal"
                      fluid
                      size="large"
                      onClick={this.handle_signup}>
                      Sign-up
                    </Button>
                  </Form>
                </Segment>
              </Grid.Column>

              {/* {-------} */}
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
