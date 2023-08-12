import { SociaItem, SociaLink } from './SocialItem.styled';

function SocialItem({ link, icon }) {
  return (
    <SociaItem>
      <SociaLink href={link} target="_blank" rel="noopener noreferrer nofollow">
        {icon}
      </SociaLink>
    </SociaItem>
  );
}

export default SocialItem;
