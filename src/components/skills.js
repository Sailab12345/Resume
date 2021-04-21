import React from "react";
import ContentHeader from "./helpers/content-header";
import SkillCard from "./helpers/skill-card";

function Skills() {
  const skills = [
    { name: "JavaScript", value: 70 },
    { name: "ReactJs", value: 75 },
    { name: "Redux", value: 70 },
    { name: "Cascading Style Sheets", value: 75 },
    { name: "HTML", value: 90 },

    { name: "GitHub", value: 75 },
    { name: "DBMS", value: 70 },
    { name: "SQL", value: 70 },
    { name: "Data Structures and Algorithms", value: 75 },
    { name: "MS Office Suite", value: 90 },
    { name: "Problem Solving", value: 80 }
  ];
  return (
    <div className="ui segments box-shadow-none margin-no margin-five-bottom">
      <ContentHeader title="Skills & Competences" />
      <div className="ui segment box-shadow-none padding-vs-horizontal">
        <div className="ui grid margin-no">
          {skills.map((skill, i) => (
            <SkillCard key={i} data={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
