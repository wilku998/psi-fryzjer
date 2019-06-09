import * as React from "react";

import style, {
  Logo,
  LogoContainer,
  LogoTitle,
  SideTitle,
  NavContainer
} from "./headerStyles";
import Navigation from "../../Navigation/Navigation";

interface propsI {
  className: string;
}

const Header = ({ className }: propsI) => (
  <header className={className}>
    <NavContainer>
      <Navigation />
    </NavContainer>
    <SideTitle>psi fryzjer</SideTitle>
    <LogoContainer>
      <div>
        <LogoTitle>Adam&nbsp;Adamowski</LogoTitle>
        <span>Profesionalne usługi kosmetyczne dla zwięrząt od 2005.</span>
      </div>
      <Logo src="./scissors.svg" />
    </LogoContainer>
  </header>
);

export default style(Header);
