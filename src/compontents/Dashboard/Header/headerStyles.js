import styled from "styled-components";
import ReactSVG from "react-svg";

export default Header => styled(Header)`
  background-color: ${props => props.theme.colorPrimary1};
  height: calc(100vh - 2rem);
  color: white;
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-columns: max-content 1fr;
  align-items: center;
  justify-items: center;
`;

export const Logo = styled(ReactSVG)`
  width: 25rem;
  fill: white;
  grid-column: 2 / 3;
`;

export const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-gap: 0 4rem;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 2/3;
`;

export const SideTitle = styled.h1`
  grid-row: 2/3;
  grid-column: 1/2;
  text-transform: uppercase;
  writing-mode: tb-rl;
  transform: rotate(180deg);
  line-height: 1;
  font-size: 6rem;
  padding: 6rem 1rem;
  margin-left: 4rem;
  background-color: ${props => props.theme.colorPrimary2};
`;

export const LogoTitle = styled.h1``;

export const NavContainer = styled.div`
  grid-column: 1/3;
  justify-self: stretch;
`;
