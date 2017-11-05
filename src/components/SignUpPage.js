import React from 'react';
import SignUpComponent from './SignUpComponent';

export default function SignUpPage({ userSignup, user_signup, history }) {
  return (
    <div>
      <SignUpComponent
        userSignup={userSignup}
        user_signup={user_signup}
        history={history}
      />
    </div>
  );
}
