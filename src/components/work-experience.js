import React, { useMemo } from "react";
import ContentHeader from "./helpers/content-header";
import ExperienceDetails from "./helpers/experience-details";
import moment from "moment";

function WorkExperience() {
  const date = useMemo(() => {
    const currentTime = moment();
    const joiningDateDiff = currentTime.diff(moment("2018-06-18"));
    const joiningDuration = moment.duration(joiningDateDiff, "ms");
    return joiningDuration;
  }, []);

  const jobDetails = useMemo(() => {
    if (date) {
      return [
        {
          image_url: "/assets/images/talview.png",
          role: "Sales and Marketing Intern",
          org: "SkillGenic Academy",
          duration: "Feb 2021 – Mar 2021 (1 mos)"
        }
      ];
    }
    return [];
  }, [date]);
  return (
    <div className="ui segments box-shadow-none margin-five-bottom">
      <ContentHeader title="Work Experience" />
      <div className="ui segment padding-no box-shadow-none">
        <div className="ui segments border-none box-shadow-none">
          {jobDetails.map((data, i) => (
            <ExperienceDetails key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
