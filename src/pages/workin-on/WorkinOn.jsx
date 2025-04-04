import React, { useEffect, useState } from "react";
import WorkCard from "../../components/work-card/WorkCard";
import supabase from "../../supabase/Supabase";
import style from "./style.module.scss";

function WorkinOn() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("companies").select("*");

      if (error) {
        console.error("Data fetch error: ", error.message);
        return;
      }

      setCardData(data);
    }

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return null; // Eğer dateString null veya undefined ise null döner
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  // Sorting function to order cards by date
  const sortCardsByDate = (cards, isCurrentJob) => {
    return [...cards]
      .filter((card) => card.job_status === isCurrentJob)
      .sort((a, b) => {
        // For current jobs, sort by start date (most recent first)
        if (isCurrentJob) {
          return new Date(b.start_date) - new Date(a.start_date);
        }
        // For past jobs, sort by end date (most recent first)
        else {
          return new Date(b.end_date || 0) - new Date(a.end_date || 0);
        }
      });
  };

  // Get sorted arrays of current and past jobs
  const currentJobs = sortCardsByDate(cardData, true);
  const pastJobs = sortCardsByDate(cardData, false);

  return (
    <div className="bg-transparent h-full overflow-hidden w-full flex items-center justify-center flex-col gap-6">
      <div
        className={`${style.scrollbarCustom} pb-1 flex flex-col gap-6 w-[80%] h-[80%] overflow-scroll overflow-x-hidden`}
      >
        <div className="workin-on-cards-container flex flex-col gap-6">
          <h3 className="text-white text-[20px]">
            <b>WORKIN' ON</b>
          </h3>

          {currentJobs.map((data) => (
            <WorkCard
              key={data.id}
              description={data.description}
              company_name={data.name}
              position={data.position}
              start_date={formatDate(data.start_date)}
              end_date={formatDate(data.end_date)}
              logo_url={data.logo_url}
            />
          ))}
        </div>

        <div className="worked-on-cards-container flex flex-col gap-6">
          <h3 className="text-white text-[20px]">
            <b>WORKED ON</b>
          </h3>

          {pastJobs.map((data) => (
            <WorkCard
              key={data.id}
              description={data.description}
              company_name={data.name}
              position={data.position}
              start_date={formatDate(data.start_date)}
              end_date={formatDate(data.end_date)}
              logo_url={data.logo_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkinOn;
