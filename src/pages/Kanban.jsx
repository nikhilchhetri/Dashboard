import React from "react";
import { Header } from "../components";
import {
  ColumnDirective,
  KanbanComponent,
  ColumnsDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../data/dummy";

const Kanban = () => {
  return (
    <div className="mt-24 m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status">
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
