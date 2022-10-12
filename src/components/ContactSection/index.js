import { MdEmail, MdLocalPhone } from "react-icons/md";
import {
  RiFacebookCircleFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
} from "react-icons/ri";

// import ContactForm from './ContactForm';
import ContactInfoItem from "./ContactItem/index.js";
import SectionTitle from "../SectionTitle/index.js";
import { ContactSectionStyle } from "./styles.js";

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <a href="tel: 0925 382 104">
              <ContactInfoItem icon={<MdLocalPhone />} text="0925 382 104" />
            </a>
            <a href="mailto:thieennt@gmail.com">
              <ContactInfoItem icon={<MdEmail />} text="thieennt@gmail.com" />
            </a>
            <a href="https://www.google.com/maps/place/42%2F26+Ung+V%C4%83n+Khi%C3%AAm,+Ph%C6%B0%E1%BB%9Dng+25,+B%C3%ACnh+Th%E1%BA%A1nh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8078898,106.7107724,17z/data=!3m1!4b1!4m5!3m4!1s0x317528a2dc69522f:0xfea0b16b8cfd9bc0!8m2!3d10.8078898!4d106.7129611">
              <ContactInfoItem text="Binh Thanh, Ho Chi Minh City" />
            </a>
          </div>
          <div className="right">
            <h2 className="title">Social Links</h2>
            <a href="https://www.facebook.com/thanh.thien.12576049">
              <ContactInfoItem
                icon={<RiFacebookCircleFill />}
                text="https://www.facebook.com/"
              />
            </a>
            <a href="https://www.instagram.com/thanhthien_19/">
              <ContactInfoItem
                icon={<RiInstagramLine />}
                text="https://www.instagram.com/"
              />
            </a>
            <a href="https://www.linkedin.com/in/thien-nguyen-984252212/">
              <ContactInfoItem
                icon={<RiLinkedinBoxFill />}
                text="https://www.linkedin.com/"
              />
            </a>
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
