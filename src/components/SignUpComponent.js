import React, { Component } from 'react';
import { Button, Form, Segment, Grid, Header, Image } from 'semantic-ui-react';
import pokeball2 from '../images/pokeball2.png';
import ReactAudioPlayer from 'react-audio-player';

export default class SignUpComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handle_selectedName = data => {
    this.setState({ name: data.target.value });
  };

  handle_selectedEmail = data => {
    this.setState({ email: data.target.value });
  };

  handle_selectedPassword = data => {
    this.setState({ password: data.target.value });
  };

  //Validate user sign in
  validate = (name, email, password) => {
    let isThereError = false;
    const errors = {
      errorName: '',
      errorEmail: '',
      errorPassword: ''
    };

    let duplicateName = '';
    let duplicateEmail = '';
    this.props.users.usersObj.map(listOfUsers => {
      if (listOfUsers.name === name) {
        duplicateName = true;
      }
      if (listOfUsers.email === email) {
        duplicateEmail = true;
      }
    });

    if (name === '') {
      isThereError = true;
      errors.errorName = 'Name could not be blank';
    }

    if (duplicateName === true) {
      isThereError = true;
      errors.errorName = 'Name has already existed';
    }

    if (duplicateEmail === true) {
      isThereError = true;
      errors.errorEmail = 'Email has already existed';
    }

    if (email === '') {
      isThereError = true;
      errors.errorEmail = 'Email could not be blank';
    }

    if (password === '') {
      isThereError = true;
      errors.errorPassword = 'Password could not be blank';
    }
    return isThereError ? errors : true;
  };

  handle_signup = (event, data) => {
    event.preventDefault();
    const name = this.state.name.trim();
    const email = this.state.email.trim();
    const password = this.state.password.trim();

    const errorPass = this.validate(name, email, password);

    if (errorPass !== true) {
      this.setState(errorPass);
      return;
    } else {
      this.props.user_signup({ name: name, email: email, password: password });
      this.props.history.push(`/`);
    }
  };

  render() {
    return (
      <div className="login-form">
        <ReactAudioPlayer
          src="http://files.simey.me/pokonami/pallet.mp3"
          autoPlay
          loop="true"
        />
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
                  placeholder="Name"
                  onChange={this.handle_selectedName}
                />
                {this.state.errorName !== ''
                  ? <p style={{ color: 'Red' }}>
                      {this.state.errorName}
                    </p>
                  : null}
                <Form.Input
                  fluid
                  icon="mail outline"
                  id="emailId"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.handle_selectedEmail}
                />
                {this.state.errorEmail !== ''
                  ? <p style={{ color: 'Red' }}>
                      {this.state.errorEmail}
                    </p>
                  : null}
                <Form.Input
                  fluid
                  icon="lock"
                  id="passwordId"
                  iconPosition="left"
                  placeholder="Password"
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
