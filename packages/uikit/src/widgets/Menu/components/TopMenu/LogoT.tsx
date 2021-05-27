import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../../components/Svg";
import Flex from "../../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "../../icons";
import MenuButton from "../MenuButton";

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
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;
const StyledIcon = styled.div`
`

const LogoT: React.FC<Props> = ({ isMobile,isPushed, togglePush, isDark, href , webIcon}) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {isDark?(
        <img src={webIcon.light} width={webIcon.width} height={webIcon.height}/>
      ):(
        <img src={webIcon.light} width={webIcon.width} height={webIcon.height}/>
      )}
    </>
  );

  return (
    <Flex>
      {isMobile && (
        <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
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
    </Flex>
  );
};

export default React.memo(LogoT, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark && prev.isMobile === next.isMobile);
