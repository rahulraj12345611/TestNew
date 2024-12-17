import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FunctionComponent } from "react";
import SectionHead from "../SectionHead/SectionHead";
import Link from "next/link";
import { SocialLinkStyle } from "@/styles/LinkStyles/Link";
import { ColorInstagram, ColorTwitter, ColorYoutube } from "../Icons/Icons";
import { SocialsCompStyles } from "@/styles/AboutpageStyles/Aboutpage";

const SocialsComp: FunctionComponent = () => {
  return (
    <SocialsCompStyles>
      <ActualPaddedSectionStyle>
        <SectionHead
          bigtext="Follow Us"
          smalltext="You can also reach out to us via our social media pages."
        />
        <div className="s-media">
          <div className="pad">
            <Link href={"https://www.instagram.com/vineetaagupta08/"} target="_blank">
              <div className="a">
                <div className="a-link">
                  <ColorInstagram />
                  <SocialLinkStyle color="var(--grey-500, #525252)">The Brain Connections</SocialLinkStyle>
                </div>
              </div>
            </Link>
          </div>
          <div className="pad">
            <Link href={"https://www.linkedin.com/in/vineeta-gupta-25b91916a"}>
              <div className="a">
                <div className="a-link">
                  <ColorTwitter />
                  <SocialLinkStyle color="var(--grey-500, #525252)">The Brain Connections</SocialLinkStyle>
                </div>
              </div>
            </Link>
          </div>
          <div className="pad">
            <Link href={"https://www.linkedin.com/in/vineeta-gupta-25b91916a"}>
              <div className="a">
                <div className="a-link">
                  <ColorYoutube />
                  <SocialLinkStyle color="var(--grey-500, #525252)">The Brain Connections</SocialLinkStyle>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </ActualPaddedSectionStyle>
    </SocialsCompStyles>
  );
};

export default SocialsComp;
