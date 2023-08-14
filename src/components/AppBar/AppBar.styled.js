import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GiSmartphone } from "react-icons/gi";
import { BiLogoTelegram } from "react-icons/bi";
// import { IoMailOutline } from 'react-icons/io5';
import { AiOutlineMail } from "react-icons/ai";

export const LogoImg = styled.img`
  height: 40px;
`;

export const Header = styled.header`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding-top: 21px;
    padding-bottom: 21px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    padding-top: 25px;
    padding-bottom: 25px;
  }
  border-bottom: 1px solid #ececec;
`;

export const Navigation = styled.div`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  display: flex;
  align-items: center;
`;

export const Logo = styled(NavLink)`
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    font-size: ${(p) => p.theme.fontSizes.xl};
    margin-right: 90px;
  }
  color: ${(p) => p.theme.colors.primaryBlackColor};

  font-family: ${(p) => p.theme.fontFamily.raleway};
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 1.2;
  letter-spacing: 0.03em;
`;

export const MenuWrapper = styled.div`
  /* @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTell}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    transform: translateX(-120%);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${(p) => p.theme.colors.primaryWhiteColor};
    background-color: ${(p) => p.theme.colors.primaryWhiteColor};
  } */
  /* @media screen and (min-width: ${(p) =>
    p.theme.breakpoints.tell}) and (max-width: ${(p) =>
    p.theme.breakpoints.beeforeTablet}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    padding: 48px 40px;
    transform: translateX(-100%);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${(p) => p.theme.colors.primaryWhiteColor};
    background-color: ${(p) => p.theme.colors.primaryWhiteColor};
  } */
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    width: 100%;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    display: contents;
  }
  overflow-y: auto;
  transition: transform 250ms linear;
`;

export const Menu = styled.nav`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    margin-bottom: auto;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    padding: 0;
  }
`;

export const MenuList = styled.ul`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    flex-direction: column;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }
  display: flex;
`;

export const MenuItem = styled.li`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    :not(:last-child) {
      margin-bottom: 32px;
    }
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    position: relative;
    :not(:last-child) {
      margin-right: 50px;
    }
  }
`;

export const MenuLink = styled(NavLink)`
  :focus {
    color: ${(p) => p.theme.colors.primaryAccentColor};
    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
  :hover {
    color: ${(p) => p.theme.colors.primaryAccentColor};

    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
  &.active {
    color: ${(p) => p.theme.colors.primaryAccentColor};

    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.1;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.colors.primaryTitleColor};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTell}) {
    font-size: ${(p) => p.theme.fontSizes.xxxxl};
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    font-size: ${(p) => p.theme.fontSizes.xxs};
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    font-size: ${(p) => p.theme.fontSizes.xxs};
    padding: 30px 0;
  }
`;

export const ContactList = styled.ul`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    margin-left: auto;
    flex-direction: column;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    margin-left: auto;
    flex-direction: row;
    align-items: center;
  }
  display: flex;
`;

export const ContactItem = styled.li`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    :not(:first-child) {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints.tablet}) and (max-width: ${(p) =>
      p.theme.breakpoints.beeforeDesktop}) {
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    position: relative;
    :not(:last-child) {
      margin-right: 50px;
    }
  }
`;

export const ContactLink = styled.a`
  align-items: center;
  display: flex;
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.colors.primaryTitleColor};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus {
    color: ${(p) => p.theme.colors.primaryAccentColor};
    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
  :hover {
    color: ${(p) => p.theme.colors.primaryAccentColor};
    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
  :not(:last-child) {
    margin-bottom: 5px;
  }
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    font-size: ${(p) => p.theme.fontSizes.xs};
    color: ${(p) => p.theme.colors.labelColor};
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    font-size: ${(p) => p.theme.fontSizes.xxs};
    color: ${(p) => p.theme.colors.primaryTextColor};
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    font-size: ${(p) => p.theme.fontSizes.xxs};
    color: ${(p) => p.theme.colors.primaryTextColor};
    /* padding: 30px 0; */
  }
`;

export const SocialMobileItem = styled.li`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTell}) {
    :not(:last-child) {
      margin-right: 3px;
    }
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.beeforeTell}) {
    :not(:last-child) {
      margin-right: 10px;
    }
  }
  :not(:last-child)::after {
    border: 1px solid rgba(33, 33, 33, 0.2);
    transform: rotate(90deg);
    content: "";
    @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTell}) {
      margin-left: 5px;
    }
    @media screen and (min-width: ${(p) => p.theme.breakpoints.tell}) {
      margin-left: 9px;
    }
  }
`;

// export const SocialMobileLink = styled.a`
//   font-weight: ${p => p.theme.fontWeight.normal};
//   font-size: ${p => p.theme.fontSizes.xs};
//   line-height: 22px;
//   letter-spacing: 0.02em;
//   color: ${p => p.theme.colors.primaryAccentColor};
// `;

export const SmartPhoneIcon = styled(GiSmartphone)`
  margin-right: 8px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${ContactLink}:hover & {
    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
`;

export const MailInIcon = styled(AiOutlineMail)`
  margin-right: 8px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${ContactLink}:hover & {
    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
`;

export const TelegramInIcon = styled(BiLogoTelegram)`
  margin-right: 8px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${ContactLink}:hover & {
    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
`;

export const MobileMenu = styled.nav``;
