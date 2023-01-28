import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "../utils/routes";
import Header from "./Header/Header";

const Layout = () => {
   const router = useRoutes(routes);

   return (
      <>
         <Header />
         {router}
      </>
   );
};

export default Layout;
