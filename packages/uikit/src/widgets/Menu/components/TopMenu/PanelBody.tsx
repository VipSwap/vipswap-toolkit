import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../../components/Svg";
import * as IconModule from "../../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, LinkStatus, LinkLabelStatus } from "../MenuEntry";
import MenuLink from "../MenuLink";
import { PanelProps, PushedProps } from "../../types";
import SVG from "react-inlinesvg";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { MoreHoriz } from "@material-ui/icons";


interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  height: 100%;
`;
const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  const moreBtn = (
    <MenuEntry key={'moreBtn'} isActive={false} >
      <MenuLink href={'javascript:void(0)'}>
        <LinkLabelStatus isPushed={isPushed} isActive={false}>
          <MoreHoriz />
        </LinkLabelStatus>
      </MenuLink>
    </MenuEntry>
  )

  return (
    <Container>
      {links.map((entry,index) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if(index>= 5) return null
        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
          const dropdownMenu = (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === location.pathname)}
              iconLink={entry.iconLink}
              iconSize={entry.iconSize}
            >
            </Accordion>
          )
          return (
            <Dropdown position="bottom"  className={`menu-st-${index}`} target={dropdownMenu}>
              {entry.items.map((item) => (
                <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                  <MenuLink href={item.href}>
                    <LinkLabelStatus isPushed={isPushed} isActive={item.href === location.pathname} >{item.label}</LinkLabelStatus>
                    {item.status && (
                      <LinkStatus color={item.status.color} fontSize="14px">
                        {item.status.text}
                      </LinkStatus>
                    )}
                  </MenuLink>
                </MenuEntry>
              ))}
            </Dropdown>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              <LinkLabelStatus isPushed={isPushed} isActive={entry.href === location.pathname}>{entry.label}</LinkLabelStatus>
              {entry.status && (
                <LinkStatus color={entry.status.color} fontSize="14px">
                  {entry.status.text}
                </LinkStatus>
              )}
            </MenuLink>
          </MenuEntry>
        );
      })}

      {/* 菜单超出5个 超出部分进行合并 显示更多菜单 */}
      { links.length > 5 && (
        <Dropdown position="bottom" className={`menu-st-more`} canScroll={false} target={moreBtn}>
          {links.map((entry,index) => {
            const Icon = Icons[entry.icon];
            const iconElement = <Icon width="24px" mr="8px" />;
            const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
            if(index < 5) return null
            if (entry.items) {
              const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
              const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
              const dropdownMenu = (
                <Accordion
                  key={entry.label}
                  isPushed={isPushed}
                  pushNav={pushNav}
                  icon={iconElement}
                  label={entry.label}
                  initialOpenState={initialOpenState}
                  className={calloutClass}
                  isActive={entry.items.some((item) => item.href === location.pathname)}
                  iconLink={entry.iconLink}
                  iconSize={entry.iconSize}
                  dropdownBottom={false}
                >
                </Accordion>
              )
              return (
                <Dropdown position="right" className={`menu-nd-${index}`}  target={dropdownMenu}>
                  {entry.items.map((item) => (
                    <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                      <MenuLink href={item.href}>
                        <LinkLabelStatus isPushed={isPushed} isActive={item.href === location.pathname} >{item.label}</LinkLabelStatus>
                        {item.status && (
                          <LinkStatus color={item.status.color} fontSize="14px">
                            {item.status.text}
                          </LinkStatus>
                        )}
                      </MenuLink>
                    </MenuEntry>
                  ))}
                </Dropdown>
              );
            }
            return (
              <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
                <MenuLink href={entry.href} onClick={handleClick}>
                  <LinkLabelStatus isPushed={isPushed} isActive={entry.href === location.pathname}>{entry.label}</LinkLabelStatus>
                  {entry.status && (
                    <LinkStatus color={entry.status.color} fontSize="14px">
                      {entry.status.text}
                    </LinkStatus>
                  )}
                </MenuLink>
              </MenuEntry>
            );
          })}
        </Dropdown>
      )}

    </Container>
  );
};

export default PanelBody;
