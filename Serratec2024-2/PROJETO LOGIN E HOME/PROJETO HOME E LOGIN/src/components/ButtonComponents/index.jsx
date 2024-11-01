import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  width: 300px;
  background-color: #0a66c2;
  border: none;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: #004182;
  }
`;

const ButtonComponents = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default ButtonComponents;