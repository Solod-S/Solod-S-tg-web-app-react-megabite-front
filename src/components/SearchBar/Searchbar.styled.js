import styled from "styled-components";
export const SearchBarPixabayLogo = styled.img`
  max-width: 200px;
`;

export const SearchBarForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
export const SearchBarInput = styled.input`
  height: 36px;

  width: 100%;
  border: none;
  outline: none;
  background-color: #f5f4fa;
  border-top-left-radius: ${(p) => p.theme.space[1]}px;
  border-bottom-left-radius: ${(p) => p.theme.radii.normal};
  padding: ${(p) => p.theme.radii.normal};
  padding-left: ${(p) => p.theme.space[4]}px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.beeforeTell}) {
    width: 80%;
  }
`;
export const SearchBarButton = styled.button`
  height: 36px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: ${(p) => p.theme.space[4]}px;

  background-color: #f5f4fa;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;
