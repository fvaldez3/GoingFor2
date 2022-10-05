import styled from "styled-components"

export const NavbarContainer = styled.div`
    width: 100%;
    height: 85px;
    box-shadow: 0 1px 3px rgba(15,15,15, 0.13);
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    background: #fff
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

export const MobileLinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
    background-color: #fff;
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 65px;
    left: 0;
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

export const MobileLinkItem = styled.li`
    width: 100%;
    padding: 0 1.1em;
    font-weight: 500;
    font-size: 25px;
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

export const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

export const LogoSection = styled.div`
    display: flex;
`;

export const MenuSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
`;

export const HamburgerSection = styled.div`
    display: flex;
    flex:1;
`;