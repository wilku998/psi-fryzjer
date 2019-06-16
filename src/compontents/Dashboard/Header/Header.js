import React from "react";

import style, {
  Logo,
  LogoContainer,
  LogoTitle,
  SideTitle,
  LeftSide,
  Offer,
  OfferItem,
  OfferLogo
} from "./headerStyles";

const Header = ({ className }) => (
  <header className={className}>
    <LeftSide>
      <SideTitle>psi&nbsp;fryzjer</SideTitle>
      <Offer>
        <OfferItem>
          <h2>strzyżenie</h2> <OfferLogo src="./scissors.svg" />
        </OfferItem>
        <OfferItem>
          <h2>kąpiele</h2> <OfferLogo src="./scissors.svg" />
        </OfferItem>
        <OfferItem>
          <h2>trymowanie</h2> <OfferLogo src="./scissors.svg" />
        </OfferItem>
      </Offer>
    </LeftSide>
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
