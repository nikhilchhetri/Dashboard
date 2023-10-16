import React from "react";
import Header from "../components/Header";
import { employeesData, employeesGrid } from "../data/dummy";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
const Employees = () => {
  return (
    <div className="bg-white rounded-3xl p-2 md:p-10 m-2 md:m-10 mt-24">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        toolbar={["Search"]}
        width="auto">
        <ColumnsDirective>
          {employeesGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
