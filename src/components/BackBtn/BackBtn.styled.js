import styled from "styled-components";
import { TiArrowBack } from "react-icons/ti";

import { NavLink } from "react-router-dom";

export const BackIcon = styled(TiArrowBack)`
  transition: fill 250ms linear;
  margin-right: 5px;
  color: ${(p) => p.theme.colors.primaryAccentColor};
`;

export const Link = styled(NavLink)`
  color: ${(p) => p.theme.colors.primaryAccentColor};
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: 800;
  margin-bottom: 20px;
  display: inline-flex;
  text-decoration: none;
  align-items: center;
  position: relative;
  ::after {
    content: "";
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
