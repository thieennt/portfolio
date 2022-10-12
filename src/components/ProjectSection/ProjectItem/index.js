import { ProjectItemStyles } from "./styles.js";

export default function ProjectItem({
  name = "",
  title = "",
  desc = "",
  size = "",
  position = "",
  work = "",
  technology = "",
  link = "",
}) {
  return (
    <ProjectItemStyles>
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>
        <div className="project-info">
          <div className="info-item">
            <span className="project-title">Project name:</span>
            <span className="project-text">{name}</span>
          </div>
          <div className="info-item">
            <span className="project-title">Team size:</span>
            <span className="project-text">{size}</span>
          </div>
          <div className="info-item">
            <span className="project-title">Position:</span>
            <span className="project-text">{position}</span>
          </div>
          <div className="info-item">
            <span className="project-title">Description:</span>
            <span className="project-text">{desc}</span>
          </div>
          <div className="info-item">
            <span className="project-title">Work description:</span>
            <span className="project-text">{work}</span>
          </div>
          <div className="info-item">
            <span className="project-title">Technology:</span>
            <span className="project-text">{technology}</span>
          </div>
          <div className="projectItem__link">
            <a href={link} target="_blank" rel="noreferrer">
              Open product
            </a>
          </div>
        </div>
      </div>
    </ProjectItemStyles>
  );
}
