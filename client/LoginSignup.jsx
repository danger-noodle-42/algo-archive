import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './components/Inputs.jsx';
import LogoAsset from './assets/logo.png'

const OuterContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  width:100vw;
`;

const Container = styled.div`
  justify-content: center;
  border: 2px solid #D6D4D4;
  border-radius: 10px;
  height: 650px;
  margin: auto;
  width: 300px;
`;

const Logo = styled.img`
  height: 250px;
  width: 300px;
  background-color: red;
`;
const Tagline = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
  color: #25559B;
  `;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  border-radius: 10px;
  boxing-sizing: border-box;
  width: inherit;
  height: 100px;
  `;

const LoginSignUp = (props) => {
  const {logIn} = props;
  const [error, setError] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    // attempt to login the user in
    // const route = isLogin ? '/api/login' : '/api/signup';  // TODO: confirm the routes
    e.preventDefault();
    const response = await fetch('/api/login', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    logIn(true)
    if (data.error) {
      setError(data.error);
    }
  }
  
  const handleSignup = async (e) => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    logIn(true);
    if (data.error) {
      setError(data.error);
    }
  }



  return (
    <OuterContainer>
      <Container>
        <Logo src={LogoAsset} />
        <div>
          <Tagline>Keeping you organized since 2023</Tagline>
          <>
            <Form>
              <input value={username} type="text" placeholder="Username" />
              <br />
              <input value={password} type="password" placeholder="*******" />
            </Form>
            <br />
            <Button onClick={handleLogin}>Login</Button>
            <Button onClick={handleSignup}>Sign Up</Button>
        
          </>
          
        </div>
      </Container>
    </OuterContainer>
  );
}


export default LoginSignUp;