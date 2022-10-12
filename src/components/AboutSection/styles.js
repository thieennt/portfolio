import styled from "styled-components";

export const AboutSectionStyles = styled.div`
  padding-top: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
  .aboutSection__left {
    width: 90%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p {
    text-align: center;
    line-height: 2;
    text-align: justify;
    font-size: 1.1rem;
  }
  .aboutSection__right {
    // flex: 1;
    width: 400px;

    .aboutImg {
      width: 400px;
      height: auto;
      border: 2px solid #363636;
      border-radius: 10px;
    }
  }
  .section-title {
    // text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .about-container {
      flex-direction: column;
      text-align: center;
      width: 100%;
    }
    .aboutSection__left {
      width: 100%;
    }
    .aboutSection__right {
      width: 70%;
      padding-top: 3rem;
      .aboutImg {
        width: 100%;
        margin-top: 3rem;
      }
    }
    .section-title {
      text-align: center;
      p {
        text-align: center;
      }
    }
    .aboutSection__buttons {
      display: flex;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 768px) {
    .about-container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left {
      width: 100%;
    }
    p {
      font-size: 0.9rem;
    }
    .aboutSection__right {
      width: 100%;
      .aboutImg {
        width: 100%;
        margin-top: 3rem;
      }
    }
    .section-title {
      text-align: center;
      p {
        text-align: center;
        font-size: 0.9rem;
      }
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 90%;
        text-align: center;
      }
    }
  }
`;
