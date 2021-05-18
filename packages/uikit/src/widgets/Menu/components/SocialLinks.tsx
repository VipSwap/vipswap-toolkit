import React, { useContext } from "react";
import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import { Socials } from "../types";
import SVG from "react-inlinesvg";
import { ThemeContext } from "styled-components";

interface Props {
  socials: Array<Socials>
}
const SocialLinks: React.FC<Props> = ({
  socials,
})  => {
  const theme = useContext(ThemeContext)
  return (
    <Flex>
      {socials.map((social, index) => {
        const mr = index < socials.length - 1 ? "24px" : 0;
        if (social.items) {
          return (
            <Dropdown key={social.label} position="top" target={<SVG src={social.icon} width={24} height={24} style={{marginRight: mr,cursor: "pointer",fill:theme.colors.navText}} />}>
              {social.items.map((item) => (
                <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                  {item.label}
                </Link>
              ))}
            </Dropdown>
          );
        }
        return (
          <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
            <SVG src={social.icon} width={24} height={24} style={{marginRight: mr,cursor: "pointer",fill:theme.colors.navText}} />
          </Link>
        );
      })}
    </Flex>
  )
};

export default SocialLinks;
