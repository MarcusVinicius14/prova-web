import "./cardcss.css";

function Card() {
  return (
    <div className="containerCard">
      <h1>titulo</h1>
      <p>descricao</p>
      <p>duracao</p>
      <button className="buttonCard">ver detalhes</button>
      <button className="buttonCard">remover</button>
    </div>
  );
}

export default Card;
