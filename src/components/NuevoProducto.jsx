import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions de Redux
import { crearNuevoProductosAction } from "../actions/productoActions"

export default function NuevoProducto() {

  //State del componente
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");


  //Utilizar useDispatch y te crea una función
  const dispatch = useDispatch();

  //Mandar a llamar el action de productoAction
  const agregarProducto = (producto) => dispatch( crearNuevoProductosAction(producto) );

  const submitNuevoProducto = e => {
    e.preventDefault();

    //Validar Formulario
    if(nombre.trim === "" || precio <= 0){
      return;
    }

    //Si no hay errores

    //Crear nuevo producto
    agregarProducto({
      nombre,
      precio
    });
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>

            <form
              onSubmit={submitNuevoProducto}
            >
              <div className="form-group">
                <label htmlFor="nombre">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="precio">Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="precio"
                  value={precio}
                  onChange={e => setPrecio(Number(e.target.value))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
