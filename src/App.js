import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgregarEmpleado from "./empleados/AgregarEmpleado";
import ListadoEmpleados from "./empleados/listadoEmpleados";
import Navegacion from "./plantillas/navegacion";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion/>
        <Routes>
          <Route exact path="/" element={<ListadoEmpleados/>}></Route>
          <Route exact path="/agregar" element={<AgregarEmpleado/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;
