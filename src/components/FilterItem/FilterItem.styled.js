import styled from 'styled-components';

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 8px;
  }
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTablet}) {
    margin-right: 8px;
    margin-top: 8px;
  }
`;

export const Button = styled.button`
  :hover {
    background-color: ${p => p.theme.colors.primaryAccentColor};
    color: ${p => p.theme.colors.primaryWhiteColor};
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
  :focus {
    background-color: ${p => p.theme.colors.primaryAccentColor};
    color: ${p => p.theme.colors.primaryWhiteColor};
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }

  padding: 6px 22px;

  font-weight: ${p => p.theme.fontWeight.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.6;
  letter-spacing: 0.03em;
  font-family: inherit;
  background-color: ${p => p.theme.colors.primaryBgColor};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    outline: none;
  }
`;
