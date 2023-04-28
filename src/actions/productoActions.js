import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from "../types"

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

//Crear nuevos productos
export function crearNuevoProductosAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());

        try {
            await clienteAxios.post('/productos', producto); //Insertar en la API
            dispatch(agregarProductoExito(producto)) //Si todo sale bien, actualizar el state

            //Alerta
            Swal.fire(
                "Correcto",
                "El producto se añadió exitosamente",
                "success"
            )
        } catch (error) {
            console.log(error);
            dispatch(agregarProductoError(true));

            //Alerta
            Swal.fire({
                icon: error,
                title: "Subo un error",
                text: "Hubo un error, intenta de nuevo"
            })
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
