// You can delete this file if you're not using it
import "./src/css/index.css";
import RootLayout from "./src/components/RootLayout.jsx";
import React from "react";


export const wrapRootElement = ({ element }) => 
<RootLayout>{element}</RootLayout>;