import React from "react";
import Button from "../Button/Button";
import Flex from "../Box/Flex";
import Dropdown from "./Dropdown";
import styled from "styled-components";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {},
};

const DropdownItem = styled.div`
  padding: 10px 15px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f24a65;
  }
`

const ExpandMoreSVG = styled(ExpandMore)`
  margin-left: 6px;
`
const ExpandLessSVG = styled(ExpandLess)`
  margin-left: 6px;
`
const DropdownBtn = styled(Button)`
  &:hover ${ExpandMoreSVG} {
    display: none;
  }
  &:hover ${ExpandLessSVG} {
    display: inline-block;
  }
  & ${ExpandLessSVG} {
    display: none;
  }
`
export const Default: React.FC = () => {
  return (
    <Flex>
      <Dropdown target={<DropdownBtn scale="sm" borderRadius="4px">Hover<ExpandMoreSVG/><ExpandLessSVG/></DropdownBtn>}>
        {[...Array(30)].map(() => (
          <DropdownItem>Content</DropdownItem>
        ))}
      </Dropdown>
      <div style={{width: '20px',height: '20px'}}></div>
      <Dropdown position="bottom" target={<DropdownBtn scale="sm" borderRadius="4px">Bottom<ExpandMoreSVG/><ExpandLessSVG/></DropdownBtn>}>
        {[...Array(30)].map(() => (
          <DropdownItem>Content</DropdownItem>
        ))}
      </Dropdown>
      <div style={{width: '20px',height: '20px'}}></div>
      <Dropdown position="left" target={<DropdownBtn scale="sm" borderRadius="4px">left<ExpandMoreSVG/><ExpandLessSVG/></DropdownBtn>}>
        {[...Array(30)].map(() => (
          <DropdownItem>Content</DropdownItem>
        ))}
      </Dropdown>
      <div style={{width: '20px',height: '20px'}}></div>
      <Dropdown position="right" target={<DropdownBtn scale="sm" borderRadius="4px">right<ExpandMoreSVG/><ExpandLessSVG/></DropdownBtn>}>
        {[...Array(30)].map(() => (
          <DropdownItem>Content</DropdownItem>
        ))}
      </Dropdown>
      <div style={{width: '20px',height: '20px'}}></div>
      <Dropdown position="right" canScroll={false} target={<DropdownBtn scale="sm" borderRadius="4px">1级菜单<ExpandMoreSVG/><ExpandLessSVG/></DropdownBtn>}>
        {[...Array(5)].map(() => (
          <DropdownItem>Content22</DropdownItem>
        ))}
        <Dropdown position="right" className={'menu-nd'} target={<DropdownBtn scale="sm" borderRadius="4px">3级菜单<ExpandMoreSVG/><ExpandLessSVG/></DropdownBtn>}>
          {[...Array(5)].map(() => (
            <DropdownItem>Content33</DropdownItem>
          ))}
        </Dropdown>
      </Dropdown>
    </Flex>
  );
};

export const Top: React.FC = () => {
  return (
    <Flex justifyContent="space-between" style={{ marginTop: "400px" }}>
      <Dropdown position="top-right" target={<Button>Top right</Button>}>
        {[...Array(20)].map(() => (
          <div>Content</div>
        ))}
      </Dropdown>
      <Dropdown position="top" target={<Button>Top</Button>}>
        {[...Array(20)].map(() => (
          <div>Content</div>
        ))}
      </Dropdown>
    </Flex>
  );
};
