import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.primaryBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 25px;
  padding-bottom: 25px; */
  margin-bottom: 30px;
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    /* height: 120px; */
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: initial;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.1;
  letter-spacing: 0.03em;

  text-transform: uppercase;
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.7;
  letter-spacing: 0.03em;
`;
