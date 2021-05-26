import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import intelligence from "../img/intelligence.svg";
import design from "../img/design.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skills-container-main">
        <SkillsSection skill={"Javascript"} progress={"90%"} />
        <SkillsSection skill={"Typescript"} progress={"50%"} />
        <SkillsSection skill={"React Js"} progress={"70%"} />
        <SkillsSection skill={"Node Js"} progress={"85%"} />
        <SkillsSection skill={"Angular"} progress={"95%"} />
        <SkillsSection skill={"Python"} progress={"60%"} />
        <SkillsSection skill={"Java"} progress={"70%"} />
        <SkillsSection skill={"GO"} progress={"95%"} />
      </div>
      <Title title={"Services"} span={"Services"} />
      <div className="services-container">
        <ServicesSection
          image={design}
          title={"Web Design"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, voluptate."
          }
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial Intelligence"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, voluptate."
          }
        />
        <ServicesSection
          image={gamedev}
          title={"Game Development"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, voluptate."
          }
        />
      </div>
    </div>
  );
}

export default AboutPage;
