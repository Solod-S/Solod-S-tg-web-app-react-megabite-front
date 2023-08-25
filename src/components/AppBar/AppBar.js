import {
  Header,
  Navigation,
  Logo,
  MenuWrapper,
  Menu,
  MenuList,
  MenuItem,
  LogoImg,
  // MenuLink,
  // ContactList,
  // ContactItem,
  // ContactLink,
  // SmartPhoneIcon,
  // MailInIcon,
} from "./AppBar.styled";
import logoImgFile from "../../images/logo.png";

function AppBar() {
  return (
    <Header>
      <Navigation className="container">
        <Logo to="/">
          {/* <span className="accentColor">Web</span>Studio */}
          <LogoImg src={logoImgFile} />
        </Logo>
        <MenuWrapper data-menubtn>
          <Menu>
            <MenuList>
              <MenuItem>
                {/* <MenuLink end="true" to="/">
                  Studio
                </MenuLink> */}
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <ContactList>
            <ContactItem>
              <ContactLink href="mailto:info@devstudio.com">
                <MailInIcon size={16} color="black" />
                info@megabite.ua
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <ContactLink
                // className="--mobile-modificator"
                href="tel:+380676446171"
              >
                <SmartPhoneIcon size={16} color="black" />
                (067)644-61-71
              </ContactLink>
              <ContactLink
                // className="--mobile-modificator"
                href="tel:+380443777287"
              >
                <SmartPhoneIcon size={16} color="black" />
                (044)377-72-87
              </ContactLink>
            </ContactItem>
          </ContactList> */}
        </MenuWrapper>
      </Navigation>
    </Header>
  );
}

export default AppBar;
