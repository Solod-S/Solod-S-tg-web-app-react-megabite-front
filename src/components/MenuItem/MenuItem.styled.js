import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;
export const Poster = styled.img`
  display: block;
  width: 100%;
  height: 294px;
`;
export const Overflow = styled.div``;

export const PosterOverFlow = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(101%);
  padding: 63px 24px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-size: ${(p) => p.theme.fontSizes.l};
  text-align: center;
  line-height: calc(28 / 18);
  letter-spacing: 0.03em;
  color: ${(p) => p.theme.colors.primaryWhiteColor};
  background: rgba(33, 150, 243, 0.9);
  opacity: 1;
`;

export const TextWraper = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 24px;
  border-left: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    height: 160px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 4px;
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 2;
  letter-spacing: 0.06em;
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.primaryTextColor};
  line-height: 30px;
  letter-spacing: 0.03em;
`;

export const Item = styled.li`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    width: 100%;
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    width: 354px;
    margin-left: 30px;
    margin-top: 30px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 370px;
    margin-left: 30px;
    margin-top: 30px;
  }
`;

export const Link = styled(NavLink)`
  :hover {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    min-width: none;
  }
  :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    min-width: none;
  }

  display: block;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover ${PosterOverFlow} {
    transform: translateY(0%);
  }

  /* &__link:hover .graphic-content__img-overflow,
  &__link:focus .graphic-content__img-overflow {
    transform: translateY(0%);
  
} */
`;
