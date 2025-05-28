import React from 'react';

function LoginButton({loggedIn}) {
  return (
    <div>{loggedIn ? <button>LogOut</button>:<button>LogIn</button>}</div>
  );
}

export default LoginButton;