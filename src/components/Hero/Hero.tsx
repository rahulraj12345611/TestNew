import { DesktopMobile, HeroStyles, TabOnly } from "@/styles/HeroStyles/Hero";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import HeroSearch from "./HeroSearch";
import Link from "next/link";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero: FunctionComponent = () => {
  const [text] = useTypewriter({
    words: ["Start", "Begin"],
    loop: true,
    typeSpeed: 100,
    delaySpeed: 4800,
  });
  return (
    <DesktopMobile>
      <HeroStyles>
        <div className="hero-text">
          <h1>
            Let’s help you <strong style={{"color": "green"}}>{text} <span><Cursor cursorColor="#228B22" /></span></strong> <br />
            your career in <strong style={{"color": "green"}}>Learning</strong>
          </h1>
          <p className="hero-p">
          At The Brain Connections, we offer specialized courses designed to enhance cognitive skills and academic performance. 
          we provide a holistic approach to learning that empowers students of all ages to reach their full potential.
          </p>
          {/* <HeroSearch /> */}
          <div className="alink">
            {/* <Link href={"/courses"}> */}
            <Link href={"/"}>
              <LinkStyle color="var(--green, #4F7942)">
                View Our Courses
              </LinkStyle>
            </Link>
          </div>
        </div>
        <div className="hero-img">
          <TabOnly>
            <Image
              alt="hero img"
              src="https://img.freepik.com/free-photo/boy-with-glasses-man-writing-classroom_1150-24966.jpg?uid=R173935929&ga=GA1.1.295393558.1731326796&semt=ais_hybrid"
              width={700}
              height={500}
              sizes="100%"
              className="desktop"
            />
            <Image
              alt="hero img"
              src="https://img.freepik.com/free-photo/boy-with-glasses-man-writing-classroom_1150-24966.jpg?uid=R173935929&ga=GA1.1.295393558.1731326796&semt=ais_hybrid"
              width={400}
              height={300}
              className="tab"
              sizes="100%"
            />
            <Image
              alt="hero img"
              src="https://img.freepik.com/free-photo/boy-with-glasses-man-writing-classroom_1150-24966.jpg?uid=R173935929&ga=GA1.1.295393558.1731326796&semt=ais_hybrid"
              width={0}
              height={0}
              sizes="100vw"
              priority={true}               
              className="mobile mobile-img"
            />
          </TabOnly>
        </div>
      </HeroStyles>
    </DesktopMobile>
  );
};

export default Hero;
