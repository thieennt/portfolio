import styled from "styled-components";
import Button from "../Button";
import { ContactBannerStyles } from "./styles.js";

export default function BottomSection() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <p>If you are looking for candidates for this position</p>
          <h4 className="contactBanner__heading">Let me help you</h4>
          <Button btnText="Contact Me" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
