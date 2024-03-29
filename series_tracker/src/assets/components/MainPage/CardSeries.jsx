import React from "react";

function CardSeries({ serie }) {
  return (
    <div>
      <img src={serie.image} />
      <h3>{serie.name}</h3>
      <p>{serie.officialSite}</p>
    </div>
  );
}

export default CardSeries;
