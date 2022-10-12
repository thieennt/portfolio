import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import SectionTitle from "../components/SectionTitle/index.js";
import ProjectsInfo from "../components/ProjectSection/data.js";
import ProjectItem from "../components/ProjectSection/ProjectItem/index.js";

const ProjectStyle = styled.div`
  padding-bottom: 10rem;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 1.1rem;
    padding: 0.8rem;
    color: #000;
    border-radius: 8px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    // width: 3rem;
    font-size: 1.5rem;
    right: 0rem;
    top: 0.8rem;
    color: #000;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 950px) {
    .projects__allItems {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 98%;
    }
  }
`;

const Projects = () => {
  const [searchText, setSearchText] = useState("");
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  useEffect(() => {
    if (searchText === "") return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };
  return (
    <div className="main">
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="some of my recent works"
          />
          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                img={item.img}
                desc={item.desc}
                link={item.link}
                name={item.name}
                position={item.position}
                size={item.size}
                work={item.work}
                technology={item.technology}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </div>
  );
};

export default Projects;
