import React from "react";
import Objective from "../components/objective";
import EducationContainer from "../components/education-container";
import Header from "../components/header";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Interest from "../components/interests";
import Certificates from "../components/certifications";
import Language from "../components/languages";
import Achievement from "../components/achievement";
import WorkExperience from "../components/work-experience";

function Home() {
  const printHandler = () => {
    window.print();
  };
  return (
    <div className="ui container">
      <table>
        <tbody>
          <tr>
            <td>
              <div className="ui segments box-shadow-none border-none margin-ten-horizontal">
                <div className="ui segment padding-no-vertical">
                  <Header />
                </div>
                <div className="ui segment padding-no-vertical">
                  <div className="ui stackable grid margin-no">
                    <div className="sixteen wide column  padding-vs">
                      <Objective />
                    </div>
                    <div className="six wide column padding-vs">
                      <WorkExperience />
                      <Skills />
                      <Interest />
                      <Language />
                    </div>
                    <div className="ten wide column padding-vs">
                      <EducationContainer />
                      <Projects />
                      <Certificates />
                      <Achievement />
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="ui segment text-center margin-no border-none box-shadow-none">
        <div className="ui positive button" onClick={printHandler}>
          Print or Save as Pdf
        </div>
      </div>
    </div>
  );
}

export default Home;
