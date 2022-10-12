import "../App.css";

import TopSection from "../components/TopSection";
import AboutSection from "../components/AboutSection/index.js";
import ProjectSection from "../components/ProjectSection/index.js";
import BottomSection from "../components/BottomSection/index.js";

const Home = () => {
  return (
    <div className="main">
      <TopSection />
      <AboutSection />
      <ProjectSection />
      <BottomSection />
    </div>
  );
};

export default Home;
