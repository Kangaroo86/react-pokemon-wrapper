import React from 'react';
import SignUpComponent from './SignUpComponent';

export default function SignUpPage({
  userSignup,
  user_signup,
  users,
  history
}) {
  return (
    <div>
      <SignUpComponent
        userSignup={userSignup}
        users={users}
        user_signup={user_signup}
        history={history}
      />
    </div>
  );
}
