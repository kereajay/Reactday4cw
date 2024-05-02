import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbara from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <div>
     

      <Navbara />
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
