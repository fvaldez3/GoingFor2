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