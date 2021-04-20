import React from "react";
import PropTypes from "prop-types";

function ContentHeader({ title }) {
  return (
    <div className="ui segment padding-vs-vertical">
      <p className="text-weight-large text-size-medium " style={{ color: "blue" }}>
        {title}
      </p>
    </div>
  );
}

export default ContentHeader;

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired
};
