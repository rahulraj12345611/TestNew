import { styled } from "styled-components";

export const FooterStyles = styled.footer`
  .fl {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
  }
  background: var(--purple-1000, #190829);
  .icons {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  h4 {
    color: var(--off-white, #f9f7f7);
    font-size: 1.25rem;
    font-family: DM Sans;
    font-weight: 700;
    line-height: 2rem;
  }
  .socials {
    display: flex;
    gap : 0.5rem;
  }
  .one {
    display: flex;
    flex-wrap: wrap;
    column-gap: 3rem;
    row-gap: 4rem;
  }
  .pane {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .two{
    display: flex;
    flex-direction : column-reverse;
    gap : 1.5rem;
  }
  .flat{
    display: flex;
    gap : 3rem;
  }
  .two p {
    color: #f9f7f7;
    font-size: 0.875rem;
    font-family: DM Sans;
    font-weight: 700;
    line-height: 1.5rem;
  }
  @media screen and (min-width: 728px) {
    .fl {
      gap: 2rem;
    }
    .one {
      gap: 0;
      justify-content: space-between;
    }
    .two{
        justify-content: space-between;
        flex-direction : row;
        gap : 0;
    }
    .flat{
        gap : 4rem;
    }
    .two p{
        font-size: 1rem;
    }
    .socials{
        gap : 1rem;
    }
  }
`;

export const SocialStyles = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.5px solid var(--off-white, #fefefe);
  svg {
    margin-top: 2px;
  }
`;
