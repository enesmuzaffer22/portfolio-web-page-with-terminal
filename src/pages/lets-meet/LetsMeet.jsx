import React from "react";
import LetsMeetImg from "../../assets/lets-meet-img.jpg";

function LetsMeet() {
  return (
    <div className="bg-transparent flex h-full w-full justify-center items-center">
      <div className="flex items-center gap-16 w-[80%] xl:w-[1000px]">
        <img src={LetsMeetImg} alt="" className="rounded-lg hidden lg:flex" />
        <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px]">
          Hello, I’m Muzaffer, a final-year Computer Engineering student at
          Istanbul University of Health and Technology. I’m pursuing a career as
          a{" "}
          <b>
            <i>Front-End Developer</i>
          </b>{" "}
          and continuously improving my skills in this field. I actively work
          with{" "}
          <b>
            <i>JavaScript, React, Angular, Tailwind, and SASS</i>
          </b>{" "}
          to build modern and responsive web applications. <br></br>
          <br></br>In addition to development, I have a strong interest in
          graphic design, which I explore as a hobby. I enjoy creating visually
          appealing designs using{" "}
          <b>
            <i>Figma, Adobe Photoshop, and Adobe Illustrator.</i>
          </b>
        </p>
      </div>
    </div>
  );
}

export default LetsMeet;
