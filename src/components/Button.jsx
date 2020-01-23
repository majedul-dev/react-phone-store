import Styled from "styled-components";

export const ButtonContainer = Styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: ${props =>
    props.cart
      ? "0.05rem solid var(--mainYellow)"
      : "0.05rem solid var(--lightBlue)"};
  outline: none !important;
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.4s ease-in-out;
  &:hover{
    background: ${props =>
      props.cart ? "var(--mainYellow)" : " var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &focus{
    outline: none;
  }
`;
