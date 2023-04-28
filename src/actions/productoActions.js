import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from "../types"

import clienteAxios from "../config/axios";

//Crear nuevos productos
export function crearNuevoProductosAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());

        try {
            await clienteAxios.post('/productos', producto); //Insertar en la API
            dispatch(agregarProductoExito(producto)) //Si todo sale bien, actualizar el state
        } catch (error) {
            console.log(error);
            dispatch(agregarProductoError(true));
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

//Si el producto se guarda en la DB
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

//Si hubo un error
const agregarProductoError = (estado) =>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})
