import { LinkStatus } from "./types";
import tradeIcon from "./icons/1.svg";
import TelegramIcon from "./icons/1.svg";
import TwitterIcon from "./icons/1.svg";
// @ts-ignore
import QRTest from './icons/qr-test.png';

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "white",
    bgColor: "linear-gradient(140deg, #11EBFE 0%, #754BF9 70%)",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
    iconLink: tradeIcon,
    iconSize: 24,
  },
  {
    label: "Home#about",
    icon: "HomeIcon",
    href: "/#about",
    hash: "#about",
    iconLink: tradeIcon,
    iconSize: 24,
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "/exchange",
      },
      {
        label: "Liquidity",
        href: "/liquidity",
      },
    ],
    iconLink: tradeIcon,
    iconSize: 24,
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
    iconLink: tradeIcon,
    iconSize: 24,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
    iconLink: tradeIcon,
    iconSize: 24,
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
    iconLink: tradeIcon,
    iconSize: 24,
  },
  // {
  //   label: "NFT",
  //   icon: "NftIcon",
  //   href: "/nft",
  // },
  // {
  //   label: "Team Battle",
  //   icon: "TeamBattleIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "Profile & Teams",
  //   icon: "GroupsIcon",
  //   items: [
  //     {
  //       label: "Leaderboard",
  //       href: "/teams",
  //       status: status.NEW,
  //     },
  //     {
  //       label: "YourProfile",
  //       href: "/",
  //     },
  //   ],
  // },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "/info",
      },
      {
        label: "Tokens",
        href: "/tokens",
      },
      {
        label: "Pairs",
        href: "/pairs",
      },
      {
        label: "Accounts",
        href: "/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "More",
    items: [
      {
        label: "Voting",
        href: "/voting",
      },
      {
        label: "Github",
        href: "/github",
      },
      {
        label: "Docs",
        href: "/docs",
      },
      {
        label: "Blog",
        href: "blog",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "/lg/en",
      },
      {
        label: "中文",
        href: "/lg/zh",
      },
      {
        label: "日本語",
        href: "/lg/jp",
      },
    ],
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "/twitter",
  },
];

export const webAsset = {
  Images : {
    webIconLight: 'https://bpool.vipswap.org/tokenIcon/VIP.png',
    webIconDark: 'https://bpool.vipswap.org/tokenIcon/VIP.png'
  },
  webIcon: {
    width: 24,
    height: 24,
    light: 'https://gamefi.ai/static/media/logo-name-1.7d800e2e.png',
    dark: 'https://gamefi.ai/static/media/logo-name-1.7d800e2e.png',
  },
  tokenAsset: {
    tokenIcon: tradeIcon,
    priceLink: "https://pancakeswap.info/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
  }
};

export const walletSet = {
  scanLabel: 'View On BscScan',
  scanLink: 'https://bscscan.com/address/',
  helpLink: 'https://ethereum.org/wallets/'
}
export const contactList = [
  {
    href: "https://www.baidu.com",
    iconLink: tradeIcon,
    iconSize: 24,
    isTooltip: true,
    tooltipContent: QRTest,
    isPhoto: true,
  },
  {
    href: "https://www.baidu.com",
    iconLink: tradeIcon,
    iconSize: 24,
    isTooltip: true,
    tooltipContent: "12312312",
    isPhoto: false,
  },
  {
    href: "https://www.baidu.com",
    iconLink: tradeIcon,
    iconSize: 24,
    isTooltip: false,
    tooltipContent: "",
    isPhoto: false,
  },
  {
    href: "https://www.baidu.com",
    iconLink: tradeIcon,
    iconSize: 24,
    isTooltip: false,
    tooltipContent: "",
    isPhoto: false,

  },
  {
    href: "https://www.baidu.com",
    iconLink: tradeIcon,
    iconSize: 24,
    isTooltip: false,
    tooltipContent: "",
    isPhoto: false,

  },
]
export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const MENU_ENTRY_HEIGHT_2 = 36;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
