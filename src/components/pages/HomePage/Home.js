import React from "react";
import InfoSection from "../../InfoBlock";

import { homeObjOne } from "./Data";
import AboutSection from "../../AboutSection";

function Home() {
  return (
    <div className="container flex-direction">
      <div className="intro">
        <InfoSection {...homeObjOne} />
      </div>
      <div className="content">
        <AboutSection></AboutSection>
      </div>
    </div>
  );
}

export default Home;
