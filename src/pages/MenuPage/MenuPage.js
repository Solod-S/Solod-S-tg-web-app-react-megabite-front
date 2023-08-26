import { Menu, SectionWrapper, Hero } from "../../components";

import menuData from "../../data/menuData";

const banners = [
  { video: require("../../video/own-brands/phone-case/icon2/icon2.mov") },
  { video: require("../../video/own-brands/phone-case/icon2/icon2_obz.mp4") },
  {
    video: require("../../video/own-brands/phone-glass/icon3d/icon3d_how_to_use.mp4"),
  },
];

function MenuPage() {
  return (
    <SectionWrapper className="container" styleProps={{ paddingTop: 0 }}>
      <Hero banners={banners} />
      <Menu data={menuData} location={"mainMenu"} />
    </SectionWrapper>
  );
}

export default MenuPage;
