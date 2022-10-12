import styled from "styled-components";

export const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-size: 1.3rem;
  }
  h2 {
    font-size: 3rem;
    margin: 0;
    text-transform: uppercase;
    color: #fff;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 0.9rem;
    }
    h2 {
      font-size: 1.6rem;
    }
  }
`;
