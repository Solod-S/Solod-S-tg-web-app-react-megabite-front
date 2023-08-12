import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  width: 118px;
  color: ${(p) => p.theme.colors.primaryAccentColor};
  margin-bottom: 20px;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  ::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${(p) => p.theme.colors.primaryAccentColor};
    position: absolute;
    bottom: 0;
    opacity: 0;
    transition-property: opacity;
    /* @include transitioned; */
  }
  &:hover::after {
    opacity: 1;
  }
`;

export const PortfolioSection = styled.section``;
export const Wrapper = styled.div``;
