import styled from "styled-components";
import media from "../../styledComponents/breakPoints";

export const NavigationContainer = styled.nav`
  position: fixed;
  left: 10px;
  width: calc(100% - 20px);
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  display: grid;
  justify-content: end;
  padding: 0 6rem;
  height: 6rem;
  align-items: center;
  z-index: 100;
  transition: all 0.35s;
  ${props => `
    background-color: ${
      props.topposition >= 10
        ? props.theme.colorPrimary1
        : props.theme.colorPrimary3
    };
    top: ${props.topposition}px;
  `}

  ${media.big`
    padding: 0 3rem;
  `}

  ${media.medium_2`
    justify-content: center;
  `}
`;

export const NavigationContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  & > li {
    padding: 0.5rem 2rem;
    line-height: 1;
  }
`;
