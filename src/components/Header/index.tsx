import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import HamburgerIcon from "../../assets/images/icon-hamburger.svg";
import {
  ContactButton,
  HeaderContainer,
  InnerContainer,
  LogoWrapper,
  Navigation,
} from "./style";

export const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  function handleToggleNavigationMenu() {
    setShowNav(!showNav);
  }

  return (
    <HeaderContainer style={{ backgroundColor: "#333" }}>
      <InnerContainer>
        <LogoWrapper>
          <img src={Logo} alt="" />
        </LogoWrapper>
        <button
          onClick={handleToggleNavigationMenu}
          title="Toggle menu"
          aria-controls="main-navigation"
        >
          <img src={HamburgerIcon} />
        </button>
        <Navigation isOpen={showNav}>
          <ul role="list" id="main-navigation" data-visible={showNav}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <ContactButton>Contact</ContactButton>
            </li>
          </ul>
        </Navigation>
      </InnerContainer>
    </HeaderContainer>
  );
};
