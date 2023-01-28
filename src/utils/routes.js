import ChosenDrug from "../pages/ChosenDrug/ChosenDrug";
import Home from "../pages/Home/Home";

const routes = [
   { path: "/", element: <Home /> },
   { path: "/drug/:drugId", element: <ChosenDrug /> },
];

export default routes;
