import HeroImg from "../../assets/img/8.jpg";
import Button from "../Button/index.js";
import "./styles.scss";

const TopSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello, This is portfolio of</span>
          <span className="hero__name">Thien Nguyen</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="Img" />
        </div>
        <div className="hero__info">
          <p>
            I am looking for an position in Fresher Front-End Developer. I love
            to design and make new web experiences for the people.
          </p>
          <Button btnText="see my works" btnLink="/projects" />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
