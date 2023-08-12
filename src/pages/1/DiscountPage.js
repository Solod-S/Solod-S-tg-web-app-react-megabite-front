// import menuData from "../../data/menuData";

import {
  Link,
  Main,
  Section,
  Title,
  Info,
  ImgWrapper,
  // Image,
  TexList,
  ShortDscr,
  TextItem,
  Text,
} from "./DiscountPage.styled";

function DiscountPage() {
  return (
    <Main>
      <section className="container">
        <Link to="/" className="MenuItemPage-link">
          Назад до меню
        </Link>
        <Section>
          <Title>111</Title>
          <Info>
            <ImgWrapper>
              {/* <Image src={menuItems.img} alt={menuItems.title} /> */}
            </ImgWrapper>
            <TexList>
              <TextItem>
                <ShortDscr>Amet consectetur adipisicing, 2022</ShortDscr>
              </TextItem>
              <TextItem>
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus sunt excepturi nesciunt iusto dignissimos assumenda
                  ab quae cupiditate a, sed reprehenderit? Deleniti optio quasi,
                  amet natus reiciendis atque fuga dolore? Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Impedit suscipit
                  quisquam incidunt commodi fugiat aliquam praesentium ipsum
                  quos unde voluptatum?
                </Text>
              </TextItem>
              <TextItem>
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus sunt excepturi nesciunt iusto dignissimos assumenda
                  ab quae cupiditate a, sed reprehenderit? Deleniti optio quasi,
                  amet natus reiciendis atque fuga dolore?
                </Text>
              </TextItem>
              <TextItem>
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus sunt excepturi nesciunt iusto dignissimos assumenda
                  ab quae cupiditate a, sed reprehenderit? Deleniti optio quasi,
                  amet natus reiciendis atque fuga dolore? Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Doloribus sunt
                  excepturi nesciunt iusto dignissimos assumenda ab quae
                  cupiditate a, sed reprehenderit? Deleniti optio quasi, amet
                  natus reiciendis atque fuga dolore?
                </Text>
              </TextItem>
            </TexList>
          </Info>
        </Section>
      </section>
    </Main>
  );
}

export default DiscountPage;
