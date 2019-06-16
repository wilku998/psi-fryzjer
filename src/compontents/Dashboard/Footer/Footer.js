import React from "react";
import style, {Item} from "./footerStyles";

const Footer = ({ className }) => (
  <footer className={className}>
      <Item>
        Strona została stworzona dla celów edukacyjnych. Zaprezentowana oferta
        jest fikcyjna.
      </Item>
      <Item>Bartosz Wilk. Wszelkie prawa zastrzeżone &copy;</Item>
  </footer>
);

export default style(Footer);
