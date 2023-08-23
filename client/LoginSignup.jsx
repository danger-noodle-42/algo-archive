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
const Tagline = styled.div``;

const LoginOrSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState();

  const handleSubmit = async () => {
    // attempt to login the user in
    const route = isLogin ? '/api/login' : '/api/signup';  // TODO: confirm the routes
    const response = await fetch(route, { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.error) {
      setError(data.error);
    }
  }
  
  const toggleLogin = () => {
    setIsLogin(!isLogin);
    setError();

  }

  return (
    <OuterContainer>
      <Container>
        <Logo src={LogoAsset} />
        <div>
          <Tagline>Keeping you organized since 2023</Tagline>
          <>
            <form onSubmit={handleSubmit}>
              <input value={isLogin} type="text" placeholder="Username" />
              <br />
              <input value={isLogin} type="password" placeholder="*******" />
            </form>
            <Button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Login' : 'Sign Up'}</Button>
          </>
          <p>Already have an account? Register here.</p>
          
          
        </div>
      </Container>
    </OuterContainer>
  );
}


export default LoginOrSignUp;