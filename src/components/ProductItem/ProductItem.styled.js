import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 30px;
  @media screen and (min-width: 1600px) {
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
  @media screen and (min-width: 1600px) {
    width: 1170px;
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div`
  /* min-width: 300px; */
  margin-bottom: 20px;
  @media screen and (min-width: 1600px) {
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

export const DescriptionWrapper = styled.div`
  /* list-style: inside; */
  font-size: 18px;
  /* Стили по умолчанию для всех дочерних элементов */

  @media screen and (min-width: 1600px) {
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
