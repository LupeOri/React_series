import React, { useState, useEffect } from "react";
import axios from "axios";
import CardSeries from "./CardSeries";

function ListaSeries() {
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        const dataSeries = response.data.map((serie) => ({
          name: serie.name,
          language: serie.language,
          officialSite: serie.officialSite,
          image: serie.image.original.replace(/"/g, ""),
          url: serie.url,
        }));
        setSeries(dataSeries);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const busquedaSeries = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSeries = series.filter((serie) =>
    serie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Escriba el nombre de la pelicula..."
        value={searchTerm}
        onChange={busquedaSeries}
      />
      {filteredSeries.map((serie, index) => (
        <CardSeries key={index} serie={serie} />
      ))}
    </>
  );
}

export default ListaSeries;
