import React from "react";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: null | string;
  login: Login;
  logout: () => void;
  walletSet?: any
  tokenBalance?: string
  tokenSymbol?: string
}

const UserBlock: React.FC<Props> = ({ account, login, logout,walletSet,tokenBalance,tokenSymbol }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, walletSet.helpLink, walletSet.scanLink, walletSet.scanLabel,tokenBalance,tokenSymbol);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
