import { SocialIcon } from "react-social-icons";

export const SocialNetworks = () => {
  return (
    <div className="flex flex-row gap-2">
      <SocialIcon
        network="facebook"
        url="https://www.facebook.com/Citybubbles"
        fgColor="black"
        bgColor="transparent"
      />
      <SocialIcon
        network="instagram"
        url="https://www.instagram.com/citybubblesmadeira"
        fgColor="black"
        bgColor="transparent"
      />
      <SocialIcon
        network="youtube"
        url="https://www.youtube.com/channel/UCGNolJ8F5ngm2eSRNAMVFUA"
        fgColor="black"
        bgColor="transparent"
      />
    </div>
  );
};
