import React from "react";
import { NavLink } from "react-router-dom";

import {
  NavigationContainer,
  NavigationContent,
  NavigationButton,
  MobileMenu,
  MobileMenuContent
} from "./navigationStyles";

const { useEffect, useState } = React;

const Navigation = () => {
  const getTopPositon = () => {
    const scrollPos = window.pageYOffset;
    return scrollPos >= 10 ? 0 : 10;
  };

  const [topPosition, setTopPosition] = useState(getTopPositon());
  const [mobileMenuVisible, toggleMobileMenu] = useState(false);

  const onMobileButtonClick = () => toggleMobileMenu(!mobileMenuVisible);

  const onScroll = () => {
    setTopPosition(getTopPositon());
  };

  const removeOnScroll = () => window.removeEventListener("scroll", onScroll);

  const renderNavList = (Component, activeClassName) => {
    const onItemClick = () => {
      if(mobileMenuVisible){
        toggleMobileMenu(false);
      }
    }
    return (
      <Component>
        {[
          { title: "Strona główna", link: "/" },
          { title: "Salon", link: "/salon" },
          { title: "Umów wizytę", link: "/umow-wizte" },
          { title: "Kontakt", link: "/kontakt" }
        ].map((e, i) => (
          <li key={i}>
            <NavLink
              activeClassName={activeClassName}
              to={e.link}
              onClick={onItemClick}
            >
              {e.title}
            </NavLink>
          </li>
        ))}
      </Component>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      removeOnScroll();
    };
  }, []);

  return (
    <NavigationContainer topposition={topPosition}>
      {renderNavList(NavigationContent, "nav-link-active")}
      <NavigationButton
        mobileMenuVisible={mobileMenuVisible}
        onClick={onMobileButtonClick}
      >
        <span />
      </NavigationButton>
      {mobileMenuVisible && (
        <MobileMenu>
          {renderNavList(MobileMenuContent, "mobile-nav-link-active")}
        </MobileMenu>
      )}
    </NavigationContainer>
  );
};
export default Navigation;
