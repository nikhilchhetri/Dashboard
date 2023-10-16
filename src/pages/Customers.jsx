import React from "react";
import Header from "../components/Header";
import { customersData, customersGrid } from "../data/dummy";
import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  Filter,
  GridComponent,
  Inject,
  Page,
  Selection,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
const Customers = () => {
  return (
    <div className="bg-white rounded-3xl p-2 md:p-10 m-2 md:m-10">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        toolbar={["Delete"]}
        width="auto"
        editSettings={{ allowDeleting: true, allowEditing: true }}>
        <ColumnsDirective>
          {customersGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
