import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0; // Assuming a light grey background
`;

const LoginForm = styled.div`
  width: 300px;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 30px;
  margin-bottom: 20px;
  padding: 8px 10px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  font-size: 16px;
  width: 95%;
`;

const Button = styled.button`
  height: 40px;
  margin-top: 5px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
  font-size: 14px; 
`;

const Link = styled.a`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  margin-left: auto;
  font-size: 14px;
`;

const FooterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, rememberMe);
  };

  return (
    <LoginContainer>
      <LoginForm>
        <h2>Login</h2>
        <p>Welcome Back! Please enter your details.</p>
        <form onSubmit={handleSubmit}>
          <Input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <CheckboxContainer>
            <input 
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <CheckboxLabel>Remember me for 30 days</CheckboxLabel>
          </CheckboxContainer>
          <Link>Forgot Password?</Link>
          <FooterButtons>
            <Button type="submit">Log in</Button>
            <Button type="button">Register</Button>
          </FooterButtons>
        </form>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
