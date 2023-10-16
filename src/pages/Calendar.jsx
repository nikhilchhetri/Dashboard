import React from "react";
import { Header } from "../components";
import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";

const Calendar = () => {
  return (
    <div className="mt-24 m-2 md:10 p-2 md:10 rounded-3xl bg-white ">
      <Header category="Page" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{
          dataSource: scheduleData,
        }}
        selectedDate={new Date(2021, 0, 10)}>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
