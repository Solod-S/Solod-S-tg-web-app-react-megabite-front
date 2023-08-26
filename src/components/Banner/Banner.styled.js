import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  :after {
    position: absolute;
    z-index: ${({ isOpen }) => {
      if (!isOpen) {
        return 2;
      }
      return 0;
    }};

    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgba(47, 48, 58, 0.4);
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    max-width: ${(p) => p.theme.breakpoints.tablet};
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    max-width: 1600px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  z-index: ${({ isOpen }) => {
    if (!isOpen) {
      return 3;
    }
    return 0;
  }};
  top: 17%;
  left: 50%;
  transform: translatex(-50%);

  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeight.superBolt};

  line-height: 1.4;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.primaryWhiteColor};
  @media screen and (min-width: ${(p) => p.theme.breakpoints.beeforeTell}) {
    font-size: ${(p) => p.theme.fontSizes.xxs};
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    font-size: ${(p) => p.theme.fontSizes.xxxl};
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    font-size: ${(p) => p.theme.fontSizes.xxxxxl};
  }
`;

export const Video = styled.video`
  display: block;
  width: 100%;
  z-index: ${({ isOpen }) => {
    if (!isOpen) {
      return 1;
    }
    return 0;
  }};
`;

export const Button = styled.a`
  position: absolute;
  z-index: ${({ isOpen }) => {
    if (!isOpen) {
      return 3;
    }
    return 0;
  }};
  bottom: 14%;
  left: 50%;
  transform: translatex(-50%);
  padding: 10px 0;

  color: ${(p) => p.theme.colors.primaryWhiteColor};
  background-color: ${(p) => p.theme.colors.primaryAccentColor};
  cursor: pointer;
  border: none;
  border-radius: ${(p) => p.theme.radii.normal};

  font-weight: ${(p) => p.theme.fontWeight.bolt};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: calc(30 / 16);
  letter-spacing: 0.06em;
  font-family: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    color: ${(p) => p.theme.colors.primaryAccentColor};
    background-color: ${(p) => p.theme.colors.primaryWhiteColor};
  }
  :hover {
    color: ${(p) => p.theme.colors.primaryAccentColor};
    background-color: ${(p) => p.theme.colors.primaryWhiteColor};
  }

  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
