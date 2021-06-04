import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../../components/Svg";
import * as IconModule from "../../icons";
import AccordionT from "./AccordionT";
import { MenuEntry, LinkStatus, LinkLabelStatus } from "../MenuEntry";
import MenuLink from "../MenuLink";
import { PanelProps, PushedProps } from "../../types";
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

const PanelBodyT: React.FC<Props> = ({ isPushed, pushNav, isMobile, links}) => {
  const location = useLocation();

  const componentDidMount = (hash?:string)=>{
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    const scrollToAnchor = () => {
      if(hash){
        const hashParts = hash.split('#');
        if (hashParts.length >= 2) {
          const id = hashParts.slice(-1)[0];
          const anchorElement = document.getElementById(id);
          if(anchorElement) { anchorElement.scrollIntoView(); }
          // document.querySelector(`#${hash}`).scrollIntoView();
        }
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
    if(isMobile){
      pushNav(false)
    }
  }
  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => {
    pushNav(false)
    componentDidMount()
  } : ()=>componentDidMount();


  const moreBtn = (
    <MenuEntry key={'moreBtn'} isActive={false} >
      <MenuLink href="#" onClick={()=>{return false}}>
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
        if(index>= 5) return null;
        const currentPath = location.hash?`${location.pathname}${location.hash}`:location.pathname

        if (entry.items) {
          // const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === currentPath);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
          const dropdownMenu = (
            <AccordionT
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              // isActive={entry.items.some((item) => item.href === location.pathname)}
              isActive={entry.items.some((item) => item.href === currentPath)}
              iconLink={entry.iconLink}
              iconSize={entry.iconSize}
            />
          )
          return (
            <Dropdown position="bottom"  className={`menu-st-${index}`} target={dropdownMenu}>
              {entry.items.map((item) => (
                <MenuEntry key={item.href} secondary isActive={item.href === currentPath} onClick={()=>componentDidMount(item.hash)}>
                  <MenuLink href={item.href} {...{hash: item.hash}}>
                    <LinkLabelStatus isPushed={isPushed} isActive={item.href === currentPath} >{item.label}</LinkLabelStatus>
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
          <MenuEntry key={entry.label} isActive={entry.href === currentPath} className={calloutClass}>
            <MenuLink href={entry.href} {...{hash: entry.hash}} onClick={()=>componentDidMount(entry.hash)}>
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

      {/* 菜单超出5个 超出部分进行合并 显示更多菜单 */}
      { links.length > 5 && (
        <Dropdown position="bottom" className={`menu-st-more`} canScroll={false} target={moreBtn}>
          {links.map((entry,index) => {
            const Icon = Icons[entry.icon];
            const iconElement = <Icon width="24px" mr="8px" />;
            const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
            const currentPath = location.hash?`${location.pathname}${location.hash}`:location.pathname

            if(index < 5) return null;
            if (entry.items) {
              const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
              const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
              const dropdownMenu = (
                <AccordionT
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
                  dropdownBottom={false}
                />
              )
              return (
                <Dropdown position="right" className={`menu-nd-${index}`}  target={dropdownMenu}>
                  {entry.items.map((item) => (
                    <MenuEntry key={item.href} secondary isActive={item.href === currentPath} onClick={()=>componentDidMount(item.hash)}>
                      <MenuLink {...{hash: item.hash}} href={item.href}>
                        <LinkLabelStatus isPushed={isPushed} isActive={item.href === currentPath} >{item.label}</LinkLabelStatus>
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
              <MenuEntry key={entry.label} isActive={entry.href === currentPath} className={calloutClass}>
                <MenuLink href={entry.href} {...{hash: entry.hash}} onClick={()=>componentDidMount(entry.hash)}>
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
        </Dropdown>
      )}

    </Container>
  );
};

export default PanelBodyT;
