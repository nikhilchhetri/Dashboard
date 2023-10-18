import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SplineAreaSeries,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { Header } from "../../components";
import {
  areaPrimaryYAxis,
  areaPrimaryXAxis,
  areaCustomSeries,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="mt-24 m-4 md:m-10 p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg dark:text-white">
      <Header category="Chart" title="Inflation Rate in Percentage" />
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#FFFFFF"}>
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => {
            return <SeriesDirective key={index} {...item} />;
          })}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
