import React from "react";
import InfoSection from "../../InfoBlock";

import ContactSection from "../../ContactSection";

function Home() {
  return (
    <div className="container flex-direction">
      <div className="intro">
        <InfoSection />
      </div>
      <div className="content">
        <ContactSection></ContactSection>
      </div>
    </div>
  );
}

export default Home;
