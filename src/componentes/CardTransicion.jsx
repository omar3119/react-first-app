import React from "react";

import {
  TitleCards,
  ContentCard,
} from "../componentes/sub-componente/CardComponent";
import "../Hoja-de-estilo/Cards.css";

function CardTransicion() {
  return (
    <div className="section-card">
      <TitleCards titleCards="CIERRE DE TRANSICION" />
      <section className="cards">
        <ContentCard
          title="DEL 1 AL 10"
          paragraph="Juan, en base a lo que te moster, de una escala del  del 1 al 10, 

          siendo 1 no me interesa para nada.
          
          siendo 10 lo hago ahora mismo.
          
           En que punto estas…."
        />
        <ContentCard
          title="RAZON POR LA QUE NO"
          paragraph="Juan, habría alguna razón por la que no hagamos
          esto hoy mismo?"
        />
        <ContentCard
          title="SOLO NECESITO TU OKEY"
          paragraph="“Juan, sos el candidato perfecto para este programa,
          solo necesito tu Okay, hacemos el primer pago y
          arrancamos”"
        />
        <ContentCard
          title="LO HARIAS HOY MISMO"
          paragraph="Juan si te puedo garantizar que con este programa
          duplicamos tu efectividad de cierre en el mes de
          agosto, lo harías hoy mismo?"
        />
      </section>
    </div>
  );
}

export default CardTransicion;
