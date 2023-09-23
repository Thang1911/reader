import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Filedisplay from "./Components/Filedisplay";
const routers = createBrowserRouter([
  { path: "/:fileName", element: <Filedisplay /> },
  { path: "", element: <Home /> },
]);
export default routers;
