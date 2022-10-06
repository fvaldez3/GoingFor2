import React, { useState } from "react";
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
import MobileNavBar from "./MobileNavBar";

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 756 });
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileView = () => {
    setMobileNavActive((prevState) => {
      return !prevState;
    });
  };

  return (
    <React.Fragment>
      <NavbarContainer>
        <LogoSection>
          <Logo />
        </LogoSection>
        <MenuSection>{!isMobile && <NavLinks />}</MenuSection>
        <HamburgerSection>
          {isMobile && (
            <HamburgerButton onClick={toggleMobileView}>
              <GoThreeBars size={45} color="000028" />
            </HamburgerButton>
          )}
        </HamburgerSection>
      </NavbarContainer>
      <MobileNavBar
        isOpen={isMobileNavActive}
        toggle={toggleMobileView}
      ></MobileNavBar>
    </React.Fragment>
  );
}

export default Navbar;
