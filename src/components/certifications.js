import React from "react";
import ContentHeader from "./helpers/content-header";
import CertificateDetails from "./helpers/certificate-details";

function Certificates() {
  const certificatesList = [
    {
      name: "Rank Certificate",

      description:
        "Rewarded with a Rank Certificate for being the top performer in academics throughout Bachelor degree."
    },
    {
      name: "Course Certificate",
      description:
        "Received a certificate on completing the course 'What is Data Science?' from Coursera."
    },
    {
      name: "Domestic Data Entry Operator",
      description:
        "Rewarded with a certificate on completing the course 'Domestic Data Entry Operator-English' from eSkill India, a govt. of India platform."
    }
  ];
  return (
    <div className="ui segments box-shadow-none margin-no">
      <ContentHeader title="Certifications" />
      <div className="ui segment box-shadow-none padding-no">
        <div className="ui segments box-shadow-none border-none">
          {certificatesList.map((certificate, i) => (
            <CertificateDetails key={i} data={certificate} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;
