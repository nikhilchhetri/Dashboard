import React from "react";
import { Button } from "../components";
import { earningData } from "../data/dummy";
const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 font-bold">Earnings</p>
              <p className="text-2xl">$63,448.69</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              text="Download"
              bgColor="#3C9C9C"
              color="white"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap gap-1 justify-center items-center">
          {earningData.map((item) => (
            <div
              className="bg-white md:w-56 rounded-2xl p-4 pt-9 dark:text-gray-200 dark:bg-secondary-dark-bg"
              key={item.title}>
              <button
                type="button"
                style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                className="text-2xl rounded-full p-4 hover:drop-shadow-xl opacity-0.9">
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`ml-2 text-sm text-${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
