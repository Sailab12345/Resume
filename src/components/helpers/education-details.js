import React from "react";
import PropTypes from "prop-types";

function EducationDetails(props) {
  const { data } = props;
  return (
    <div className="ui segment box-shadow-none border-none">
      <div className="ui grid margin">
        <div className="column content-logo-width">
          <img
            width="24"
            src="/assets/images/college.svg"
            loading="lazy"
            height="24"
            alt=""
            className="college-logo"
          />
        </div>
        <div className="fourteen wide column">
          <p className="margin-no margin-two-bottom text-weight-medium text-size-normal">
            {data.name}
          </p>
          <p className="text-color-black margin-no margin-five-bottom">{data.course}</p>
          <p className="text-color-black margin-no margin-five-bottom text-size-small">
            {data.duration}
          </p>
          <p className="text-color-black margin-no margin-five-bottom text-size-small">
            {data.marks}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationDetails;

EducationDetails.propTypes = {
  data: PropTypes.object.isRequired
};
