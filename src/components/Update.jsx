import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class Update extends Component {
  url = Global.apiCoches;
  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  state = {
    coche: null,
    status: false,
  };

  updateCoche = (event) => {
    event.preventDefault();

    var request = "api/coches/updatecoche";
    var coche = {
      idCoche: this.cajaId.current.value,
      marca: this.cajaMarca.current.value,
      modelo: this.cajaModelo.current.value,
      conductor: this.cajaConductor.current.value,
      imagen: this.cajaImagen.current.value,
    };

    axios.put(this.url + request, coche).then((response) => {
      console.log("Coche modificado");
      this.setState({
        status: true,
      });
    });
  };

  loadCoche = () => {
    var request = "api/coches/findcoche/" + this.props.id;

    axios.get(this.url + request).then((response) => {
      console.log("Obteniendo coche...");
      this.setState({
        coche: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadCoche();
  };

  render() {
    return (
      <div>
        {this.state.status !== false && <Navigate to="/" />}
        <h1>Modificar coche</h1>
        {this.state.coche !== null && (
          <form>
            <input
              type="number"
              hidden
              className="form-control"
              ref={this.cajaId}
              defaultValue={this.state.coche.idCoche}
            />
            <label className="form-label">Marca</label>
            <input
              className="form-control"
              defaultValue={this.state.coche.marca}
              type="text"
              ref={this.cajaMarca}
            />
            <label className="form-label">Modelo</label>
            <input
              className="form-control"
              defaultValue={this.state.coche.modelo}
              type="text"
              ref={this.cajaModelo}
            />
            <label className="form-label">Conductor</label>
            <input
              className="form-control"
              defaultValue={this.state.coche.conductor}
              type="text"
              ref={this.cajaConductor}
            />
            <label className="form-label">Imagen</label>
            <input
              className="form-control"
              defaultValue={this.state.coche.imagen}
              type="text"
              ref={this.cajaImagen}
            />
            <br />
            <button className="btn btn-info" onClick={this.updateCoche}>
              Actualizar
            </button>
          </form>
        )}
      </div>
    );
  }
}
