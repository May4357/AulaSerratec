import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/LOGOTIPO.png';
const StyledLogoContainer = styled.div`
  position: absolute; 
  top: 10px; 
  left: 10px; 
  z-index: 1000;
`;

const LogoContainer = () => {
  return (
    <StyledLogoContainer>
      <img src={Logo} alt="Logo" style={{ width:'200px',height:'150px'}} />
    </StyledLogoContainer>
  );
};

export default LogoContainer;
