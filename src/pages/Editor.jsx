import React from "react";
import Header from "../components/Header";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
const Editor = () => {
  return (
    <div className="mt-24 m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        {}
        <Inject services={[Toolbar, QuickToolbar, HtmlEditor, Image, Link]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
