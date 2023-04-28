import { BrowserRouter, Routes, Route } from "react-router-dom"

//Componentes
import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";

//REDUX
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Productos />} />
          </Route>

          <Route path="/productos">
            <Route path="nuevo" element={<NuevoProducto />} />
            <Route path="editar/:id" element={<EditarProducto />} />
          </Route>

        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;