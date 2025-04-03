/* eslint-disable react/prop-types */
import React, { useState } from "react";

function WorkCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="work-card-container bg-black p-6 border border-white w-[97%] w-max-[1280px] min-h-[72px] justify-center flex flex-col items-center rounded-lg transition-all duration-300 ease-in-out hover:opacity-80"
    >
      <div className="card-header flex items-center gap-6 justify-between w-full">
        <div className="card-header-content flex items-center gap-6">
          <img
            src={props.logo_url}
            alt="LOGO"
            className="text-white h-auto w-10 md:w-12"
          />
          <h3 className="text-white text-[14px] md:text-[20px]">
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
        <div className="card-content mt-6 transform transition-all duration-300 ease-in-out">
          <p className="text-[14px] md:text-[16px] text-white">
            {props.description}
          </p>
          {props.end_date === null && (
            <p className="text-[14px] md:text-[16px] text-white mt-2">
              <b>
                <i>Since {props.start_date}</i>
              </b>
            </p>
          )}
          {props.end_date !== null && (
            <p className="text-[14px] md:text-[16px] text-white mt-2">
              <b>
                <i>
                  {props.start_date} - {props.end_date}
                </i>
              </b>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
