import styled from "styled-components";

export const ColStyle = styled.div`
  .heading {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.1rem;
    text-decoration: none;
    color: #bcb4b4;
  }
  a:hover {
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    .heading,
    ul {
      text-align: center;
    }

    a {
      font-size: 0.9rem;
    }
  }
`;
