import { OBTENER_CATALOGO } from "../../types";

export default (state,action) => {
    switch(action.type){
        case OBTENER_CATALOGO:
            return {
                ...state,
                catalogo: action.payload
            }
        default:
            return state;
    }
}