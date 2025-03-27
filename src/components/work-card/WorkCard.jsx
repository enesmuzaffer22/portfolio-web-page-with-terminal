import React, { useState } from "react";

function WorkCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="p-6 border border-white w-[1280px] min-h-[128px] justify-center flex flex-col items-center rounded-lg transition-all duration-300 ease-in-out hover:opacity-80 cursor-pointer"
    >
      <div className="card-header flex items-center justify-between w-full">
        <div className="card-header-content flex items-center gap-6">
          <img src="" alt="LOGO" className="text-white h-12 w-12" />
          <h3 className="text-white text-[20px]">
            COMPANY NAME | <b>JOB TITLE</b>
          </h3>
        </div>

        <i
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } bi bi-chevron-down text-white text-[20px] transition-transform duration-300 ease-in-out`}
        ></i>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="card-content transform transition-all duration-300 ease-in-out">
          <p className="text-[16px] text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aut vel,
            repudiandae nostrum reprehenderit odio recusandae architecto modi
            eligendi nesciunt? Ad, optio. Soluta exercitationem harum doloribus,
            possimus repellat perferendis quae.Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. A aut vel, repudiandae nostrum
            reprehenderit odio recusandae architecto modi eligendi nesciunt? Ad,
            optio. Soluta exercitationem harum doloribus, possimus repellat
            perferendis quae. Soluta exercitationem harum doloribus, possimus
            repellat perferendis quae. Soluta exercitationem harum doloribus,
            possimus repellat perferendis quae.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
