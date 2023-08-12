import { Menu } from "../../components";

import { PortfolioSection, Wrapper, Link } from "./DiscountPage.styled";

import menuData from "../../data/discountData";

function DiscountPage() {
  return (
    <PortfolioSection className="section">
      <Wrapper className="container">
        <Link to="/" className="MenuItemPage-link">
          Назад до меню
        </Link>
        <Menu data={menuData} location={"discount"} />
      </Wrapper>
    </PortfolioSection>
  );
}

export default DiscountPage;
