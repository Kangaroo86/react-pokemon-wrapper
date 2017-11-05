import React from 'react';
import SignInComponent from './SignInComponent';

export default function SignInPage({ signIn_user, history }) {
  return (
    <div>
      <SignInComponent signIn_user={signIn_user} history={history} />
    </div>
  );
}
