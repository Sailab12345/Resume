import React from "react";
import ContentHeader from "./helpers/content-header";
// import ProjectDetails from "./helpers/project-details";

function Achievement() {
  return (
    <div className="ui segments box-shadow-none margin-no">
      <ContentHeader title="Achievement" />
      <div className="ui segment box-shadow-none padding-no">
        <div className="ui segments box-shadow-none border-none">
          <div className="ui segment float-clear padding-vs-vertical box-shadow-none">
            <p className="margin-five-bottom text-weight-medium text-size-normal">Gold Medal </p>
            <p className="margin-five-bottom">
              Rewarded with a Gold Medal for academics in Graduation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
