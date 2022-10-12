import styled from "styled-components";
import "swiper/swiper-bundle.min.css";

export const ProjectSectionStyle = styled.div`
  .project-container {
    padding: 10rem 0 5rem;
  }
  .projects__allItems {
    display: flex;
    gap: 5rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 5rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: #1e1e1e;
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: #bcb4b4;
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }

  @media only screen and (max-width: 950px) {
    .project-container {
      padding: 10rem 0 5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 3rem;
      gap: 5rem;
      .projectItem__img {
        width: 99%;
      }
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 1rem;
    }
  }
`;
