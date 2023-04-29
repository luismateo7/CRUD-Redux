import { useEffect } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux"
import { obtenerProductosAction } from "../actions/productoActions"
import Producto from "./Producto";

export default function Productos() {

  const dispatch = useDispatch();

  useEffect(() => {
    //Consultar la API
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, [])

  //Obtener el State
  const productos = useSelector(state => state.productos.productos);
  const error = useSelector(state => state.productos.error)
  const cargando = useSelector(state => state.productos.loading)

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>

      { error && <p className="font-weight-bold alert alert-danger text-center mt-4 w-80">Hubo un error</p>}
      { cargando && <p className="text-center">Cargando...</p>}

      <table className="table table-striped w-80 mb-2">
        <thead className="bg-primary table-dark">
          <tr className="text-center">
            <th scope="col">Nombe</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.length === 0
            ? "No hay productos"
            : (
              productos.map( producto => (
                <Producto 
                  key={producto.id}
                  producto={producto}
                />
              ))
            )}
        </tbody>
      </table>
    </>
  )
}
