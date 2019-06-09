import styled from "styled-components";
import ReactSVG from "react-svg";

import media from "../../../styledComponents/breakPoints";

export default Header => styled(Header)`
  background-color: ${props => props.theme.colorPrimary1};
  margin-top: 6rem;
  padding: 0 6rem 6rem 6rem;
  color: white;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  justify-items: center;
`;

export const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-gap: 0 4rem;
  align-items: center;
  grid-column: 2 / 3;
  justify-items: center;
  text-align: center;
  ${media.big`
    grid-gap: 4rem 0;
  `}
`;

export const Logo = styled(ReactSVG)`
  width: 25rem;
  fill: white;
  grid-column: 2 / 3;
  ${media.big`
    grid-column: 1 / 2;  
  `}
`;

export const LeftSide = styled.div`
  grid-column: 1/2;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  margin-right: 6rem;
`;

export const SideTitle = styled.h1`
  text-transform: uppercase;
  writing-mode: tb-rl;
  transform: rotate(180deg);
  line-height: 1;
  font-size: 6rem;
  font-weight: 300;
  padding: 0 2rem;
  text-align: center;
  background-color: ${props => props.theme.colorPrimary2};
`;

export const Offer = styled.div`
  display: grid;
  margin-left: 4rem;
  grid-gap: 2rem;
`;
export const OfferItem = styled.div`
  background-color: ${props => props.theme.colorGreyLight2};
  display: grid;
  grid-template-rows: max-content 1fr;
  & > h2 {
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    padding: 0.5rem 2rem;
    background-color: ${props => props.theme.colorPrimary2};
  }
`;

export const OfferLogo = styled(ReactSVG)`
  fill: ${props => props.theme.colorPrimary2};
  padding: 2rem;
`;

export const LogoTitle = styled.h1``;

export const NavContainer = styled.div`
  grid-column: 1/3;
  justify-self: stretch;
`;
