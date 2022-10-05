import React from "react";
import {
  NavbarContainer,
  LogoSection,
  MenuSection,
  HamburgerSection,
  HamburgerButton,
} from "./navbarElements";
import Logo from "../logo/Logo";
import NavLinks from "./NavLinks";
import { useMediaQuery } from "react-responsive";
import { GoThreeBars } from "react-icons/go";

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 756 });
  return (
    <NavbarContainer>
      <LogoSection>
        <Logo />
      </LogoSection>
      <MenuSection>{!isMobile && <NavLinks />}</MenuSection>
      <HamburgerSection>
        {isMobile && (
          <HamburgerButton>
            <GoThreeBars size={45} color="000028" />
          </HamburgerButton>
        )}
      </HamburgerSection>
    </NavbarContainer>
  );
}

export default Navbar;
