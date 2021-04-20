import React from "react";
import ContentHeader from "./helpers/content-header";
const Interest = () => {
  return (
    <>
      <div className="ui segments box-shadow-none margin-no">
        <ContentHeader title="Interests" />
        <div className="ui segment padding-no box-shadow-none">
          <div className="ui segments box-shadow-none border-none">
            <div className="ui segment float-clear padding-vs-vertical box-shadow-none">
              <p className="margin-five-bottom text-weight-medium text-size-normal">
                Front End Development
              </p>
              <p className="margin-five-bottom  text-weight-medium text-size-normal">Sports</p>
              <p className="margin-five-bottom text-weight-medium text-size-normal">Polity</p>
              <p className="margin-five-bottom text-weight-medium text-size-normal">Travel</p>
              <p className="margin-five-bottom text-weight-medium text-size-normal">Music</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interest;
