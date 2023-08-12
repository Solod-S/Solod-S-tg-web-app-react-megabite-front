import {
  LocationSection,
  Wrapper,
  Title,
  GoogleLink,
  WorkingTime,
  WorkingContacts,
  ContactsList,
} from "./Location.styled";
import {
  ContactItem,
  ContactLink,
  MailInIcon,
  SmartPhoneIcon,
} from "../../components/AppBar/AppBar.styled";

function Location() {
  return (
    <LocationSection className="section">
      <Wrapper className="container">
        <Title>We're located:</Title>
        <GoogleLink
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.7794497406567!2d30.5383858!3d50.426580699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e033ecbe9%3A0x57a4dffefec77da0!2z0LHRg9C7LiDQm9C10YHQuCDQo9C60YDQsNC40L3QutC4LCAyNiwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1666193649923!5m2!1sru!2sua"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          title="location"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></GoogleLink>
        <WorkingTime>
          Working Hours: 9 AM to 7 PM, Seven Days a Week
        </WorkingTime>
        <WorkingContacts>Our contacts</WorkingContacts>
        <ContactsList>
          <ContactItem>
            <ContactLink href="tel:+380961111111">
              <MailInIcon size={16} color="black" />
              +38 096 111 11 11
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLink href="mailto:info@devstudio.com">
              <SmartPhoneIcon size={16} color="black" />
              info@devstudio.com
            </ContactLink>
          </ContactItem>
        </ContactsList>
      </Wrapper>
    </LocationSection>
  );
}

export default Location;
