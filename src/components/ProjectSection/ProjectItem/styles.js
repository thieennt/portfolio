import styled from "styled-components";

export const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 99%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid #363636;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: #1e1e1e;
    padding: 1rem;
    border-radius: 12px;
    min-height: 600px;
    position: relative;
  }

  .project-info {
    text-align: left;

    .info-item {
      padding-top: 20px;
    }
    .project-title {
      color: #bcb4b4;
    }

    .project-text {
      color: #fff;
      padding-left: 10px;
    }
  }
  .projectItem__title {
    font-size: 1.4rem;
    text-align: center;
  }
  .projectItem__desc {
    text-align: justify;
    font-size: 1.1rem;
    margin-top: 1rem;
    line-height: 1.7;
  }

  .projectItem__link {
    width: 100%;
    // margin: 2rem auto;
    // padding: 0.7rem;
    // border-radius: 8px;
    // background-color: #bcb4b4;
    // text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;

    a {
      text-decoration: none;
      color: black;
      width: 40%;
      margin: 2rem auto;
      padding: 0.7rem;
      border-radius: 8px;
      background-color: #bcb4b4;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
  .projectItem__link:hover {
    // cursor: pointer;
    // background-color: #262626;
    // border: 2px solid #bcb4b4;
    // transition: 0.5s ease transform;
    a {
      text-decoration: none;
      color: #bcb4b4;
      cursor: pointer;
      background-color: #262626;
      border: 2px solid #bcb4b4;
      transition: 0.5s ease all;
    }
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }

    .projectItem__desc {
      font-size: 0.9rem;
    }

    .projectItem__link {
      width: 100%;
      margin: 2rem auto;
      a {
        font-size: 0.9rem;
      }
    }
  }
`;
