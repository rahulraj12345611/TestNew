import { DesktopMobile, TabOnly } from "@/styles/HeroStyles/Hero";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import Link from "next/link";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { WelcomeStyles } from "@/styles/HomepageStyles/Homepage";
import { motion } from "framer-motion";
import { welcomeTextVariants } from "@/Animations/LandingPageVariants";

const Welcome: FunctionComponent = () => {
  return (
    <DesktopMobile>
      <WelcomeStyles>
        <div className="desktop">
          <ActualPaddedSectionStyle>
            <div className="welcome">
              <div className="one img-cont">
                <TabOnly>
                  <Image
                    src="/brain/brain1.jpg"
                    alt="welcome"
                    width={475.544}
                    height={369.739}
                    className="desktop"
                    sizes="100%"
                  />
                  <Image
                    src="/brain/brain_welcome.jpg"
                    alt="welcome"
                    width={380}
                    height={300}
                    sizes="100%"
                    className="tab fill-img"
                  />
                </TabOnly>
              </div>
              <div className="one txxt">
                <motion.div className="texts"
                variants={welcomeTextVariants}
                initial = "initial"
                whileInView= "final"
                viewport={{once : true }}
                >
                  <h3>Begin Your Child&apos;s Journey to Unleashing Their Full Potential Today!</h3>
                  <p className="small">
                    In The Brain Connections, we guide you with the best available teaching and
                    mentoring needed in your tech career and also give you the
                    necessary resources to get better.{" "}
                  </p>
                  <Link href={"/courses"}>
                    <LinkStyle color="var(--green, #50C878)">
                      Get Started
                    </LinkStyle>
                  </Link>
                </motion.div>
              </div>
            </div>
          </ActualPaddedSectionStyle>
        </div>
        <div className="mobile">
          <ActualPaddedSectionStyle>
            <div className="welcome">
              <motion.h3
              variants={welcomeTextVariants}
              initial = "farLeft"
              whileInView="final"
              viewport={{once : true}}
              >Welcome to The Brain Connections’s E-learning Website</motion.h3>
              <Image
                src="/assets/welcome-mobile.png"
                alt="welcome"
                width={0}
                height={0}
                sizes="100vw"
                className="fill-img mobile"
              />
              <motion.p className="small"
              variants={welcomeTextVariants}
              initial = "farRight"
              whileInView="final"
              viewport={{once : true}}
              >
                In The Brain Connections, we guide you with the best available teaching and
                mentoring needed in your tech career and also give you the
                necessary resources to get better.{" "}
              </motion.p>
              <Link href={"/courses"}>
                <LinkStyle color="var(--purple, #228B22)">
                  Get Started
                </LinkStyle>
              </Link>
            </div>
          </ActualPaddedSectionStyle>
        </div>
      </WelcomeStyles>
    </DesktopMobile>
  );
};

export default Welcome;
