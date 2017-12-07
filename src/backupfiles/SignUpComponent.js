import React, { Component } from 'react';
import { Button, Form, Segment, Grid, Header, Image } from 'semantic-ui-react';
import pokeball2 from '../images/pokeball2.png';
//import ReactAudioPlayer from 'react-audio-player';

export default class SignUpComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: ''
    };
  }

  handle_selectedName = data => {
    this.setState({ name: data.target.value });
  };

  handle_selectedPassword = data => {
    this.setState({ password: data.target.value });
  };

  //Validate user sign in
  validate = (name, password) => {
    let isThereError = false;
    const errors = {
      errorName: '',
      errorPassword: ''
    };

    let duplicateName = '';
    this.props.users.usersObj.forEach(listOfUsers => {
      if (listOfUsers.name === name) {
        duplicateName = true;
      }
    });

    if (name === '') {
      isThereError = true;
      errors.errorName = 'This is required';
    } else if (name.length < 5) {
      isThereError = true;
      errors.errorName = 'Username need at least 5 characters';
    } else if (duplicateName === true) {
      isThereError = true;
      errors.errorName = 'Username has already taken';
    }

    if (password === '') {
      isThereError = true;
      errors.errorPassword = 'This is required';
    } else if (password.length < 5) {
      isThereError = true;
      errors.errorPassword = 'Password need at least 5 characters';
    }
    return isThereError ? errors : true;
  };

  handle_signup = (event, data) => {
    event.preventDefault();
    const name = this.state.name.trim();
    const password = this.state.password.trim();

    const errorPass = this.validate(name, password);

    if (errorPass !== true) {
      this.setState(errorPass);
      return;
    } else {
      this.props.user_signup({ name: name, password: password });
      //this.props.signIn_user({ name, password });
      //this.props.history.push(`/decks/createDeck`);
      this.props.history.push(`/`);
    }
  };

  render() {
    return (
      <div className="login-form">
        {/* <ReactAudioPlayer
          src="http://files.simey.me/pokonami/pallet.mp3"
          autoPlay
          loop="true"
        /> */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          padded
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
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
                  onChange={this.handle_selectedName}
                />
                {this.state.errorName !== ''
                  ? <p style={{ color: 'Red' }}>
                      {this.state.errorName}
                    </p>
                  : null}
                <Form.Input
                  fluid
                  icon="lock"
                  id="passwordId"
                  iconPosition="left"
                  placeholder="password"
                  type="password"
                  onChange={this.handle_selectedPassword}
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
      </div>
    );
  }
}
