import styled from "styled-components"
import {GoX} from "react-icons/go"
import { Link as LinkR } from "react-router-dom"; 

export const NavbarContainer = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    background: #000028
    }
`;

export const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
`;

export const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.1em;
    font-weight: 500;
    font-size: 25px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    &:hover{
        border-top: solid;
        border-image-slice: 1;
        border-width: 2px;
        border-image-source: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
    }
`;

export const Link = styled(LinkR)`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

export const LogoSection = styled.div`
    display: flex;
    flex: 1;
`;

export const MenuSection = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    flex: 2;
`;

export const HamburgerSection = styled.div`
    display: flex;
    flex: 1;
`;

export const HamburgerButton = styled.div`
    background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
    height: 45px;
    width: 45px;
`;

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

export const CloseIcon = styled(GoX)`
    color: #000028;
    background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right:1.5rem;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const MobileNavWrapper = styled.div`
    background: #fff
    justify-content: center;
`;

export const MobileNavLink = styled.li`
    font-weight: 500;
    font-size: 30px;
    justify-content: left;
    margin-top: 25px;
    background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

`;

export const MobileNavMenu = styled.ul`
    padding-left: 25%;
    display: block;
    height: 100%;
    list-style: none;
`;