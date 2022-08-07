import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 60%;

  margin: 0;
  padding: 0rem 1.6rem;

  color: #302f2f;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: inherit;

  line-height: 1.8;

  border: none;
  border-radius: 0.4rem;

  &:focus {
    outline: none;
    box-shadow: 0.2rem 0.2rem 1.2rem #201e22;
  }
`;


export default Input;