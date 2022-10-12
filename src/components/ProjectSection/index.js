import ProjectItem from "./ProjectItem/index";
import SectionTitle from "../SectionTitle/index.js";
import ProjectInfo from "./data";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { ProjectSectionStyle } from "./styles.js";

SwiperCore.use([Navigation]);

export default function ProjectSection() {
  return (
    <ProjectSectionStyle>
      <div className="project-container">
        <SectionTitle subheading="some of my recent works" heading="Projects" />
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {ProjectInfo.map((project, index) => {
              if (index >= 5) return "";
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    link={project.link}
                    name={project.name}
                    position={project.position}
                    size={project.size}
                    work={project.work}
                    technology={project.technology}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
