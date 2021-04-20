import React from "react";
import ContentHeader from "./helpers/content-header";
import EducationDetails from "./helpers/education-details";

function EducationContainer() {
  const educationList = [
    {
      name: "Sikkim Manipal Institute of Technology (SMIT)",
      course: "Master of Computer Applications - MCA",
      duration: "2019 – 2021",
      marks: "9.1 CGPA"
    },
    {
      name: "Sikkim Manipal Institute of Technology (SMIT)",
      course: "Bachelor of Computer Applications - BCA",
      duration: "2016 – 2019",
      marks: "9.3 CGPA"
    },
    {
      name: "Lumding College",
      course: "Class XII",
      duration: "2014 – 2016",
      marks: "70%"
    },
    {
      name: "Don Bosco High School",
      course: "Class X",
      duration: "2003-2014",
      marks: "81.5%"
    }
  ];
  return (
    <div className="ui segments box-shadow-none margin-no">
      <ContentHeader title="Education" />
      <div className="ui segment box-shadow-none padding-no">
        <div className="ui segments box-shadow-none border-none">
          {educationList.map((data, i) => (
            <EducationDetails key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationContainer;
