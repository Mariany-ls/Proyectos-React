import React from "react";

function Testimonio() {
  //componente
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/face1.jpg")}
        alt="Foto de Emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          inventore sit exercitationem laudantium perspiciatis assumenda at
          natus, veniam impedit asperiores officia recusandae nulla quae, illum
          sequi ut iure, labore tempora.{" "}
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
