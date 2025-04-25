import { useNavigate } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Bem-vindo!</h1>
      <button className="button-users" onClick={() => navigate("/usuarios")}>LISTAR USUÁRIOS</button>
      <button className="button-form" onClick={() => navigate("/cadastro")}> CADASTRAR </button>
      <h2>RENAN CZERVINSKI</h2>
    </div>
  );
};

export default Home;
