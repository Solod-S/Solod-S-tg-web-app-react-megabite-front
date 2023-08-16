import { Menu, BackBtn } from "../../components";

import { PortfolioSection, Wrapper } from "./DiscountPage.styled";

import menuData from "../../data/discountData";

function DiscountPage() {
  return (
    <PortfolioSection className="section">
      <Wrapper className="container">
        <BackBtn location="/" />
        <Menu data={menuData} location={"discount"} />
        <BackBtn location="/" />
      </Wrapper>
    </PortfolioSection>
  );
}

export default DiscountPage;
