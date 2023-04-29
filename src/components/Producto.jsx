import { Link } from "react-router-dom";

export default function Producto({ producto }) {

    const { nombre, precio, id } = producto;

    return (
        <tr className="text-center">
            <td>{nombre}</td>
            <td> <span className="font-weight-bold">$ {precio}</span> </td>
            <td className="acciones">
                <Link to={`/productos/editar/${id}`} className="btn  btn-primary mr-2"> Editar </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                >Eliminar</button>
            </td>
        </tr>
    )
}
