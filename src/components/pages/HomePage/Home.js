import React from "react";
import InfoSection from "../../InfoBlock";

import { homeObjOne } from "./Data";
import AboutSection from "../../AboutSection";

function Home() {
  return (
    <div class="container flex-direction">
      <div class="intro">
        <InfoSection {...homeObjOne} />
      </div>
      <div class="content">
        <AboutSection></AboutSection>
      </div>
    </div>
  );
}

export default Home;
