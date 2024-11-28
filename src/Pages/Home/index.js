import "./App.css";
import Card from "../../Components/Card";
import Header from "../../Components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <h1>Meu plano</h1>
        <button>Adicionar</button>
        <Card />
      </div>
    </div>
  );
}

export default Home;
