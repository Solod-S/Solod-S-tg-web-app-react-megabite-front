import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    // flex-basis: calc(100% / 2-30px);
    flex-basis: calc(100% / 2);
    margin-top: -30px;
    margin-left: -30px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    flex-basis: calc(100% / 2);
    // flex-basis: calc(100% / 3-30px);
    margin-top: -30px;
    margin-left: -30px;
  }
`;
