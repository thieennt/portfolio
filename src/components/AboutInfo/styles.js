import styled from "styled-components";

export const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 2rem;
  .title {
    font-size: 1.2rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 15rem;
  }
  .item {
    background-color: #1e1e1e;
    padding: 0 1.2rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
    .items {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    // gap: 1rem;
    .items {
      position: initial;
      display: flex;
      flex-wrap: wrap;
      // gap: 0.5rem;
    }
    .title {
      font-size: 1rem;
    }
  }
`;
