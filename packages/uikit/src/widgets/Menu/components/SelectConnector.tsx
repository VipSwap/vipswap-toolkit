import React from "react";
import Button from "../../../components/Button/Button";
import { ConnectorNames } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import Dropdown from "../../../components/Dropdown/Dropdown";
import styled from "styled-components";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

export interface ConnectorList {
  login: Login;
  chainName: string;
  connectorId: ConnectorNames;
}
interface Props {
  list: Array<ConnectorList>
  chainId: number;
  networkLabels: { [index:number]: string }
}
const DropdownItem = styled.div`
  padding: 10px 15px;
  font-size: 18px;
  color: ${({theme})=>theme.colors.text};
  cursor: pointer;
  :hover {
    background-color: ${({theme})=>theme.colors.navHover};
  }
`
const ExpandMoreSVG = styled(ExpandMore)`
  margin-left: 6px;
`
const ExpandLessSVG = styled(ExpandLess)`
  margin-left: 6px;
`
const DropdownBtn = styled(Button)`
  margin-right: 15px;
  &:hover ${ExpandMoreSVG} {
    display: none;
  }
  &:hover ${ExpandLessSVG} {
    display: inline-block;
  }
  & ${ExpandLessSVG} {
    display: none;
  }
`
const SelectConnector: React.FC<Props> = ({ list, chainId, networkLabels }) => {
  const dropdownTarget = ()=>(
    <DropdownBtn scale="sm" borderRadius="10px">
      {networkLabels[chainId]}
      <ExpandMoreSVG/>
      <ExpandLessSVG/>
    </DropdownBtn>
  )
  return (
    <div>
      <Dropdown target={dropdownTarget()}>
        {list.map((item, index) => {
          return (
            <DropdownItem
              onClick={() => {
                item.login(item.connectorId)
              }}
              key={index}
            >
              {item.chainName.toUpperCase()}
            </DropdownItem>
          );
        })}
      </Dropdown>
    </div>
  );
};

export default SelectConnector;
