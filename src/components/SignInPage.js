import React from 'react';
import SignInComponent from './SignInComponent';

export default function SignInPage({ userLogin, get_user }) {
  return (
    <div>
      <SignInComponent>
        userLogin={userLogin}
        get_user={get_user}
      </SignInComponent>
    </div>
  );
}
