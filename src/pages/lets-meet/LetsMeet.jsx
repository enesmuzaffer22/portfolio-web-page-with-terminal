import React from "react";
import LetsMeetImg from "../../assets/lets-meet-img.jpg";

function LetsMeet() {
  return (
    <div className="bg-transparent flex h-full w-full justify-center items-center">
      <div className="flex items-center gap-16 w-[80%] xl:w-[1000px]">
        <img src={LetsMeetImg} alt="" className="rounded-lg hidden lg:flex" />
        <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px]">
          Hello, I’m Muzaffer. I’m a final-year Computer Engineering student at
          Istanbul University of Health and Technology. I am pursuing my career
          as a <b>Front-End Developer</b> and I am continuously working on
          improving myself in this field. <br></br>
          <br></br>The programming languages and frameworks I actively use:{" "}
          <br></br>
          <br></br>
          <b>
            <i>JavaScript, React, Angular, Tailwind and SASS.</i>
          </b>
          <br></br>
          <br></br>Additionally, I am also interested in graphic design as a
          hobby. I try to stay active in this area as well. <br></br>
          <br></br>The design tools I actively use:
          <br></br>
          <br></br>
          <b>
            <i>Figma, Adobe Photoshop and Adobe Illustrator.</i>
          </b>
        </p>
      </div>
    </div>
  );
}

export default LetsMeet;
