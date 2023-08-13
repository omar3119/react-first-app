import React from "react";
import "../Hoja-de-estilo/FilterWord.css";

function Filter({texto,clase, manejarClick}) {
  return (
    <>
        <li className={clase} onClick={manejarClick}>{texto}</li>
    </>
  );
}

export default Filter;
