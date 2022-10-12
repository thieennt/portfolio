import FooterCol from "./FooterCol";
import { FooterStyle } from "./styles.js";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">My portfolio</h1>
          <p className="footer__col1__text">
            I am looking for an position in Fresher Front-End Developer. I love
            to design and make new web experiences for the people.
          </p>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "About",
                path: "/about",
              },
              {
                type: "Link",
                title: "Projects",
                path: "/projects",
              },
              {
                type: "Link",
                title: "Contact",
                path: "/contact",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "0925 382 104",
                path: "tel:0925 382 104",
              },
              {
                title: "thieennt@gmail.com",
                path: "mailto:thieennt@gmail.com",
              },
              {
                title: "Binh Thanh, Ho Chi Minh City",
                path: "https://www.google.com/maps/place/42%2F26+Ung+V%C4%83n+Khi%C3%AAm,+Ph%C6%B0%E1%BB%9Dng+25,+B%C3%ACnh+Th%E1%BA%A1nh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8078898,106.7107724,17z/data=!3m1!4b1!4m5!3m4!1s0x317528a2dc69522f:0xfea0b16b8cfd9bc0!8m2!3d10.8078898!4d106.7129611",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "Facebook",
                path: "https://www.facebook.com/thanh.thien.12576049",
              },
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/thien-nguyen-984252212",
              },
              {
                title: "Instagram",
                path: "https://www.instagram.com/thanhthien_19",
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
}
