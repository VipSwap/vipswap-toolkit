import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { Text } from "../../../../../components/Text";
import { Colors } from "../../../../../theme/types";
import { MENU_ENTRY_HEIGHT, MENU_ENTRY_HEIGHT_2 } from "../../../config";

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
  position: relative;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT_2}px;
  border-radius: ${MENU_ENTRY_HEIGHT_2}px;
  margin: ${({ secondary }) => (secondary ? "8px 32px" : "8px 16px")};
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ secondary, theme, isActive }) => (isActive?(secondary ? "transparent" : theme.colors.navItemBg) : "transparent")};
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
    background-color: ${({ theme }) => theme.colors.navHover};
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

const LinkStatus = styled(Text)<{ color: keyof Colors, bgColor?: string }>`
  border-radius: ${({ theme }) => theme.radii.default};
  border-bottom-left-radius: 0px;
  padding: 0 8px;
  border: none;
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  background: ${({bgColor}) => bgColor??'transparent'};
  position: absolute;
  top: -10px;
  right: 0;
`;

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed && prev.isActive === next.isActive);

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel, LinkLabelStatus };
