import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";

import { MENU_ENTRY_HEIGHT } from "../../../config";
import { PanelProps, PushedProps,ContactList } from "../../../types";
import { Flex } from "../../../../../components/Box";
import Link from "../../../../../components/Link/Link";
import Tooltip from '@material-ui/core/Tooltip';
import { Button, Theme, withStyles } from "@material-ui/core";

interface Props extends PanelProps, PushedProps,ContactList {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
  svg {
    fill: ${({ theme }) => theme.colors.navText};
  }
  svg:hover {
    fill: ${({ theme }) => theme.colors.navActivityText};
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;
const StyledImg= styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  padding: 10px;
  box-sizing: border-box;
`
const IconTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: '#fff',
    color: '#333',
  },
  arrow: {
    color: '#fff',
  },
}))(Tooltip);
const PanelFooter: React.FC<Props> = ({
  contactList,
  contactFlex='row',
}) => {

  const getImageView = (src:string)=>(
    <StyledImg src={src} alt="img"/>
  )
  return (
    <Container>
      <Flex flexDirection={contactFlex} flexWrap="wrap">
        {contactList.map((entry,index) =>{

          return entry.isTooltip?(
            <IconTooltip interactive key={`${entry.iconLink}-${index}`} title={entry.isPhoto?getImageView(entry.tooltipContent):entry.tooltipContent} arrow placement="top"  disableFocusListener disableTouchListener >
              <div>
                <SVG src={entry.iconLink} width={entry.iconSize}
                   style={{margin: '4px', flexShrink: 0}}
              />
              </div>
            </IconTooltip>
          ):(
            <Link external key={`${entry.iconLink}-${index}`} href={entry.href}>
              <SVG src={entry.iconLink} width={entry.iconSize}
                   style={{margin: '4px', flexShrink: 0}}
              />
            </Link>
          )
          }
        )}
        <Tooltip disableFocusListener disableTouchListener title="Add"  arrow placement="top">
          <Button>Hover</Button>
        </Tooltip>
      </Flex>
    </Container>
  );
};

export default PanelFooter;
