import { SocialMobileLink } from './SocialMobileItem.styled';

function SocialMobileEl({ link, title }) {
  return (
    <SocialMobileLink
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {title}
    </SocialMobileLink>
  );
}

export default SocialMobileEl;
