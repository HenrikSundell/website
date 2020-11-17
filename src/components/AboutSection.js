import React from "react";


import "./AboutSection.css";
function AboutSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLable,
    img,
    alt,
    imgStart,
  }) {
    return (
     
    <section className="about-box">
        <h2 className = "title">Morro</h2>
        <h1 className = "subtitle">Intro</h1>
        <p>Aluehallintovirasto oli Lehikoisen mukaan saanut viikonloppuna poliisilta ilmoituksia useista helsinkiläisistä baareista, joissa ihmiset vaikuttivat olevan erittäin humalassa siitä huolimatta, että ravintolat noudattivat ohjeistuksia eivätkä myyneet alkoholia</p>
        <h1 className = "subtitle">Experience</h1>
        <p>Aluehallintovirasto oli Lehikoisen mukaan saanut viikonloppuna poliisilta ilmoituksia useista helsinkiläisistä baareista, joissa ihmiset vaikuttivat olevan erittäin humalassa siitä huolimatta, että ravintolat noudattivat ohjeistuksia eivätkä myyneet alkoholia</p>
        <h1 className = "subtitle">Education</h1>
        <p>Aluehallintovirasto oli Lehikoisen mukaan saanut viikonloppuna poliisilta ilmoituksia useista helsinkiläisistä baareista, joissa ihmiset vaikuttivat olevan erittäin humalassa siitä huolimatta, että ravintolat noudattivat ohjeistuksia eivätkä myyneet alkoholia</p>
        
    </section>
    );
  }
  
  export default AboutSection;
  