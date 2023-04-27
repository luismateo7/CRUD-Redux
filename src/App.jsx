import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Productos from "./components/Productos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Productos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;