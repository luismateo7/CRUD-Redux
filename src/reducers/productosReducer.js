import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    COMENZAR_ELIMINACION_PRODUCTO,
    ELIMINACION_PRODUCTO_EXITO,
    ELIMINACION_PRODUCTO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    EDITAR_PRODUCTO,
    EDITAR_PRODUCTO_EXITO,
    EDITAR_PRODUCTO_ERROR
} from "../types"

//Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoSeleccionado: null //Producto a relizarce algún action
}

export default function (state = initialState, action) {
    switch (action.type) {
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload
            }

        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }

        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:    
        case ELIMINACION_PRODUCTO_ERROR:
        case EDITAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        
        case COMENZAR_ELIMINACION_PRODUCTO:
        case OBTENER_PRODUCTO_EDITAR:
        case EDITAR_PRODUCTO:
            return{
                ...state,
                productoSeleccionado: action.payload
            }

        case ELIMINACION_PRODUCTO_EXITO:
            return{
                ...state,
                productos: state.productos.filter( producto => producto.id !== state.productoSeleccionado),
                productoSeleccionado: null
            }

        case EDITAR_PRODUCTO_EXITO:
            return{
                ...state,
                productos: state.productos.map( producto => {
                    if(producto.id === action.payload.id){
                        producto = action.payload
                    }
                    return producto                    
                }),
                productoSeleccionado: null
            }

        default:
            return state
    }
}