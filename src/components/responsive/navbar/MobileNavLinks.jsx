import React, { useState } from "react";
import {
  NavLinksContainer,
  MobileLinksWrapper,
  MobileLinkItem,
  Link,
} from "./navbarElements";
import Hamburger from "./Hamburger";

function MobileNavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavLinksContainer>
      <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <MobileLinksWrapper>
          <MobileLinkItem>
            <Link href="#">Home</Link>
          </MobileLinkItem>
          <MobileLinkItem>
            <Link href="#">About</Link>
          </MobileLinkItem>
          <MobileLinkItem>
            <Link href="#">Contact</Link>
          </MobileLinkItem>
        </MobileLinksWrapper>
      )}
    </NavLinksContainer>
  );
}

export default MobileNavLinks;
