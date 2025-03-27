import React from "react";
import WorkCard from "../../components/work-card/WorkCard";

function WorkinOn() {
  return (
    <div className="bg-black h-full w-full flex items-center justify-center flex-col gap-6">
      <WorkCard />
      <WorkCard />
      <WorkCard />
    </div>
  );
}

export default WorkinOn;
