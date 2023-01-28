import ChosenDrug from "../pages/ChosenDrug/ChosenDrug";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const routes = [
   { path: "/", element: <Home /> },
   { path: "/drug/:drugId", element: <ChosenDrug /> },
   { path: "/signUp", element: <SignUp /> },
   { path: "/login", element: <Login /> },
];

export default routes;
