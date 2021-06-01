import React from "react";
import styled from "styled-components";
import { PanelProps, PushedProps } from "../../types";
import PanelBodyT from "./PanelBodyT";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: relative;
  flex: 2;
  padding: 0 15px;

  ${({ theme }) => theme.mediaQueries.nav} {
    z-index: initial;
  }
`;

const TopPanel: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <PanelBodyT {...props} />
    </StyledPanel>
  );
};

export default TopPanel;
