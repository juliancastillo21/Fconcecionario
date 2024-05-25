import { SELECCIONAR_PRODUCTO,CONFIRMAR_COMPRA,MOSTRAR_RESUMEN,ACTUALIZAR_TOTAL } from "../../types";

export default (state,action) => {
    switch(action.type){
            case SELECCIONAR_PRODUCTO:
                return{
                    ...state,
                    catalogos: action.payload
                }
            case CONFIRMAR_COMPRA:
                return{
                    ...state,
                    compra:[state.compra, action.payload]
                }
            case MOSTRAR_RESUMEN:
                return{
                    ...state,
                    total: action.payload
                }
                case ACTUALIZAR_TOTAL:
                    return{
                        ...state,
                        total: state.total + action.payload
                    }
        default:
            return state;
    }
}