import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";


interface Props {
  isPushed: boolean;
  isMobile: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
  auditSvg: any;
  auditUrl: any;
}

const AuditBtn = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 4px;
  
  & img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin-right: 5px;
  }
  
  & span {
    font-size: 16px;
    color: #828282;
  }
  & svg {
    margin-right: 5px;
    fill: #1DC671;
  }
`
const Audit: React.FC<Props> = ({ isMobile,isPushed, togglePush, isDark, href , auditSvg, auditUrl}) => {

  return (
    <AuditBtn>
      <SVG src={auditSvg} width={24} height={24} />
      <a href={auditUrl} target="_blank" rel="noreferrer">
        <span style={{wordBreak: 'break-word'}}>Certik Audit</span>
      </a>
    </AuditBtn>
  );
};

export default React.memo(Audit, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark && prev.isMobile === next.isMobile);
