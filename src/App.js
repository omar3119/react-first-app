import logo from "./logo.svg";
import "./App.css";
import Input from "./componentes/Input";
import Filter from "./componentes/FilterWord";
import CardCuali from "./componentes/CardCuali";
import CardApertura from "./componentes/CardApertura";

import Card from "./componentes/CardObjeciones";
import CardTransicion from "./componentes/CardTransicion";

function App() {
  const manejarClick = (e) => {
    if (e.target.className === "apertura") {
      
    }
    if (e.target.className === "cuali") {
      alert("cuali");
    }
  };

  return (
    <div className="App">
      <h1>WIKI DE OBJECIONES</h1>
      <div className="container-input">
        <Input />
        <section className="container-filter">
          <ul>
            <Filter
              clase="apertura"
              texto="Apertura"
              manejarClick={manejarClick}
            />
            <Filter
              clase="cuali"
              texto="Cualificación"
              manejarClick={manejarClick}
            />
            <Filter
              clase="transicion"
              texto="Cierre de transición"
              manejarClick={manejarClick}
            />
            <Filter
              clase="objecion"
              texto="Objeciones"
              manejarClick={manejarClick}
            />
          </ul>
        </section>
      </div>
      <section className="container-cards">
      <CardApertura />
        <CardCuali />
        <Card />
        <CardTransicion />
      </section>
    </div>
  );
}

export default App;
