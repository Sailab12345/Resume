import React from "react";
import ContentHeader from "./helpers/content-header";
const Language = () => {
  return (
    <>
      <div className="ui segments box-shadow-none margin-no">
        <ContentHeader title="Languages" />
        <div className="ui segment padding-no box-shadow-none">
          <div className="ui segments box-shadow-none border-none">
            <div className="ui segment float-clear padding-vs-vertical box-shadow-none">
              <p className="margin-five-bottom text-weight-medium text-size-normal">English </p>
              <p className="margin-five-bottom  text-weight-medium text-size-normal">Hindi</p>
              <p className="margin-five-bottom text-weight-medium text-size-normal">Bengali</p>
              <p className="margin-five-bottom text-weight-medium text-size-normal">Assamese</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Language;
