import { CtaStyles } from "@/styles/HomepageStyles/Homepage";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import Link from "next/link";
import SectionHead from "../SectionHead/SectionHead";
import { ActualPaddedSectionStyle, CtaPaddedSectionStyle } from "@/styles/HomepageStyles/Section";

const Cta = () => {
  return (
    <CtaPaddedSectionStyle >
      <CtaStyles style={{backgroundColor: "white"}}>
        <ActualPaddedSectionStyle>
          <div className="cta" >
            <SectionHead 
              bigtext="Start Your Learning Journey Today"
              smalltext="Don’t wait till you’re sure, there’s space for everyone in tech, Join Us Today"
            />
            <div className="pad">
              <Link href={"/"}>
                <div className="a">
                  <LinkStyle color="#fff" hovercolor="#fff">
                    View all Courses
                  </LinkStyle>
                </div>
              </Link>
            </div>
          </div>
          </ActualPaddedSectionStyle>
      </CtaStyles>
      </CtaPaddedSectionStyle>
  );
};

export default Cta;
