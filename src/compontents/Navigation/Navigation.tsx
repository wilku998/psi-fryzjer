import * as React from "react";
import { NavLink } from "react-router-dom";

import style, { NavigationContent } from "./navigationStyles";

interface propsI {
  className: string;
  history: any;
}

const Navigation = ({ className }: propsI) => {
  return (
    <nav className={className}>
      <NavigationContent>
        <li>
          <NavLink activeClassName="active" to="/">Strona główna</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/salon">Salon</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/umow-wizyte">Umów wizytę</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/kontakt">Kontakt</NavLink>
        </li>
      </NavigationContent>
    </nav>
  );
};
export default style(Navigation);
