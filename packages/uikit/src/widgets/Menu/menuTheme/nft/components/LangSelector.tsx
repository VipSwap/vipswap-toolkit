import React from "react";
import { SvgProps } from "../../../../../components/Svg";
import Text from "../../../../../components/Text/Text";
import Dropdown from "../../../../../components/Dropdown/Dropdown";
import Button from "../../../../../components/Button/Button";
import * as IconModule from "../../../icons";
import { Language } from "../../../types";
import MenuButton from "../../../components/MenuButton";
import { scales } from "../../../../../components/Button/types";
import styled from "styled-components";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { LanguageIcon } = Icons;

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  isMobile?: boolean;
}

const LangMenuButton = styled(MenuButton)`
  background-color: ${({ theme }) => theme.colors.navItemBg};
  border-radius: 0px;
`

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang, isMobile=false }) => (
  <Dropdown
    position={isMobile?"top":"bottom"}
    target={
      <Button scale={scales.XS} variant="text" startIcon={<LanguageIcon color="navActivityText" width="24px" />}>
        {/*<Text color="navText">{currentLang?.toUpperCase()}</Text>*/}
      </Button>
    }
  >
    {langs.map((lang) => (
      <LangMenuButton
        key={`${lang.code}T`}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </LangMenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang && prev.isMobile === next.isMobile);
