import { SocialIcon } from "react-social-icons";

export const Facebook = () => (
  <SocialIcon
    network="facebook"
    url="https://www.facebook.com/Citybubbles"
    fgColor="currentColor"
    bgColor="transparent"
  />
);
export const Instagram = () => (
  <SocialIcon
    network="instagram"
    url="https://www.instagram.com/citybubblesmadeira"
    fgColor="currentColor"
    bgColor="transparent"
  />
);
export const Youtube = () => (
  <SocialIcon
    network="youtube"
    url="https://www.youtube.com/channel/UCGNolJ8F5ngm2eSRNAMVFUA"
    fgColor="currentColor"
    bgColor="transparent"
  />
);

export const SocialNetworks = () => {
  return (
    <div className="flex flex-row gap-2">
      <Facebook />
      <Instagram />
      <Youtube />
    </div>
  );
};
