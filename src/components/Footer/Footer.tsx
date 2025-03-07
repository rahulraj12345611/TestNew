import { FooterPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FooterLinkStyle, LinkStyle } from "@/styles/LinkStyles/Link";
import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FooterStyles } from "@/styles/FooterStyles/Footer";
import { Facebook, FooterLogo, Instagram, Linkedin, Twitter } from "../Icons/Icons";

const Footer: FunctionComponent = () => {
  return (
    <FooterStyles>
      <FooterPaddedSectionStyle>
        <div className="fl">
        <div className="one">
          <div className="icons">
            <Link href={"/"}>
              <FooterLogo />
            </Link>
            <div className="socials">
              <Linkedin />
              {/* <Facebook /> */}
              <Instagram />
              <Twitter /> 
            </div>
          </div>
          <div className="pane">
            <h4>Company</h4>
            <div className="links">
              {/* <Link href={"/courses"}> */}
              <Link href={"/"}>
                <FooterLinkStyle color="var(--off-white, #F9F7F7)" hovercolor="#fff">
                  Courses
                </FooterLinkStyle>
              </Link>
              <Link href={"/"}>
                <FooterLinkStyle color="var(--off-white, #F9F7F7)" hovercolor="#fff">
                  About Us
                </FooterLinkStyle>
              </Link>
              <Link href={"/"}>
                <FooterLinkStyle color="var(--off-white, #F9F7F7)" hovercolor="#fff">
                  Contact Us
                </FooterLinkStyle>
              </Link>
            </div>
          </div>
          <div className="pane">
            <h4>Community</h4> 
            <div className="links">
              {/* <Link href={"#"}>
                <FooterLinkStyle color="var(--off-white, #F9F7F7)" hovercolor="#fff">
                  Scholarships
                </FooterLinkStyle>
              </Link> */}
              <Link href={"#"}>
                <FooterLinkStyle color="var(--off-white, #F9F7F7)" hovercolor="#fff">
                  Refer a Friend
                </FooterLinkStyle>
              </Link>
              <Link href={"#"}>
                <FooterLinkStyle color="var(--off-white, #F9F7F7)" hovercolor="#fff">
                  Trail Classes
                </FooterLinkStyle>
              </Link>
            </div>
          </div>
          <div className="pane m-b">
            <h4>Teaching</h4>
            <div className="links">
              <Link href={"#"}>
                <FooterLinkStyle color="var(--off-white, #F9F7F7)" hovercolor="#fff">
                  Become a Tutor
                </FooterLinkStyle>
              </Link>
              <Link href={"#"}>
                <FooterLinkStyle color="var(--off-white, #F9F7F7)" hovercolor="#fff">
                  Tutor Help Centre
                </FooterLinkStyle>
              </Link>
            </div>
          </div>
        </div>
        <div className="two">
          <p>2024 The Brain Connections. All Rights Reserved</p>
          <div className="flat">
            <Link href={"#"}>
              <FooterLinkStyle color="var(--off-white, #F9F7F7)" hovercolor="#fff">
                Privacy Policy
              </FooterLinkStyle>
            </Link>
            <Link href={"#"}>
              <FooterLinkStyle color="var(--off-white, #F9F7F7)" hovercolor="#fff">
                Terms and Conditions
              </FooterLinkStyle>
            </Link>
          </div>
        </div>
        </div>
      </FooterPaddedSectionStyle>
    </FooterStyles>
  );
};

export default Footer;
