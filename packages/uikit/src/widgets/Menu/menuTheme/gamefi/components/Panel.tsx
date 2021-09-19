import React from "react";
import styled from "styled-components";
import { ContactList, PanelProps, PushedProps } from "../../../types";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL, MENU_HEIGHT } from "../../../config";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";

interface Props extends PanelProps, PushedProps,ContactList {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean, showMenu: boolean, navHeight?: number }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.mBg?theme.nav.mBg:theme.nav.background};
  // width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  width: ${({ isPushed }) => (isPushed ? `30%` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  // border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    padding-top:  ${({navHeight})=>navHeight??MENU_HEIGHT}px;
    z-index: initial;
    // border-right: 2px solid rgba(133, 133, 133, 0.1);
    background-color: ${({ theme }) => theme.nav.background};
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu, webAsset } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu} navHeight={webAsset.NavHeightPc}>
      <PanelBody { ...props } />
      <PanelFooter { ...props } />
    </StyledPanel>
  );
};

export default Panel;
