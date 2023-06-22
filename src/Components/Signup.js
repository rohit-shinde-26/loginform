import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Componentscss/Signup.css'

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState(''); 
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, password, email, phone, profession };
    localStorage.setItem('user', JSON.stringify(user));
    alert('User registered successfully!');
    setName('');
    setEmail('');
    setPassword('');
    setPhone('');
    setProfession('');

  };

  return (
    <div className='signup_container'>
      <h1>User Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label> <br />
        <input type="text" required value={name} onChange={ (e) => setName(e.target.value)} /><br />

        <label>Password:</label><br />
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} /><br />

        <label>Email:</label><br />
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /><br />

        <label>Phone Number:</label><br />
        <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} /><br />

        <label>Profession:</label><br />
        <select value={profession} onChange={(e) => setProfession(e.target.value)}><br />
          <option value="" disabled>Select Profession</option>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Teacher">Teacher</option>
        </select><br />

        <div className="btn2">
        <button type="submit">Register</button><br />
       
        <Link to={"/"}>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
