import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './style.jsx';
import LogoContainer from '../../components/StyledComponents/style.jsx';
import LoginContainer from '../Login/style.jsx'; 

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.1);
  width: 350px;
`;
const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  border: 2px solid #f20808;
  border-radius: 5px;
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
    if (!emailNumero || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    console.log('Email ou Telefone:', emailNumero);
    console.log('Senha:', password);
  };

  return (
    <LoginContainer>
      <LogoContainer /> 
      <Card>
          <h2>Entrar</h2>
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
