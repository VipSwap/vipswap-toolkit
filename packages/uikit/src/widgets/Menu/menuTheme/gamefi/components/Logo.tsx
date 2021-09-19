import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "../../../icons";
import MenuButton from "../../../components/MenuButton";

interface Props {
  isPushed: boolean;
  isMobile: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
  webIcon: any;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 40px;
  overflow: hidden;
  ${({ theme }) => theme.mediaQueries.nav} {
    justify-content: center;
    flex:2;
    width: auto;
  }
`;

const StyledImg = styled.img<{height:number,isMobile:boolean}>`
  height: ${({height,isMobile})=>isMobile?'40px':`${height}px`};
  object-fit: contain;
  max-width: fit-content;
 
  ${({ theme }) => theme.mediaQueries.nav} {
    width: 100%;
  }
`
const LogoFlex = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.nav} {
    flex:2;
  }
`

const Logo: React.FC<Props> = ({ isMobile,isPushed, togglePush, isDark, href , webIcon}) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {isDark?(
        <StyledImg src={webIcon.dark} isMobile={isMobile} height={webIcon.height}/>
      ):(
        <StyledImg src={webIcon.light} isMobile={isMobile} height={webIcon.height}/>
      )}
    </>
  );

  return (
    <LogoFlex>
      {isMobile && (
        <MenuButton aria-label="Toggle menu" onClick={togglePush}>
          {isPushed ? (
            <HamburgerCloseIcon width="24px" color="navActivityText" />
          ) : (
            <HamburgerIcon width="24px" color="navText" />
          )}
        </MenuButton>
      )}
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="home page">
          {innerLogo}
        </StyledLink>
      )}
    </LogoFlex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark && prev.isMobile === next.isMobile);
