import React from "react";
import {
  MobileNavbarContainer,
  CloseIcon,
  Icon,
  MobileNavLink,
  MobileNavWrapper,
  MobileNavMenu,
} from "./navbarElements";

function MobileNavBar() {
  return (
    <MobileNavbarContainer>
      <Icon>
        <CloseIcon size={38} />
      </Icon>
      <MobileNavWrapper>
        <MobileNavMenu>
          <MobileNavLink href="#">Home</MobileNavLink>
          <MobileNavLink href="#">Articles</MobileNavLink>
          <MobileNavLink href="#">Rankings</MobileNavLink>
          <MobileNavLink href="#">FFTools</MobileNavLink>
        </MobileNavMenu>
      </MobileNavWrapper>
    </MobileNavbarContainer>
  );
}

export default MobileNavBar;
