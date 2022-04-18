import React from "react";
import image from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

const Pagina404 = () => {
  return (
    <main className="contaniner flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={image} alt="imagem erro 404" />
      <p className="naoencontrado-texto">Ops, page not found!</p>
    </main>
  );
};

export default Pagina404;
