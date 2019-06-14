import styled from "styled-components";

export const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  color: white;
  background-color: ${props => props.theme.colorPrimary3};
`;

export const ButtonWithShadow = styled(Button)`
  transition: all 0.2s;
  position: relative;
  &:hover {
    transform: translateY(-0.5rem);
  }
  &:active {
    transform: translateY(-0.3rem);
  }

  &:hover:after {
    opacity: 1;
  }

  &:hover:before {
    opacity: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.15);
    opacity: 0;
    transition: all 0.2s;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.15);
    opacity: 1;
    transition: all 0.2s;
  }
`;