import React, { useReducer } from "react";
import firebase from "../../firebaseDB";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";
import { OBTENER_CATALOGO } from "../../types";
import _ from 'lodash'

const FirebaseState = props => {
    const inicialState = {
        catalogo: []
    }
    const [state, dispatch] = useReducer(FirebaseReducer, inicialState)
    const obtenercatalogo = () => {
        firebase.db
            .collection('catalogue')
            .onSnapshot(manejarSnapshot)

        function manejarSnapshot(snapshot) {
            let catalogos = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            //ordenar los datos 
            catalogos = _.sortBy(catalogos, 'categoriaScrollView')
            dispatch({
                type: OBTENER_CATALOGO,
                payload: catalogos
            })
        }
    }
    return (
        <FirebaseContext.Provider
            value={{
                catalogo: state.catalogo, firebase
                , obtenercatalogo
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )

}
export default FirebaseState;