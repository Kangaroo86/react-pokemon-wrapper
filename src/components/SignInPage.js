import React from 'react';
import SignInComponent from './SignInComponent';

export default function SignInPage({ userSignup, signIn_user }) {
  return (
    <div>
      <SignInComponent userSignup={userSignup} signIn_user={signIn_user} />
    </div>
  );
}
