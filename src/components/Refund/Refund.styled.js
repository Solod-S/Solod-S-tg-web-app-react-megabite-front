import styled from "styled-components";

export const MainTitle = styled.h2`
  color: ${(p) => p.theme.colors.primaryTitleColor};
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 20px;
  font-size: ${(p) => p.theme.fontSizes.xxl};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.beeforeDesktop}) {
    font-size: ${(p) => p.theme.fontSizes.xxxl};
  }
`;

export const DescriptionWrapper = styled.div`
  /* list-style: inside; */
  font-size: 18px;
  /* Стили по умолчанию для всех дочерних элементов */

  & > * {
    margin-bottom: 10px;
  }

  /* Отменить отступ у последнего дочернего элемента */
  /* & > *:last-child {
    margin-bottom: 0;
  } */
`;
