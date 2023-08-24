import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from './components/Inputs.jsx';
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
  margin-top: 40px;
  width: 400px;
`;

const Logo = styled.img`
  height: 250px;
  width: 400px;
  background-color: red;
  border-bottom: 2px solid #000000;
  border-radius: 10px 10px 0px 0px;
`;
const Tagline = styled.div`
  color: #25559B;  
  font-size: 20px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  margin: 34px 10px 10px 10px;
  text-align: center;  
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
  display: flex;
  font-size: 16px;
  justify-content: center;
  margin-top: 18px;
`;

const LoginSignUp = (props) => {
  const {onLogin} = props;
  const [error, setError] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const isDisabled = useMemo(() => {
    return !username || !password;
  }, [username, password]);

  const handleLogin = async (e) => {
    // attempt to login the user in
    e.preventDefault();
    const response = await fetch('/api/login', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    });
    const data = await response.json();
    if (data.err) {
      setError(data.err);
    } else {
      onLogin(true);
    }
  }
  
  const handleSignup = async (e) => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, 
        password: password }),
    });
    const data = await response.json();
    if (data.err) {
      setError(data.err);
    } else {
      onLogin(true);
    }
  }

  return (
    <OuterContainer>
      <Container>
        <Logo src={LogoAsset} />
        <div>
          <Tagline>Keeping You Organized Since 2023</Tagline>
          {error && <ErrorMessage><span>{error}, check your username and password.</span></ErrorMessage>}
          <>
            <Form>
              <Input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username"  />
              <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" />
            </Form>
            <ButtonContainer>
              <Button disabled={isDisabled} onClick={handleLogin} variant="primary">Login</Button>
              <Button disabled={isDisabled} onClick={handleSignup} variant="secondary">Sign Up</Button>
            </ButtonContainer>
          </>          
        </div>
      </Container>
    </OuterContainer>
  );
}


export default LoginSignUp;