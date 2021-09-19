import React from "react";
import { ArrowDropDownIcon, SvgProps } from "../../../../../components/Svg";
import Text from "../../../../../components/Text/Text";
import Dropdown from "../../../../../components/Dropdown/Dropdown";
import Button from "../../../../../components/Button/Button";
import * as IconModule from "../../../icons";
import { Language } from "../../../types";
import MenuButton from "../../../components/MenuButton";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { LanguageIcon } = Icons;

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
}

const MenuLan: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <Dropdown
    position="top"
    className="MenuLanWidth"
    target={
      <Button style={{width: '100%'}} variant="text" startIcon={<LanguageIcon color="navText" width="24px" />} endIcon={<ArrowDropDownIcon color="navText"/>}>
        <Text color="navText" style={{flex: 2, textAlign: 'left'}}>{currentLang?.toUpperCase()}</Text>
      </Button>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.code}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default MenuLan;
