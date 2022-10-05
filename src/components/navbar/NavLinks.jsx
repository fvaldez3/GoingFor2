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
          <Link href="#">Articles</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Rankings</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">FFTools</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}

export default NavLinks;
