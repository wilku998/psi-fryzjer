import * as React from "react";
import style, {Item} from "./footerStyles";

interface propsI {
  className: string;
}

const Footer = ({ className }: propsI) => (
  <footer className={className}>
      <Item>
        Strona została stworzona dla celów edukacyjnych. Zaprezentowana oferta
        jest fikcyjna.
      </Item>
      <Item>Bartosz Wilk. Wszelkie prawa zastrzeżone &copy;</Item>
  </footer>
);

export default style(Footer);
