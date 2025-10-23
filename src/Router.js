import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./components/Home";
import MenuCoches from "./components/MenuCoches";
import Add from "./components/Add";
import Detalles from "./components/Detalles";
import Update from "./components/Update";

export default class Router extends Component {
  render() {
    function DetallesElement() {
      var { id } = useParams();

      return <Detalles id={id} />;
    }

    function UpdateElement() {
      var { id } = useParams();

      return <Update id={id} />;
    }

    return (
      <BrowserRouter>
        <MenuCoches />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crear" element={<Add />} />
          <Route path="/detalles/:id" element={<DetallesElement />} />
          <Route path="/update/:id" element={<UpdateElement />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
