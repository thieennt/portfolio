import styled from "styled-components";

export const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: #1e1e1e;
    border-radius: 12px;
    padding: 2rem 0rem;
    text-align: center;
    font-size: 1.2rem;
  }
  .contactBanner__heading {
    font-size: 1.6rem;
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__wrapper {
      p {
        font-size: 0.9rem;
        padding: 0 1rem;
      }
      .contactBanner__heading {
        font-size: 1.6rem;
      }
    }
  }
`;
