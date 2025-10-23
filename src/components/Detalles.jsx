import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class Detalles extends Component {
  url = Global.apiCoches;

  state = {
    coche: null,
  };

  loadCoche = () => {
    var id = this.props.id;
    var request = "api/coches/findcoche/" + id;

    axios.get(this.url + request).then((response) => {
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
        <h1>Detalles del coche</h1>
        <hr />
        {this.state.coche !== null && (
          <div>
            <h1>
              {this.state.coche.marca} {this.state.coche.modelo}
            </h1>
            <h2>{this.state.coche.conductor}</h2>
            <img src={this.state.coche.imagen} alt={this.state.coche.marca} />
          </div>
        )}
      </div>
    );
  }
}
