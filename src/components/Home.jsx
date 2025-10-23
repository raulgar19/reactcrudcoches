import axios from "axios";
import React, { Component } from "react";
import Global from "../Global";
import { NavLink } from "react-router-dom";
import { Button } from "bootstrap/dist/js/bootstrap.bundle";

export default class Home extends Component {
  url = Global.apiCoches;

  state = {
    coches: [],
  };

  loadCoches = () => {
    var request = "api/coches";

    axios.get(this.url + request).then((response) => {
      this.setState({
        coches: response.data,
      });
    });
  };

  deleteCoche = (id) => {
    var request = "api/coches/deletecoche/" + id;

    axios.delete(this.url + request).then((response) => {
      console.log("Coche eliminado");
      this.loadCoches();
    });
  };

  componentDidMount = () => {
    this.loadCoches();
  };

  render() {
    return (
      <div>
        <h1>Listado de coches</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Conductor</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.coches.map((coche, index) => {
              return (
                <tr key={index}>
                  <td>{coche.idCoche}</td>
                  <td>{coche.marca}</td>
                  <td>{coche.modelo}</td>
                  <td>{coche.conductor}</td>
                  <td>
                    <img
                      className="img-fluid w-50"
                      src={coche.imagen}
                      alt={coche.nombre}
                    />
                  </td>
                  <td>
                    <NavLink
                      className="btn btn-success"
                      to={"/detalles/" + coche.idCoche}
                    >
                      Detalles
                    </NavLink>
                    <NavLink
                      className="btn btn-info"
                      to={"/update/" + coche.idCoche}
                    >
                      Actualizar
                    </NavLink>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteCoche(coche.idCoche)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
