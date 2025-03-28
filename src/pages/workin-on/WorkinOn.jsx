import React, { useEffect, useState } from "react";
import WorkCard from "../../components/work-card/WorkCard";
import supabase from "../../supabase/Supabase";

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

  console.log(cardData);

  return (
    <div className="bg-black h-full overflow-hidden w-full flex items-center justify-center flex-col gap-6">
      <div className="cards-container pb-1 flex flex-col gap-6 w-[80%] h-[80%] overflow-scroll overflow-x-hidden">
        <div className="workin-on-cards-container flex flex-col gap-6">
          <h3 className="text-white text-[20px]">
            <b>WORKIN' ON</b>
          </h3>

          {cardData.map(
            (data) =>
              data.job_status === true && (
                <WorkCard
                  key={data.id}
                  description={data.description}
                  company_name={data.name}
                  position={data.position}
                  start_date={data.start_date}
                  end_date={data.end_date}
                  logo_url={data.logo_url}
                />
              )
          )}
        </div>

        <div className="worked-on-cards-container flex flex-col gap-6">
          <h3 className="text-white text-[20px]">
            <b>WORKED ON</b>
          </h3>

          {cardData.map(
            (data) =>
              data.job_status === false && (
                <WorkCard
                  key={data.id}
                  description={data.description}
                  company_name={data.name}
                  position={data.position}
                  start_date={data.start_date}
                  end_date={data.end_date}
                  logo_url={data.logo_url}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkinOn;
