import React, { useReducer } from "react";
import firebase from "../../firebaseDB";
import PedidoContext from "./pedidoContext";
import PedidoReducer from "./pedidoReducer";
import { SELECCIONAR_PRODUCTO } from "../../types";
import { CONFIRMAR_COMPRA, ACTUALIZAR_TOTAL } from "../../types";
import { MOSTRAR_RESUMEN } from "../../types";

const PedidoState = (props) => {
  const inicialState = {
    Home: [],
    catalogos: null,
    total: 0,
  };

  const [state, dispatch] = useReducer(PedidoReducer, inicialState);

  const seleccionarproducto = (catalogos) => {
    dispatch({ type: SELECCIONAR_PRODUCTO, payload: catalogos });
  };

  const confirmarcompra = (compra) => {
    dispatch({ type: CONFIRMAR_COMPRA, payload: compra });
  };

  const actualizarTotal = (nuevoTotal) => {
    dispatch({ type: ACTUALIZAR_TOTAL, payload: nuevoTotal });
  };

  const mostrarresumen = (total) => {
    dispatch({ type: MOSTRAR_RESUMEN, payload: total });
  };

  return (
    <PedidoContext.Provider
      value={{
        Home: state.Home,
        catalogos: state.catalogos,
        total: state.total,
        seleccionarproducto,
        confirmarcompra,
        actualizarTotal,
        mostrarresumen,
      }}
    >
      {props.children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;