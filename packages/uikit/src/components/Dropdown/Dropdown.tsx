import React from "react";
import styled from "styled-components";
import { DropdownProps, PositionProps, Position } from "./types";
import { ExpandMore, ExpandLess } from '@material-ui/icons';

const getLeft = ({ position }: PositionProps) => {
  if (position === "top-right") {
    return "100%";
  }
  if(position === "top-left"){
    return "0px";
  }
  if (position === "left") {
    return "auto";
  }
  if (position === "right") {
    return "100%";
  }
  return "50%";
};

const getBottom = ({ position }: PositionProps) => {
  if (position === "top" || position === "top-right" || position === "top-left") {
    return "100%";
  }
  return "auto";
};
const getTop = ({ position }: PositionProps) => {
  if (position === "left" || position === "right") {
    return "0";
  }
  return "auto";
};
const getRight = ({ position }: PositionProps) => {
  if (position === "left") {
    return "100%";
  }
  if (position === "right") {
    return "auto";
  }
  return "auto";
};

const DropdownContent = styled.div<{ position: Position,canScroll:boolean,isCollect?: boolean }>`
  width: max-content;
  display: none;
  flex-direction: column;
  position: absolute;
  transform: ${({position})=> (position === 'left'||position === 'right')?'none':'translate(-50%, 0)' };
  left: ${getLeft};
  right: ${getRight};
  top: ${getTop};
  bottom: ${getBottom};
  background-color: ${({ theme }) => theme.colors.navDropdownBg};
  border: ${({ theme })=> theme.colors.navDropdownBorder?`1px solid ${theme.colors.navDropdownBorder}`:'none'}
  box-shadow: ${({ theme }) => theme.shadows.level1};
  max-height: 500px;
  ${({canScroll}) => canScroll? 'overflow-y: auto;': ''}
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  border-radius: ${({ theme }) => theme.radii.small};
  
`;

const Container = styled.div<{className: string}>`
  position: relative;
  display: inline-block;
  &.MenuLanWidth {
    width: 100%;
  }
  &.${({className})=>className}:hover > ${DropdownContent}{
    display: flex;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ target, position = "bottom", canScroll= true,className='menu-st', children }) => {
  return (
    <Container className={className}>
      {target}
      <DropdownContent position={position} canScroll={canScroll}>{children}</DropdownContent>
    </Container>
  );
};
Dropdown.defaultProps = {
  position: "bottom",
};

export default Dropdown;
