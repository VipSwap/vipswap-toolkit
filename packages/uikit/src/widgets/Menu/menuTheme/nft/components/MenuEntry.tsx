import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { Text } from "../../../../../components/Text";
import { Colors } from "../../../../../theme/types";
import { MENU_ENTRY_HEIGHT } from "../../../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}
export interface LabelProps {
  isPushed?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<LabelProps>`
  color: ${({ isPushed, theme, isActive }) => (isPushed ? (isActive ? theme.colors.navActivityText : theme.colors.navText) : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
`;

const LinkLabelStatus = styled.div<LabelProps>`
  color: ${({ isPushed, theme, isActive }) => (isPushed ? (isActive ? theme.colors.navActivityText : theme.colors.navText) : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
`;
LinkLabelStatus.defaultProps = {
  isPushed: true,
  isActive: false,
};
LinkLabel.defaultProps = {
  isPushed: true,
  isActive: false,
};

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.navItemBg : "transparent")};
  color: ${({ isActive, theme }) => isActive ? theme.colors.navActivityText : theme.colors.navText};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ isActive, theme }) => isActive ? theme.colors.navActivityText : theme.colors.navText};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.navHover};
    ${LinkLabelStatus} {
      color: ${({ theme }) => theme.colors.navHover};
    }
    ${LinkLabel} {
      color: ${({ theme }) => theme.colors.navHover};
    }
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
`;

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed && prev.isActive === next.isActive);

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel, LinkLabelStatus };