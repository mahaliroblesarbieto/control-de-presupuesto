import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import shortid from "shortid";
import Error from "./Error";


const Formulario = ({guardarGasto, guardarCrearGasto}) => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState("");
  const [error, guardarError] = useState(false);

  const agregarGasto = e => {
    e.preventDefault();
    if (cantidad < 1 || nombre.trim() === "" || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false);
    console.log("se ejecuto agregar gasto");
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
  }
  guardarGasto(gasto);
  guardarCrearGasto(true);
  guardarNombre('');
  guardarCantidad('');
  };

 

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquì</h2>
      {error ? (
        <Error
          mensaje={"Ambos campos son obligatorios o Presupuesto Incorrecto"}
        />
      ) : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. transporte"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 200"
          value={cantidad}
          onChange={e => guardarCantidad(parseInt(e.target.value))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
      </div>
    </form>
  );
};

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
