import { styled } from "styled-components";

export const HeroStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  padding: 1rem;
  h1 {
    text-align: center;
    font-size: 2rem;
    font-family: Raleway;
    font-weight: 700;
    line-height: 2.5rem;
    color: #272727;
  }

  h1 strong {
    color: var(--purple, #228B22);
    width: 200px;
  }
  strong span{
    margin-left: -4px;
  }
  .hero-p {
    color: var(--grey-500, #525252);
    text-align: center;
    font-family: DM Sans;
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin-top: 1rem;
  }
  .mobile-img {
    width: 100%;
    height: auto;
  }
  .alink {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  @media screen and (min-width: 728px) {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    h1 {
      font-size: 1.9rem;
      line-height: 2.5rem;
      text-align: left;
    }
    .hero-p {
      text-align: left;
      font-size: 1.2rem;
      line-height: 1.5rem;
      margin-top: 0.75rem;
    }
    .alink {
      margin-top: 1rem;
      justify-content: unset;
      align-items: unset;
    }
  }
  @media screen and (min-width: 810px) {
    .hero-text {
      padding: 1.5rem;
    }
    h1 {
      font-size: 2.1rem;
    }
  }
  @media screen and (min-width: 998px) {
    .hero-text {
      margin-left: 4.5rem;
    }
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(230px, 100%), 1fr));
    img {
      width: auto;
    }
    img{
      width: 70%;
      height: 100%;
    }
    flex-direction: row;
    h1 {
      font-size: 3vw;
      line-height: 4rem;
    }
    .hero-p {
      text-align: left;
      font-size: 1.25rem;
      line-height: 2rem;
      margin-top: 1.5rem;
      // this is subject to change
      width: 78%;
    }
    .alink {
      margin-top: 2.5rem;
    }
  }
`;

export const DesktopMobile = styled.div`
  .desktop {
    display: none;
  }
  @media screen and (min-width: 728px) {
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
  }
`;
export const ImprovedDesktopMobile = styled.div`
  .desktop {
    display: none;
  }
  @media screen and (min-width: 490px) and (max-width: 728px) {
    .mobile{
      display: none;
    }
    .desktop{
      display: block;
    }
  }
  @media screen and (min-width: 728px) {
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
  }
`;

export const TabOnly = styled.div`
  .tab {
    display: none;
  }
  @media screen and (min-width: 728px) {
    .tab {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
  @media screen and (min-width: 998px) {
    .tab {
      display: none;
    }
    .desktop {
      display: block;
    }
  }
`;
