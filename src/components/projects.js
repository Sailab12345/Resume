import React from "react";
import ContentHeader from "./helpers/content-header";
import ProjectDetails from "./helpers/project-details";

function Projects() {
  const projectsList = [
    {
      name: "Result Analysis System",
      roles: ["Development", "Documentation"],
      description:
        "It is a Web Application that enables the stakeholders to analyse the annual academic performance of the students in a graphical manner. ",
      framework: ".Net",
      keywords: ["Asp.Net", "C#", "SQL Server", "Bootstrap"]
    }
  ];
  return (
    <div className="ui segments box-shadow-none margin-no">
      <ContentHeader title="Project" />
      <div className="ui segment box-shadow-none padding-no">
        <div className="ui segments box-shadow-none border-none">
          {projectsList.map((project, i) => (
            <ProjectDetails key={i} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
