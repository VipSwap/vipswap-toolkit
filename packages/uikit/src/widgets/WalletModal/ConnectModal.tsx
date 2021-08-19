import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
  helpLink?: string;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;
const StyledBody = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: auto;
  max-width: 300px;
`
const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, helpLink }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    <StyledBody>
      {config.map((entry, index) => (
        <WalletCard
          key={entry.title}
          login={login}
          walletConfig={entry}
          onDismiss={onDismiss}
          mb={index < config.length - 1 ? "8px" : "0"}
        />
      ))}
      <HelpLink
        href={helpLink?helpLink:'https://ethereum.org/wallets/'}
        external
      >
        <HelpIcon color="primary" mr="6px" />
        Learn how to connect
      </HelpLink>
    </StyledBody>
  </Modal>
);

export default ConnectModal;
