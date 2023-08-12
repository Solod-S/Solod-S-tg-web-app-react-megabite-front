import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

export const LogoImg = styled.img`
  height: 40px;
`;

export const Footer = styled.footer`
  background-color: ${(p) => p.theme.colors.secondaryBgColor};
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    text-align: center;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    margin: 0 auto;
    font-style: normal;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const FooterWrapper = styled.div`
  /* @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    // display: flex;
  } */
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    display: flex;
  }
`;

export const FlexWrapper = styled.div`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    margin-bottom: 60px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-around;
  }
  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints.tablet}) and (max-width: ${(p) =>
      p.theme.breakpoints.beeforeDesktop}) {
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
  }
`;

export const ContactWrapper = styled.div`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    margin-bottom: 60px;
  }
  /* @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    // margin-right: 165px;
  } */
`;

export const Logo = styled(NavLink)`
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    margin-right: 88px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    font-size: ${(p) => p.theme.fontSizes.xl};
    margin-right: 90px;
  }
  margin-bottom: 20px;
  display: block;
  color: ${(p) => p.theme.colors.primaryBgColor};

  font-family: ${(p) => p.theme.fontFamily.raleway};
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 1.2;
  letter-spacing: 0.03em;
`;

export const Address = styled.address`
  font-style: normal;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 1.7;
  letter-spacing: 0.03em;
  color: ${(p) => p.theme.colors.primaryBgColor};
`;

export const Street = styled.p`
  color: ${(p) => p.theme.colors.primaryBgColor};
  margin-bottom: 8px;
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    margin-bottom: 20px;
  }
`;

export const AdressList = styled.ul``;

export const AdressItem = styled.li`
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    :not(:last-child) {
      margin-bottom: 9px;
    }
  }
`;

export const AdressLink = styled.a`
  :focus {
    color: ${(p) => p.theme.colors.primaryAccentColor};
    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
  :hover {
    color: ${(p) => p.theme.colors.primaryAccentColor};
    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
  color: rgba(255, 255, 255, 0.6);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    display: inline-block;
  }
`;

export const SocialWrapper = styled.div`
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    margin-left: 70px;
  }
`;

export const SociaTitle = styled.p`
  margin-bottom: 20px;
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: calc(16 / 14);
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: ${(p) => p.theme.colors.primaryWhiteColor};
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeDesktop}) {
    text-align: center;
  }
`;

export const SociaList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Subscribe = styled.div`
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    margin-left: 93px;
  }
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeDesktop}) {
    text-align: center;
  }
`;

export const SubscribeForm = styled.form``;

export const SubscribeTitle = styled.label`
  display: block;
  margin-bottom: 20px;
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 16px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.primaryWhiteColor};
`;

export const FormWrapper = styled.div`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeDesktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }
`;

export const EmailInput = styled.input`
  padding: 15px 16px;
  /* height: 50px; */
  background-color: transparent;

  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: calc(20 / 16);
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.6);

  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: ${(p) => p.theme.radii.normal};
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    max-width: 100%;
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints.tablet}) and (max-width: ${(p) =>
      p.theme.breakpoints.beeforeDesktop}) {
    width: 450px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 358px;
  }
`;

export const EmailBtn = styled.button`
  display: inline-block;
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
    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
  :hover {
    color: ${(p) => p.theme.colors.primaryAccentColor};
    background-color: ${(p) => p.theme.colors.primaryWhiteColor};
    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    margin-left: 10px;
  }
`;

export const TelegramPlaneInIcon = styled(FaTelegramPlane)`
  margin-left: 9px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${EmailBtn}:hover & {
    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
`;
