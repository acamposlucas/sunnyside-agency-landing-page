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
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  function handleToggleNavigationMenu() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <HeaderContainer>
      <InnerContainer>
        <LogoWrapper>
          <img src={Logo} alt="" />
        </LogoWrapper>
        <button
          onClick={handleToggleNavigationMenu}
          aria-label="Toggle menu"
          aria-controls="main-navigation"
          aria-expanded={isNavOpen}
        >
          <img src={HamburgerIcon} />
        </button>
        <Navigation isOpen={isNavOpen}>
          <ul role="list" id="main-navigation" data-visible={isNavOpen}>
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
