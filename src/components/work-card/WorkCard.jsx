/* eslint-disable react/prop-types */
import React, { useState } from "react";

function WorkCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="p-6 border border-white w-[95%] w-max-[1280px] min-h-[72px] justify-center flex flex-col items-center rounded-lg transition-all duration-300 ease-in-out hover:opacity-80 cursor-pointer"
    >
      <div className="card-header flex items-center justify-between w-full">
        <div className="card-header-content flex items-center gap-6">
          <img
            src={props.logo_url}
            alt="LOGO"
            className="text-white h-auto w-12"
          />
          <h3 className="text-white text-[20px]">
            {props.company_name} | <b>{props.position}</b>
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
          <p className="text-[16px] text-white">{props.description}</p>
          {props.end_date === null && (
            <p className="text-[16px] text-white">Since {props.start_date}</p>
          )}
          {props.end_date !== null && (
            <p className="text-[16px] text-white">
              {props.start_date} - {props.end_date}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
