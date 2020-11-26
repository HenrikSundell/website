import React from "react";
import InfoSection from "../../InfoBlock";

import ResumeSection from "../../ResumeSection";

function Home() {
  return (
    <div className="container flex-direction">
      <div className="intro">
        <InfoSection />
      </div>
      <div className="content">
        <ResumeSection></ResumeSection>
      </div>
    </div>
  );
}

export default Home;
