import React from "react";

import {
  TitleCards,
  ContentCard,
} from "../componentes/sub-componente/CardComponent";
import "../Hoja-de-estilo/Cards.css";

function CardCuali() {
  return (
    <div className="section-card">
      <TitleCards titleCards="CUALIFCACION" />
      <section className="cards">
        <ContentCard
          title="SITUACIÓN"
          paragraph="Cuál es tu Situación Actual?
          Ya tomaste algún Curso de Venta?
          Cuál es tu Volumen de Venta Actual?"
        />
        <ContentCard
          title="PROBLEMA"
          paragraph="Por qué crees que no estás logrando esas metas de venta?
          Cuál dirías que es tu mayor obstáculo a la hora de vender?
          Si este programa te sacara de encima un problema, cuál sería?
          "
        />
        <ContentCard
          title="INTERES"
          paragraph="Porqué te interesa esto?
          Porqué te interesa ahora?
          A la hora de decidir un entrenamiento de venta, qué sería importante
          para vos que incluya?
          Cuál es el principal valor que le ves al campamento?
          Qué debería incluir para que me digas es lo que estoy buscando?
          
          "
        />
      </section>
    </div>
  );
}

export default CardCuali;
