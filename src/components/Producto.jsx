import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { eliminarProductosAction } from "../actions/productoActions";
import Swal from "sweetalert2";

export default function Producto({ producto }) {

    //Utilizar useDispatch y te crea una función
    const dispatch = useDispatch();

    const { nombre, precio, id } = producto;

    const confirmarEliminarProducto = id => {

        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un producto que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                //Pasarlo al action
                dispatch(eliminarProductosAction(id))

            }
        })
    }

    return (
        <tr className="text-center">
            <td>{nombre}</td>
            <td> <span className="font-weight-bold">$ {precio}</span> </td>
            <td className="acciones">
                <Link to={`/productos/editar/${id}`} className="btn  btn-primary mr-2"> Editar </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}
