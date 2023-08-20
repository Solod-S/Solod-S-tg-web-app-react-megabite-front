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

export const Main = styled.main`
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (min-width: 1200px) {
    padding-top: 95px;
    padding-bottom: 95px;
  }
`;

export const Section = styled.div`
  margin-bottom: 30px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 45px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    /* flex-direction: column; */
  }
  @media screen and (min-width: 1200px) {
    width: 1170px;
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div`
  /* min-width: 300px; */
  margin-bottom: 20px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const BuyBtn = styled.a`
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  color: white;
  font-size: ${(p) => p.theme.fontSizes.xs};
  background-color: ${(p) => p.theme.colors.primaryAccentColor};
  text-align: center;
  display: block;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${(p) => p.theme.colors.thrdBgColor};
    opacity: 1;
  }
`;

export const TexList = styled.ul`
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 30px;
  }
`;

export const TextItem = styled.ul`
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ShortDscr = styled.p`
  font-style: italic;
  color: "grey";
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxs};
`;

export const DescriptionWrapper = styled.div`
  /* list-style: inside; */
  font-size: 18px;
  /* Стили по умолчанию для всех дочерних элементов */

  @media screen and (min-width: 1200px) {
    margin-left: 30px;
  }
  & > * {
    margin-bottom: 10px;
  }

  /* Отменить отступ у последнего дочернего элемента */
  & > *:last-child {
    margin-bottom: 0;
  }
`;
