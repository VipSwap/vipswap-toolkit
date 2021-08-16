import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";

import { MENU_ENTRY_HEIGHT } from "../../../config";
import { PanelProps, PushedProps,ContactList } from "../../../types";
import { Flex } from "../../../../../components/Box";
import Link from "../../../../../components/Link/Link";
import Tooltip from '@material-ui/core/Tooltip';
import { Button, Theme, withStyles } from "@material-ui/core";
import TokenPrice from "../../../components/TokenPrice";

interface Props extends PanelProps, PushedProps,ContactList {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.footerBg??theme.nav.background};
  // border-top: solid 2px rgba(133, 133, 133, 0.1);
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
const StyledBuyBtn = styled.div`
  padding: 5px 15px;
  border-radius: 10px;
  border: 1px solid ${({theme})=> theme.colors.primary1};
  color: ${({theme})=> theme.colors.primary1};
  cursor: pointer;
  &:hover {
    color: ${({theme})=> theme.colors.primary2};
    background-color: ${({theme})=> theme.colors.primary1};
  }
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
  tokenPriceUsd,
  webAsset,
}) => {

  const getImageView = (src:string)=>(
    <StyledImg src={src} alt="img"/>
  )
  return (
    <Container>
      <SocialEntry>
        <TokenPrice tokenPriceUsd={tokenPriceUsd} tokenAsset={webAsset.tokenAsset}/>
        <a href={webAsset.buyTokenUrl} target="_blank">
          <StyledBuyBtn>Buy</StyledBuyBtn>
        </a>
      </SocialEntry>
      {/*
      <Flex flexDirection={contactFlex} flexWrap="wrap">
        {contactList.map((entry,index) =>{

          return entry.isTooltip?(
            <IconTooltip interactive key={`${entry.iconLink}-${index}`} title={entry.isPhoto?getImageView(entry.tooltipContent):entry.tooltipContent} arrow placement="top"  disableFocusListener disableTouchListener >
              <Flex justifyContent="center" alignItems="center">
                <SVG src={entry.iconLink} width={entry.iconSize}
                   style={{margin: '4px', flexShrink: 0}}
              />
              </Flex>
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
      </Flex>
      */}
    </Container>
  );
};

export default PanelFooter;
