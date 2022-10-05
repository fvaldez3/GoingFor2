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
          <Link href="#">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">About</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Contact</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}

export default NavLinks;
