import React from "react";
import {
  NavLinksContainer,
  LinksWrapper,
  LinkItem,
  Link,
} from "./navbarElements";

function NavLinks() {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link to="/GoingFor2">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/articles">Articles</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/rankings">Rankings</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/fftools">FFTools</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}

export default NavLinks;
