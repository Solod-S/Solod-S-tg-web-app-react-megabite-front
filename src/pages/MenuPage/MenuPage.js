import { Menu } from "../../components";

import { PortfolioSection, Wrapper } from "./MenuPage.styled";

import menuData from "../../data/menuData";

function MenuPage() {
  return (
    <PortfolioSection className="section">
      <Wrapper className="container">
        <Menu data={menuData} location={"mainMenu"} />
      </Wrapper>
    </PortfolioSection>
  );
}

export default MenuPage;
