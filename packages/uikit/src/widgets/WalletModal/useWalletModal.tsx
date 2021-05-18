import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: null | string, helpLink?: string, scanLink?:string, scanLabel?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} helpLink={helpLink}/>);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} scanLink={scanLink} scanLabel={scanLabel}/>);
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
