import React from "react";

import {
  TitleCards,
  ContentCard,
} from "../componentes/sub-componente/CardComponent";
import "../Hoja-de-estilo/Cards.css";

function CardApertura() {
  return (
    <div className="section-card">
      <TitleCards titleCards="APERTURA" />
      <section className="cards">
  
        <ContentCard
          title="APERTURA"
          paragraph="Juan, gracias por haberte hecho del tiempo para
          este zoom, déjame ser 100% directo, la intención
          de esta video-llamada es mostrarte un poco
          nuestros servicios y si alguno realmente te sirve
          que podamos hacer negocios juntos, cómo lo ves?"
        />
      </section>
    </div>
  );
}

export default CardApertura;