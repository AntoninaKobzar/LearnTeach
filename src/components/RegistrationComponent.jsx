import React, { useState } from 'react';

const RegistrationComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [username,setUsername]=useState('');

  const handleRegister = async () => {
    // Send registration data to backend
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password, role })
    });
    // Handle response
  };

  return (
    <div>
      <input type="text" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationComponent;
