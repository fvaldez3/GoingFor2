import styled from "styled-components"

export const MobileNavbarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000028;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0")};
    top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
`;

export const NavBarContainer = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    background: ${({scrollNav}) => (scrollNav ? "#000028" : "transparent")};
    position: sticky;
    top: 0px;
    z-index: 2;
    margin-top:-85px;
    transition: all 0.2s ease-in-out;
`;