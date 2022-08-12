import styled from 'styled-components';

const Button = styled.button`
  width: 20%;

  font-size: 1em;

  padding: 0.8em 1.6em;
  
  background-color: #459ad3;
  
  border-radius: 4px;
  border: none;
  
  cursor: pointer;

  color: white;

  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }
`;

export default Button;