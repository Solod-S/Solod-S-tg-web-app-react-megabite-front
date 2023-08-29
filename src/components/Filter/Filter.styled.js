import styled from "styled-components";

export const BtnSet = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-basis: calc(100% / 3 - 16px);
  margin-right: -8px;
  margin-top: -8px;
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    justify-content: flex-start;
  }
  justify-content: center;
  margin-bottom: 50px;
`;

// export const BtnSet = styled.ul`
//   display: flex;
//   @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
//     flex-wrap: wrap;
//     justify-content: flex-start;
//     flex-basis: calc(100% / 3 - 16px);
//     margin-right: -8px;
//     margin-top: -8px;
//   }
//   justify-content: center;
//   margin-bottom: 50px;
// `;
