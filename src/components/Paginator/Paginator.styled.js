import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 275px;
  width: fit-content;
  box-sizing: border-box;
  height: 51px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 12px 26px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  & nav {
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    max-width: 324px;
    height: 55px;
    padding: 14px 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 436px;
    padding: 14px 24px;
  }

  & .MuiPagination-ul {
    margin-top: 0;
    display: flex;
    max-width: 100%;
    flex-wrap: nowrap;
    gap: 0px;
  }

  & .MuiPaginationItem-page {
    padding: 0;
    min-width: 27px;
  }

  & .MuiPaginationItem-icon {
  }

  & .MuiPaginationItem-ellipsis {
  }

  & .MuiPaginationItem-page.Mui-selected {
    width: 27px;
    height: 27px;

    &:hover,
    &:focus {
    }
  }
`;
