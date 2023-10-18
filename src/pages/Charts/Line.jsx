import React from "react";
import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="mt-24 m-4 md:m-10 p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg dark:text-white">
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
