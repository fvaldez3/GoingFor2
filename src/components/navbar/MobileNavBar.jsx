import React from "react";
import {
  MobileNavbarContainer,
  CloseIcon,
  Icon,
  MobileNavLink,
  MobileNavWrapper,
  MobileNavMenu,
  Link,
} from "./navbarElements";

function MobileNavBar(props) {
  return (
    <MobileNavbarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon size={38} />
      </Icon>
      <MobileNavWrapper>
        <MobileNavMenu>
          <MobileNavLink>
            <Link to="/home">Home</Link>
          </MobileNavLink>
          <MobileNavLink>
            <Link to="/articles">Articles</Link>
          </MobileNavLink>
          <MobileNavLink>
            <Link to="/rankings">Rankings</Link>
          </MobileNavLink>
          <MobileNavLink>
            <Link to="/fftools">FFTools</Link>
          </MobileNavLink>
        </MobileNavMenu>
      </MobileNavWrapper>
    </MobileNavbarContainer>
  );
}

export default MobileNavBar;
