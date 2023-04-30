import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { editarProductosAction } from "../actions/productoActions";

export default function EditarProducto() {

  const producto = useSelector(state => state.productos.productoSeleccionado);
  const navigate = useNavigate();

  const [nombre, setNombre] = useState(producto?.nombre);
  const [precio, setPrecio] = useState(producto?.precio)

  const params = useParams();
  const id = Number(params.id);

  const dispatch = useDispatch();

  const submitEditarProducto = e => {
    e.preventDefault();

    dispatch(editarProductosAction({id, nombre, precio}))

    navigate("/")
  }

  return (
    <main className="row justify-content-center my-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            <form
              onSubmit={submitEditarProducto}
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
                Guardar Cambios
              </button>

            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
