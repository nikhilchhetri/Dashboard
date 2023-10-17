import React from "react";
import { Button, SparkLine, Stacked } from "../components";
import { SparklineAreaData, earningData } from "../data/dummy";
import { GoDotFill } from "react-icons/go";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-cover bg-no-repeat bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 shadow-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 font-bold">Earnings</p>
              <p className="text-2xl">$63,448.69</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              text="Download"
              bgColor={currentColor}
              color="white"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap gap-1 justify-center items-center">
          {earningData.map((item) => (
            <div
              className="bg-white md:w-56 rounded-2xl p-4 pt-9 dark:text-gray-200 dark:bg-secondary-dark-bg shadow-xl"
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
      <div className="flex  gap-10 flex-wrap justify-center">
        <div className="bg-white md:w-780 m-3 p-4 rounded-2xl dark:text-gray-200 dark:bg-secondary-dark-bg shadow-xl">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center text-gray-600 gap-2 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center text-green-400 gap-2 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 mt-10 justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="bg-green-400 p-1.5 ml-3 rounded-xl text-center text-xs text-white hover:drop-shadow-xl cursor-pointer">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$43,438</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div className="">
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
