// Vistas:
import Landing from "./views/Landing/Landing.jsx";
import Home from "./views/Home/Home.jsx";
// import Create from "./views/Create/Create.jsx";
// import Edit from "./views/Edit/Edit.jsx";
// import Detail from "./views/Detail/Detail.jsx";
// import About from "./views/About/About.jsx";
// import Error from "./views/Error/Error.jsx";
// hooks, routers, reducers:
import { Route, Routes } from "react-router-dom";
// Variables de entorno:
import getParamsEnv from "./functions/getParamsEnv.js";
const { ROOT, HOME } = getParamsEnv();

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={ROOT} element={<Landing />} />
        <Route path={HOME} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;