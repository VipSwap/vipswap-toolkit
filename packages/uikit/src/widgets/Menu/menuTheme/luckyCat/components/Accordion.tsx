import React, { ElementType, ReactNode, useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../../../config";
import { LinkLabel, MenuEntry } from "./MenuEntry";
import { PushedProps } from "../../../types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../../../../components/Svg";
import { makeStyles } from '@material-ui/core/styles';
import SVG from 'react-inlinesvg';

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
  children: ReactNode;
  isActive?: boolean;
  iconLink: string;
  iconSize?: number;
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
  // border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  // border-style: solid;
  // border-width: 1px 0;
`;

const Accordion: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
  isActive,
  iconLink,
  iconSize,
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
        {iconLink?(
          <SVG src={iconLink} width={iconSize} style={{marginRight: '8px', flexShrink: 0}} />
        ):null}
        <LinkLabel isPushed={isPushed} isActive={isActive}>{label}</LinkLabel>
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * (MENU_ENTRY_HEIGHT + 20)}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

// export default React.memo(AccordionT, (prev, next) => prev.isPushed === next.isPushed);
export default Accordion;
