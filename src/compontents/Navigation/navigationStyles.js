import styled from "styled-components";
import media from "../../styledComponents/breakPoints";
import {
  opacityAnimation,
  activeNavLink
} from "../../styledComponents/animations";

export const NavigationContainer = styled.nav`
  position: fixed;
  left: 10px;
  width: calc(100% - 20px);
  color: white;
  font-size: 1.6rem;
  font-weight: 400;
  display: grid;
  justify-content: end;
  padding: 0 6rem;
  height: 5rem;
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
  ${media.small`
    justify-content: end;
    padding: 1rem 3rem;
    left: 0;
    width: 100%;
    top: 0 !important;
  `}

  &:before{
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: ${props => props.theme.colorPrimary2};
  }
`;

export const NavigationContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  & > li {
    padding: 0.5rem 2rem;
    line-height: 1;
  }
  ${media.small`
    display: none;
  `}

  .nav-link-active {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: calc(100% + 0.3rem);
      left: 50%;
      width: 70%;
      transform: translateX(-50%);
      height: 2px;
      background-color: white;
      opacity: 0.5;
      animation: ${activeNavLink} 0.5s;
    }
  }
`;

export const NavigationButton = styled.button`
  display: none;
  border: none;
  z-index: 20;
  background-color: ${props => props.theme.colorPrimary2};
  height: 100%;
  position: relative;
  width: 4rem;
  border-radius: 0.5rem;
  ${media.small`
    display: inline-block;
  `}

  & > span {
    width: 66%;
    height: ${props => (props.mobileMenuVisible ? "0" : ".2rem")};
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:before {
      content: "";
      height: 0.2rem;
      background-color: white;
      position: absolute;
      width: ${props => (props.mobileMenuVisible ? "75%" : "100%")};
      top: ${props => (props.mobileMenuVisible ? "50%" : "-.75rem")};
      left: 50%;
      transition: all 0.35s;
      transform: translateX(-50%)
        ${props => (props.mobileMenuVisible ? "rotate(225deg)" : "")};
    }

    &:after {
      content: "";
      height: 0.2rem;
      background-color: white;
      position: absolute;
      width: ${props => (props.mobileMenuVisible ? "75%" : "100%")};
      top: ${props => (props.mobileMenuVisible ? "50%" : ".75rem")};
      left: 50%;
      transition: all 0.35s;
      transform: translateX(-50%)
        ${props => (props.mobileMenuVisible ? "rotate(-225deg)" : "")};
    }
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  animation: ${opacityAnimation} 0.35s;
  background-image: ${({ theme }) =>
    `linear-gradient(to right bottom, ${theme.colorSecondary1}, ${
      theme.colorSecondary3
    })`};
`;

export const MobileMenuContent = styled.ul`
  padding: 5rem;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-auto-rows: max-content;
  grid-gap: 2rem;
  font-size: 2.2rem;

  .mobile-nav-link-active {
    border: 1px solid white;
  }

  & > li {
    & > a {
      background-color: ${({ theme }) => theme.colorSecondary2};
      padding: 0.5rem 2rem;
    }
  }
`;
