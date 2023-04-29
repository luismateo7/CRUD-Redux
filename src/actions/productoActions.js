import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    COMENZAR_ELIMINACION_PRODUCTO,
    ELIMINACION_PRODUCTO_EXITO,
    ELIMINACION_PRODUCTO_ERROR
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
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

//Función que descarga los productos de la DB
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos());

        try {
            const { data } = await clienteAxios.get("/productos")
            dispatch(descargaProductosExitosa(data))
        } catch (error) {
            dispatch(descargaProductosError(true))
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = state => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: state
})

//Función de eliminación de productos
export function eliminarProductosAction(id) {
    return async (dispatch) => {
        dispatch(eliminarProducto(id));

        try {
            await clienteAxios.delete(`productos/${id}`);
            dispatch(eliminarProductoExitoso())

            Swal.fire(
                'Eliminado',
                'El producto se ha eliminado exitosamente',
                'success'
            )

        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError(true))
        }
    }
}

const eliminarProducto = id => ({
    type: COMENZAR_ELIMINACION_PRODUCTO,
    payload: id
})

const eliminarProductoExitoso = () => ({
    type: ELIMINACION_PRODUCTO_EXITO,
})

const eliminarProductoError = state => ({
    type: ELIMINACION_PRODUCTO_ERROR,
    payload: state
})