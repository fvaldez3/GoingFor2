import styled from "styled-components";

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoText = styled.h2`
    font-size: 30px;
    margin: 0px;
    margin-left: 4px;
    font-weight: 500;
    background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const LogoElements = {LogoWrapper,LogoText}

export default LogoElements