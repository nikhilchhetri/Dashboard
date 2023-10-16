import React from "react";
import Header from "../components/Header";
import { ordersData, ordersGrid } from "../data/dummy";
import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Resize,
  Sort,
} from "@syncfusion/ej2-react-grids";
const Orders = () => {
  return (
    <div className="bg-white rounded-3xl p-2 md:p-10 m-2 md:m-10">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="girdcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Resize,
            Sort,
            Filter,
            ExcelExport,
            PdfExport,
            Edit,
            ContextMenu,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
