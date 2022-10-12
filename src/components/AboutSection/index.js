import Button from "../Button/index.js";
import { AboutSectionStyles } from "./styles.js";
import SectionTitle from "../SectionTitle/index.js";

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="about-container">
        {/* <div className="aboutSection__left"> */}
        <SectionTitle subheading="Let me introduce myself" heading="About Me" />
        <p>
          I am currently a final year student, majoring in E-commerce in the
          Faculty of Management Information Systems. I love website design and
          always try to show unique perspectives through my designs. With the
          knowledge I have learned and gained over a short period of time
          working in an outsourcing company, I am looking for an position in
          Fresher Front-End Developer in a new environment to gain more
          experiences and opportunities in the future.
        </p>
        <div className="aboutSection__buttons">
          <Button btnText="Works" btnLink="/projects" />
          <Button btnText="Read More" btnLink="/about" outline />
        </div>
      </div>
      {/* <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div> */}
      {/* </div> */}
    </AboutSectionStyles>
  );
}
