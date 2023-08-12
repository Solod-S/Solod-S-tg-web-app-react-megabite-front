import styled from 'styled-components';

export const LocationSection = styled.section`
  background-color: ${p => p.theme.colors.primaryBgColor};
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div``;

export const Title = styled.h2`
  color: ${p => p.theme.colors.primaryTitleColor};
  font-weight: ${p => p.theme.fontWeight.bolt};
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 30px;
  font-size: ${p => p.theme.fontSizes.xxl};

  @media screen and (min-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    margin-bottom: 50px;
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const GoogleLink = styled.iframe`
  margin-bottom: 50px;
`;

export const WorkingTime = styled.h3`
  color: ${p => p.theme.colors.primaryTitleColor};
  font-weight: ${p => p.theme.fontWeight.bolt};
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 30px;
  font-size: ${p => p.theme.fontSizes.xxl};

  @media screen and (min-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    margin-bottom: 50px;
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const WorkingContacts = styled.h3`
  color: ${p => p.theme.colors.primaryTitleColor};
  font-weight: ${p => p.theme.fontWeight.bolt};
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: ${p => p.theme.fontSizes.m};
  font-size: ${p => p.theme.fontSizes.xxl};

  @media screen and (min-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    margin-bottom: 12px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    flex-direction: column;
  }
`;
