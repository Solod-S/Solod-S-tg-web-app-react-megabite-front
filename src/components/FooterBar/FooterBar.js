import SocialItem from "../../components/SocialItem/SocialItem";
import {
  Footer,
  FooterWrapper,
  FlexWrapper,
  ContactWrapper,
  Logo,
  LogoImg,
  Address,
  Street,
  AdressList,
  AdressItem,
  AdressLink,
  SocialWrapper,
  SociaTitle,
  SociaList,
  // Subscribe,
  // SubscribeForm,
  // SubscribeTitle,
  // FormWrapper,
  // EmailInput,
  // EmailBtn,
  // TelegramPlaneInIcon,
} from "./FooterBar.styled";

import socialItems from "../../data/socialItems";
import logoImgFile from "../../images/logof.png";

function FooterBar() {
  return (
    <Footer>
      <FooterWrapper className="container">
        <FlexWrapper>
          <ContactWrapper>
            <Logo href="./index.html">
              <LogoImg src={logoImgFile} />
            </Logo>
            <Address>
              <Street>Київ, бульвар Вацлава Гавела 4 </Street>
              <AdressList>
                <AdressItem>
                  <AdressLink href="mailto:info@devstudio.com">
                    info@megabite.ua
                  </AdressLink>
                </AdressItem>
                <AdressItem>
                  <AdressLink href="tel:+380676446171">
                    +38(067)644-61-71
                  </AdressLink>
                </AdressItem>
                <AdressItem>
                  <AdressLink href="tel:+380443777287">
                    +38(044)377-72-87
                  </AdressLink>
                </AdressItem>
              </AdressList>
            </Address>
          </ContactWrapper>
          <SocialWrapper>
            <SociaTitle>Знайди нас тут</SociaTitle>
            <SociaList>
              {socialItems.length > 0 &&
                socialItems.map(({ link, icon, id }) => (
                  <SocialItem key={id} link={link} icon={icon} />
                ))}
            </SociaList>
          </SocialWrapper>
        </FlexWrapper>
        {/* <Subscribe>
          <SubscribeForm>
            <SubscribeTitle htmlFor="email">
              Subscribe to newsletter
            </SubscribeTitle>
            <FormWrapper>
              <EmailInput
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <EmailBtn type="submit">
                Subscribe
                <TelegramPlaneInIcon size={24} color="white" />
              </EmailBtn>
            </FormWrapper>
          </SubscribeForm>
        </Subscribe> */}
      </FooterWrapper>
    </Footer>
  );
}

export default FooterBar;
