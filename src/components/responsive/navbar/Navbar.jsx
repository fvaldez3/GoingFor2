import React from "react";
import {
  NavbarContainer,
  LogoSection,
  MenuSection,
  HamburgerSection,
} from "./navbarElements";
import Logo from "../../logo/Logo";
import NavLinks from "./NavLinks";
import { useMediaQuery } from "react-responsive";
import MobileNavLinks from "./MobileNavLinks";

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 756 });
  return (
    <NavbarContainer>
      <LogoSection>
        <Logo />
      </LogoSection>
      <MenuSection>{!isMobile && <NavLinks />}</MenuSection>
      <HamburgerSection>{isMobile && <MobileNavLinks />}</HamburgerSection>
    </NavbarContainer>
  );
}

export default Navbar;
