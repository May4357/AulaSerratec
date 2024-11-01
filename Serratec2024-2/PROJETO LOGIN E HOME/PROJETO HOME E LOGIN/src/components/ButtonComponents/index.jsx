import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.variant === "primary" ? "#0a66c2":"#f0f0f0"  )};
  color: ${(props) => (props.variant === "primary" ?"#f0f0f0" : "#0a66c2")};
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.variant === "primary" ?  "#f0f0f0": "#003366")};
  }
`;

const ButtonComponent = ({ title, handleFunction, variant }) => {
  return (
    <StyledButton onClick={handleFunction} variant={variant}>
      {title}
    </StyledButton>
  );
};

export default ButtonComponent;