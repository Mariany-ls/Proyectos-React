import React from "react";
import "./App.css";
import Testimonio from "./componentes/Testimonio";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="contenedor-principal">
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp: </h1>
          <Testimonio
            nombre="Emma Bostian"
            pais="Suecia"
            imagen="emma"
            cargo="Ingeniera de Software"
            empresa="Spotify"
            testimonio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus animi, culpa inventore voluptatibus aliquam incidunt consectetur illum quis. Similique excepturi ipsum sunt commodi dicta maxime quia voluptates facilis officia sequi!"
          />
          <Testimonio
            nombre="Shawn Wang"
            pais="Singapur"
            imagen="shawn"
            cargo="Ingeniero de Software"
            empresa="Amazon"
            testimonio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus animi, culpa inventore voluptatibus aliquam incidunt consectetur illum quis. Similique excepturi ipsum sunt commodi dicta maxime quia voluptates facilis officia sequi!"
          />
          <Testimonio
            nombre="Camila Chima"
            pais="Nigeria"
            imagen="camila"
            cargo="Ingeniera de Software"
            empresa="ChatDesk"
            testimonio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus animi, culpa inventore voluptatibus aliquam incidunt consectetur illum quis. Similique excepturi ipsum sunt commodi dicta maxime quia voluptates facilis officia sequi!"
          />
        </div>
      </div>
    );
  }
}

export default App;
