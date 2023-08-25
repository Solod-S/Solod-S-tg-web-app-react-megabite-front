import { Menu, SectionWrapper } from "../../components";

import menuData from "../../data/menuData";

function MenuPage() {
  return (
    <SectionWrapper className="container">
      <Menu data={menuData} location={"mainMenu"} />
    </SectionWrapper>
  );
}

export default MenuPage;
