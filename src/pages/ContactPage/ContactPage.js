import { Location } from "../../components";

import {
  PortfolioSection,
  Wrapper,
  Link,
  NameIcon,
} from "./ContactPage.styled";

function ContactPage() {
  return (
    <PortfolioSection className="section">
      <Wrapper className="container">
        <Link to="/" className="MenuItemPage-link">
          <NameIcon />
          Назад до меню
        </Link>
        <Location />
      </Wrapper>
    </PortfolioSection>
  );
}

export default ContactPage;
