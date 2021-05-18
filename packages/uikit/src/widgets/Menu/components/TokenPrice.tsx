import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";
import SVG from "react-inlinesvg";

interface Props {
  tokenPriceUsd?: number;
  tokenAsset?: any;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const TokenPrice: React.FC<Props> = ({ tokenPriceUsd,tokenAsset }) => {
  return (
    <PriceLink href={tokenAsset.priceLink} target="_blank">
      {tokenAsset.tokenIcon?(<SVG src={tokenAsset.tokenIcon} width={24} style={{marginRight: '8px'}} />):null}
      <Text color="navText" bold>{tokenPriceUsd ?`$${tokenPriceUsd.toFixed(3)}`: '--'}</Text>
    </PriceLink>
  );
};

export default TokenPrice;
