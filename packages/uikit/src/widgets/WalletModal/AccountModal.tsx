import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
  scanLink?: string;
  scanLabel?: string;
  tokenBalance?: string
  tokenSymbol?: string
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null,scanLink,scanLabel,tokenBalance,tokenSymbol }) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    { tokenSymbol && tokenBalance && (
      <Text
        fontSize="20px"
        bold
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
      >
        Balance: {tokenBalance} {tokenSymbol}
      </Text>
    )}
    <Text
      fontSize="20px"
      bold
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
    >
      {account}
    </Text>
    <Flex mb="32px">
      <LinkExternal small href={scanLink?`${scanLink}${account}`:`https://bscscan.com/address/${account}`} mr="16px">
        {scanLabel?scanLabel:'View on BscScan'}
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <Button
        scale="sm"
        variant="secondary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(connectorLocalStorageKey);
          onDismiss();
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
