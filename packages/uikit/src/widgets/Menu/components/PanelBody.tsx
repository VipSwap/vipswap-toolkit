import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SVG from "react-inlinesvg";
import { SvgProps } from "../../../components/Svg";
import { PanelProps, PushedProps } from "../types";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, LinkStatus, LinkLabelStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        const currentPath = location.hash?`${location.pathname}${location.hash}`:location.pathname

        if (entry.items) {
          // const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === currentPath);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === currentPath)}
              iconLink={entry.iconLink}
              iconSize={entry.iconSize}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={item.href === currentPath} onClick={handleClick}>
                    <MenuLink href={item.href}>
                      <LinkLabelStatus isPushed={isPushed} isActive={item.href === currentPath} >{item.label}</LinkLabelStatus>
                      {item.status && (
                        <LinkStatus color={item.status.color} fontSize="14px">
                          {item.status.text}
                        </LinkStatus>
                      )}
                    </MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === currentPath} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {/*{iconElement}*/}
              {entry.iconLink?(
                <SVG src={entry.iconLink} width={entry.iconSize} style={{marginRight: '8px', flexShrink: 0}} />
              ):null}
              <LinkLabelStatus isPushed={isPushed} isActive={entry.href === currentPath}>{entry.label}</LinkLabelStatus>
              {entry.status && (
                <LinkStatus color={entry.status.color} fontSize="14px">
                  {entry.status.text}
                </LinkStatus>
              )}
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
