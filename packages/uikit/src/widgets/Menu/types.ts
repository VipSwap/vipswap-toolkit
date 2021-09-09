import { Colors } from "../../theme/types";
import { ConnectorNames, Login } from "../WalletModal/types";

export interface Language {
  code: string;
  language: string;
  locale: string;
}

export interface LangType {
  code: string;
  language: string;
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}

export interface NavTheme {
  background: string;
  hover: string;
  footerBg?: string;
  logoBg?: string;
  mBg?: string;
}

export interface LinkStatus {
  text: string;
  color: keyof Colors;
  bgColor?: string;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  hash?: string;
  calloutClass?: string;
  status?: LinkStatus;
  labelStringId?: string;
}

export interface MenuEntry {
  label: string;
  icon: string;
  items?: MenuSubEntry[];
  href?: string;
  hash?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
  status?: LinkStatus;
  iconLink: string;
  iconSize?: number;
  labelStringId?: string;
}

export interface SocialsItem {
  label: string,
  href: string,
}
export interface Socials {
  label: string,
  icon: string,
  items?: Array<SocialsItem>,
  href?: string,
}
export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  tokenPriceUsd?: number;
  tokenBalance?: string;
  tokenSymbol?: string;
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  links: Array<MenuEntry>;
  webAsset: any;
  socials: Array<Socials>;
}
export interface ConnectorList {
  chainName: string;
  url: string
}
export interface ConnectorSet {
  connectorList: Array<ConnectorList>;
  chainId: number;
  networkLabels: { [index:number]: string }
}
export interface NavProps extends PanelProps,ContactList {
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
  walletSet?: any;
  connectorSet?: ConnectorSet;
}
export interface ContactItem {
  iconLink: string;
  iconSize?: number;
  href: string;
  isTooltip: boolean;
  isPhoto:boolean;
  tooltipContent: string;
}
export interface ContactList {
  contactList: Array<ContactItem>;
  contactFlex: 'row' | 'column';
}
