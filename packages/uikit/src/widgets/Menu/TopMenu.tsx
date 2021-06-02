import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import LogoT from "./components/TopMenu/LogoT";
import {default as TopPanel} from "./components/TopMenu/TopPanel";
import {default as PanelT} from "./components/TopMenu/PanelT";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT } from "./config";
import SelectConnector from "./components/SelectConnector";
import LangSelectorT from "./components/TopMenu/LangSelectorT";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean, isMobile: boolean}>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: ${({ isMobile }) => (isMobile ? 'none' : `translate3d(0, 0, 0)`)};
  transform: none;
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: 0;
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;
const StyledFlex = styled(Flex)`
  @media screen and (max-width: 1080px){
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: flex-end;
    align-items: center;
    padding-left: 8px;
    padding-right: 16px;
    width: 100%;
    height: ${MENU_HEIGHT}px;
    background-color: ${({ theme }) => theme.nav.background};
    z-index: 10;
    transform: translate3d(0, 0, 0);
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
  }
  
  ${({ theme }) => theme.mediaQueries.nav} {
    position: relative;
  }
`
const LangBox = styled.div`
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

const TopMenu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  tokenPriceUsd,
  links,
  profile,
  children,
  webAsset,
  socials,
  walletSet,
  connectorSet
}) => {
  const { isXl,isMd,isSm,isXs } = useMatchBreakpoints();
  const isMobile = isXl === false;
  // console.log('Menu isMobile', isMobile)
  // console.log('Menu currentLang', currentLang)
  // console.log('Menu links', links[0])
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  const [currentLinks, setCurrentLinks] = useState(links);

  useEffect(() => {
    setCurrentLinks(links)
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [setCurrentLinks,links]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu} isMobile={isMobile}>
        <LogoT
          isMobile={isMobile}
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
          webIcon={webAsset.webIcon}
        />
        {!isMobile && (
          <TopPanel
            isPushed={isPushed}
            isMobile={isMobile}
            showMenu={showMenu}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            tokenPriceUsd={tokenPriceUsd}
            pushNav={setIsPushed}
            links={currentLinks}
            webAsset={webAsset}
            socials={socials}
          />
        )}
        <StyledFlex>
          {account && connectorSet && (
            <SelectConnector
              chainId={connectorSet.chainId}
              list={connectorSet.connectorList}
              networkLabels={connectorSet.networkLabels}
            />
          )}
          <LangBox>
            <LangSelectorT currentLang={currentLang} langs={langs} setLang={setLang} isMobile={isMobile}/>
          </LangBox>
          <UserBlock account={account} login={login} logout={logout} walletSet={walletSet}/>
          {/* {profile && <Avatar profile={profile} />} */}
        </StyledFlex>
      </StyledNav>
      {!isMobile && (
        <BodyWrapper>
          <Inner isPushed={isPushed} showMenu={showMenu}>
            {children}
          </Inner>
        </BodyWrapper>
      )}
      {isMobile && (
        <BodyWrapper>
          <PanelT
            isPushed={isPushed}
            isMobile={isMobile}
            showMenu={showMenu}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            tokenPriceUsd={tokenPriceUsd}
            pushNav={setIsPushed}
            links={currentLinks}
            webAsset={webAsset}
            socials={socials}
          />
          <Inner isPushed={isPushed} showMenu={showMenu}>
            {children}
          </Inner>
          <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
        </BodyWrapper>
      )}

    </Wrapper>
  );
};

export default TopMenu;
