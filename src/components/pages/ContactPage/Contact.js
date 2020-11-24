import React from "react";
import InfoSection from "../../InfoBlock";

import ContactSection from "../../ContactSection";

function Home() {
  return (
    <div class="container flex-direction">
      <div class="iSntro">
        <InfoSection />
      </div>
      <div class="content">
        <ContactSection></ContactSection>
      </div>
    </div>
  );
}

export default Home;
