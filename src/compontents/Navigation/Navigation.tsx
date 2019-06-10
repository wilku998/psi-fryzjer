import * as React from "react";
import { NavLink } from "react-router-dom";

import { NavigationContainer, NavigationContent } from "./navigationStyles";

const { useEffect, useState } = React;

interface propsI {}

const Navigation = () => {
  const getTopPositon = () => {
    const scrollPos: number = window.pageYOffset;
    return scrollPos >= 10 ? 0 : 10;
  };

  const [topPosition, setTopPosition] = useState(getTopPositon());

  const onScroll = () => {
    setTopPosition(getTopPositon());
  };

  const removeOnScroll = () => window.removeEventListener("scroll", onScroll);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      removeOnScroll();
    };
  }, []);

  return (
    <NavigationContainer topposition={topPosition}>
      <NavigationContent>
        <li>
          <NavLink activeClassName="active" to="/">
            Strona główna
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/salon">
            Salon
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/umow-wizyte">
            Umów wizytę
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/kontakt">
            Kontakt
          </NavLink>
        </li>
      </NavigationContent>
    </NavigationContainer>
  );
};
export default Navigation;
