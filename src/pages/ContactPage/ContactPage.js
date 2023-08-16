import { Location, BackBtn } from "../../components";

import { PortfolioSection, Wrapper } from "./ContactPage.styled";

function ContactPage() {
  return (
    <PortfolioSection className="section">
      <Wrapper className="container">
        <BackBtn location="/" />
        <Location />
        <BackBtn location="/" />
      </Wrapper>
    </PortfolioSection>
  );
}

export default ContactPage;
