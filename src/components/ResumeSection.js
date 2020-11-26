import React from "react";
import "./ResumeSection.css";

function ResumeSection() {
  return (
    <div className="resume-box">
      <h1>Resume</h1>
      <div className="category">
        <h2 className="subtitle">Experience</h2>
        <div className="job">
          <h3>
            Software developer, Computer science department at Aalto University
            6/2020 - 9/2020
          </h3>
          <p>
            Worked as a software developer intern. I was responsible for
            interfaces, worked mostly on our api which required changes because
            project. I Also did various other backend related tasks. Some of my
            is open source and can be found on{" "}
            <a href="https://github.com/apluslms/a-plus">GitHub</a>.
          </p>
        </div>
        <div className="job">
          <h3> Teaching assistant, Aalto University 9/2019 - 12/2019</h3>
          <p>
            Held exercise sessions for a programing course with multiple smaller
            projects for freshmen. Learned very valuable skills in reading and
            understanding other peoples code, when helping students with their
            projects
          </p>
        </div>
      </div>
      <div className="category">
        <h2 className="subtitle">Education</h2>
        <div className="job">
          <h3>Computer Science, Aalto University 2018 - 2023</h3>
          <p>
            Finishing my bachelors degree spring 2021 and will continue with my
            masters after that.
          </p>
        </div>
        <div className="job">
          <h3>Finance, Hanken School of Economics 2020 - 2021</h3>
          <p>
            I have always been interested in economics and wanted to combine
            economics with my bachelor so I decided to do a minor in finance at
            Hanken.
          </p>
        </div>
      </div>

      <div className="category">
        <h2 className="subtitle">Languages</h2>
        <ul>
          <li className="lang">English, full working proficiency</li>
          <li className="lang">Finnish, Native </li>
          <li className="lang">Swedish, Native</li>
        </ul>
      </div>
    </div>
  );
}
export default ResumeSection;
