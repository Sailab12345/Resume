import React from "react";
import PropTypes from "prop-types";

function CertificateDetails({ data }) {
  return (
    <div className="ui segment float-clear padding-vs-vertical box-shadow-none">
      <p className="margin-five-bottom text-weight-medium text-size-normal">{data.name} </p>
      <p className="margin-five-bottom">{data.description}</p>
    </div>
  );
}

export default CertificateDetails;

CertificateDetails.propTypes = {
  data: PropTypes.object.isRequired
};
