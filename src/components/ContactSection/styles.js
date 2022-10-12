import styled from "styled-components";

export const ContactSectionStyle = styled.div`
  padding-bottom: 10rem;

  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 4rem;
    justify-content: space-between;
    position: relative;

    a {
      text-decoration: none;
      color: #BCB4B4;
      font-size: 1rem;
    }

    a:hover {
      color: #fff;
    }
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 74%;
    background-color: #BCB4B4;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
  }

  .left {
    width: 100%;
    max-width: 500px;
  }

  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;

    h2 {
      display: none;
    }
  }

  @media only screen and (max-width: 950px) {
    .contactSection__wrapper {
      display: flex;
      justify-content: space-between;
      gap: 0;
      width: 100%;
    }
    .contactSection__wrapper::after {
      position: absolute;
      content: '';
      width: 2px;
      height: 74%;
      background-color: #BCB4B4;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%);
    }
    .left {
      flex: 0 0 45%;
      max-width: 45%;
      padding-right: 1rem;
    }

    .right {
      padding-left: 1rem;
      flex: 0 0 45%;
      max-width: 45%;

      a {
        width: 90%
       overflow: hidden;
       display: -webkit-box;
       -webkit-box-orient: vertical;
       -webkit-line-clamp: 1;
       text-overflow: ellipsis;

       .info {
         width: 90%;
         overflow: hidden;
       }
    }
  }
  
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }

    .contactSection__wrapper::after {
      display: none;
    }

    .left {
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .right {
      padding-left: 0;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

       a {
         width: 90%
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;

        .info {
          width: 90%;
          overflow: hidden;
        }
       }

       h2 {
        display: block;
        fonts-size: 0.5rem;
        margin-top: 0;
        color: #fff;
        padding-top: 30px;
      }
    }
  }
`;
