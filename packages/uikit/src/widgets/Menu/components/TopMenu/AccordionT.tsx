import React, { ElementType, ReactNode, useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../../config";
import { LinkLabel, MenuEntry } from "../MenuEntry";
import { PushedProps } from "../../types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../../../components/Svg";
import { makeStyles } from '@material-ui/core/styles';
import SVG from 'react-inlinesvg';
import { ArrowRight } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    marginRight: '8px',
  },
});

interface Props extends PushedProps {
  label: string;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  isActive?: boolean;
  iconLink: string;
  iconSize?: number;
  dropdownBottom?: boolean; // 多级菜单显示位置 默认true下方 false右侧
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  border-style: solid;
  border-width: 1px 0;
`;

const ArrowRightSvg = styled(ArrowRight)`
  margin-left: 6px;
`
const AccordionT: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  className,
  isActive,
  iconLink,
  iconSize,
  dropdownBottom= true,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  const classes = useStyles();

  const theme = useContext(ThemeContext)
  return (
    <Container>
      <MenuEntry onClick={handleClick} className={className} isActive={isActive}>
        <LinkLabel isPushed={isPushed} isActive={isActive}>{label}</LinkLabel>
        {dropdownBottom ? (isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />) : (<ArrowRightSvg />)}
      </MenuEntry>
    </Container>
  );
};

// export default React.memo(Accordion, (prev, next) => prev.isPushed === next.isPushed);
export default AccordionT;
