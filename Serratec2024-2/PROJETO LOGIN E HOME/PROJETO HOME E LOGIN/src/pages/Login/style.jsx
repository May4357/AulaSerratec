import React, { useState } from 'react';
import styled from 'styled-components';
import LogoContainer from '../../components/StyledComponents/style';

const Card = styled.div`
  background-color: white; 
  padding: 20px; 
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center; 
`;


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  border-radius: 5px;
  position: relative;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
 
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
  width: 300px;
  height:60px;
  background-color: #0a66c2;
  border-radius:30px ;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #004182;
  }
`;

const ForgotPasswordText = styled.p`
  margin-top: 10px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [emailNumero, setEmailNumero] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email ou Telefone:', emailNumero);
    console.log('Senha:', password);
  };

  return (
    <LoginContainer>
      <LogoContainer /> 
         <Card>
            <h1>Entrar</h1>
            <h6>Acompanhe as novidades do seus mundo profissional</h6>
            <Input
              type="text"
              placeholder="Email ou Telefone"
              value={emailNumero} 
              onChange={(e) => setEmailNumero(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          <Button onClick={handleLogin}>Entrar</Button>
          <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
          </Card>
    </LoginContainer>
  
  );
};

export default Login;
