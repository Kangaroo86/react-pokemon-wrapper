import React from 'react';
import SignInComponent from './SignInComponent';

export default function SignInPage({ signIn_user, users, history }) {
  return (
    <div>
      <SignInComponent
        signIn_user={signIn_user}
        users={users}
        history={history}
      />
    </div>
  );
}
