import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
import Shoes from './shoes';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name === name && user.password === password) {
      setLoggedIn(true);
    } else {
      alert('Invalid Credentials!');
    }
  };

  return (
    <div className='signup_container'> 
      {loggedIn ? ( 
        <Shoes loggedIn={loggedIn} />
      ) : (
        <> 
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label>Name:</label> <br />
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} /> <br />

            <label>Password:</label> <br />
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} /> <br />


           <div className="btn2">
           <button type="submit">Login</button> <br />
            <Link to={"/signup"}>Signup</Link>
           </div>           
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
