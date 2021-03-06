import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Error from "./Error";

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
  const [cantidad, guardarCantidad] = useState(0);

  const [error, actualizarError] = useState(false);

  const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value));
  };

  const agregarPresupuesto = (e) => {
      e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      actualizarError(true);
      return;
    }
    actualizarError(false);
    actualizarPregunta(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad)

  };
  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje={"Hubo un error"}/> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;
