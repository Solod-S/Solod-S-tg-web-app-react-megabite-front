import {
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "../components/SocialItem/SocialItem.styled";

const socialItems = [
  {
    id: "s1",
    title: "Instagram",
    link: "https://www.instagram.com/megabiteua/",
    icon: <InstagramIcon size={20} color="grey" />,
  },
  {
    id: "s2",
    title: "Twitter",
    link: "https://twitter.com/MegaBiteUkraine",
    icon: <TwitterIcon size={20} color="grey" />,
  },
  {
    id: "s3",
    title: "Facebook",
    link: "https://www.facebook.com/megabite.ua",
    icon: <FacebookIcon size={20} color="grey" />,
  },
  {
    id: "s4",
    title: "Youtube",
    link: "https://www.youtube.com/",
    icon: <YoutubeIcon size={20} color="grey" />,
  },
];

export default socialItems;
