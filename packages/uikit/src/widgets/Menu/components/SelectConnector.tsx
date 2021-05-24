import React from "react";
import Button from "../../../components/Button/Button";
import { ConnectorNames, useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import Dropdown from "../../../components/Dropdown/Dropdown";

export interface ConnectorList {
  login: Login;
  helpLink: string;
  scanLink:string;
  scanLabel: string;
  chainName: string;
  connectorId: ConnectorNames;
}
interface Props {
  list: Array<ConnectorList>
  logout: () => void;
  chainId: number;
  networkLabels: { [index:number]: string }
}
const SelectConnector: React.FC<Props> = ({ list,logout, chainId, networkLabels }) => {
  return (
    <div>
      <Dropdown target={<Button>{networkLabels[chainId]}</Button>}>
        {list.map((item, index) => {
          const { onPresentConnectModal } = useWalletModal(item.login, logout, null, item.helpLink, item.scanLink, item.scanLabel);
          return (
            <div
              onClick={() => {
                item.login(item.connectorId)
              }}
              key={index}
            >
              {item.chainName.toUpperCase()}
            </div>
          );
        })}
      </Dropdown>
    </div>
  );
};

export default SelectConnector;
