import {
  LocationSection,
  Wrapper,
  Title,
  GoogleLink,
  WorkingTime,
  WorkingContacts,
  ContactsList,
  LocationImg,
} from "./Location.styled";
import {
  ContactItem,
  ContactLink,
  MailInIcon,
  SmartPhoneIcon,
  TelegramInIcon,
} from "../../components/AppBar/AppBar.styled";

import locationPic from "../../images/location.jpg";

function Location() {
  return (
    <LocationSection className="section">
      <Wrapper className="container">
        <Title>Пункт видачі замовленнь:</Title>
        <GoogleLink
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.3384693975232!2d30.42791871038812!3d50.447700751895475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cebb6f75b3ad%3A0xe32bc071d35618c0!2sMegabite!5e0!3m2!1sru!2sua!4v1692009259916!5m2!1sru!2sua"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          title="location"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></GoogleLink>
        <WorkingTime>
          Графік роботи: Пн-Пт: з 9 до 18-00, Сб-Вс: вихідний
        </WorkingTime>
        <WorkingContacts>Our contacts</WorkingContacts>
        <ContactsList>
          <ContactItem>
            <ContactLink href="tel:0443777287">
              <SmartPhoneIcon size={16} color="black" />
              044 377 72 87
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLink href="tel:0676446171">
              <SmartPhoneIcon size={16} color="black" />
              067 644 61 71
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLink href="https://t.me/Megabite_shop">
              <TelegramInIcon size={16} color="black" />
              Megabite_shop
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLink href="mailto:info@megabite.ua">
              <MailInIcon size={16} color="black" />
              info@megabite.ua
            </ContactLink>
          </ContactItem>
        </ContactsList>
        <LocationImg src={locationPic} />
      </Wrapper>
    </LocationSection>
  );
}

export default Location;
