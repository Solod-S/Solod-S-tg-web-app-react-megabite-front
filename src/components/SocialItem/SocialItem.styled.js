import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const SociaItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    :not(:last-child) {
      margin-right: 8px;
    }
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    :not(:last-child) {
      margin-right: 9px;
    }
  }
`;

export const SociaLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus {
    background-color: ${(p) => p.theme.colors.primaryAccentColor};
  }
  :hover {
    background-color: ${(p) => p.theme.colors.primaryAccentColor};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: ${(p) => p.theme.radii.round};

  padding: 0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FacebookIcon = styled(FaFacebookF)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SociaLink}:hover & {
    fill: ${(p) => p.theme.colors.primaryWhiteColor};
  }
`;
export const TwitterIcon = styled(FaTwitter)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SociaLink}:hover & {
    fill: ${(p) => p.theme.colors.primaryWhiteColor};
  }
`;
export const InstagramIcon = styled(FaInstagram)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SociaLink}:hover & {
    fill: ${(p) => p.theme.colors.primaryWhiteColor};
  }
`;
export const YoutubeIcon = styled(FaYoutube)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SociaLink}:hover & {
    fill: ${(p) => p.theme.colors.primaryWhiteColor};
  }
`;
