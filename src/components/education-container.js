import React from "react";
import ContentHeader from "./helpers/content-header";
import EducationDetails from "./helpers/education-details";

function EducationContainer() {
  const educationList = [
    {
      name: "Sikkim Manipal Institute of Technology (SMIT)",
      course: "Master of Computer Applications - MCA",
      duration: "2015 – 2018"
    }
  ];
  return (
    <div className="ui segments">
      <ContentHeader title="Education" />
      <div className="ui segment">
        <div className="ui segments">
          {educationList.map((data, i) => (
            <EducationDetails key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationContainer;
