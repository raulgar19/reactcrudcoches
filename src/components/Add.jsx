import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class Add extends Component {
  url = Global.apiCoches;

  state = {
    status: false,
  };

  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  addCoche = (event) => {
    event.preventDefault();
    var request = "api/coches/insertcoche";

    var coche = {
      idCoche: this.cajaId.current.value,
      marca: this.cajaMarca.current.value,
      modelo: this.cajaModelo.current.value,
      conductor: this.cajaConductor.current.value,
      imagen: this.cajaImagen.current.value,
    };

    axios.post(this.url + request, coche).then((response) => {
      console.log("Creado correctamente");
      this.setState({ status: true });
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.status === true && <Navigate to="/" />}
        <h1>Crear coche</h1>
        <form className="form">
          <label className="form-label">Id</label>
          <input className="form-control" type="number" ref={this.cajaId} />
          <label className="form-label">Marca</label>
          <input className="form-control" type="text" ref={this.cajaMarca} />
          <label className="form-label">Modelo</label>
          <input className="form-control" type="text" ref={this.cajaModelo} />
          <label className="form-label">Conductor</label>
          <input
            className="form-control"
            type="text"
            ref={this.cajaConductor}
          />
          <label className="form-label">Imagen</label>
          <input className="form-control" type="text" ref={this.cajaImagen} />
          <br />
          <button className="btn btn-success" onClick={this.addCoche}>
            Añadir
          </button>
        </form>
      </div>
    );
  }
}
