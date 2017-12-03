import React from 'react';
import SignUpComponent from './SignUpComponent';

export default function SignUpPage({
  userSignup,
  user_signup,
  users,
  history,
  signIn_user
}) {
  return (
    <div>
      <SignUpComponent
        userSignup={userSignup}
        users={users}
        user_signup={user_signup}
        signIn_user={signIn_user}
        history={history}
      />
    </div>
  );
}
