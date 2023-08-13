import React from "react";

export function TitleCards(props) {
  return <h2>{props.titleCards}</h2>;
}

export function ContentCard(props) {
  return (
    <article className="content-card">
      <h3 className="title-card">{props.title}</h3>
      <p className="paragraph-card">{props.paragraph}</p>
    </article>
  );
}
