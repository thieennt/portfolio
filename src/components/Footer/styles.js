import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: #1e1e1e;
  padding: 5rem 5%;
  .container {
    display: flex;
    gap: 3rem;
    text-align: left;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  .footer__col1__text {
    font-size: 1.1rem;
    line-height: 1.8;
    text-align: justify;
    padding-top: 12px;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 2rem;
      }
    }

    .footer__col1__title {
      text-align: center;
    }
    .footer__col1__text {
      font-size: 0.9rem;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;
