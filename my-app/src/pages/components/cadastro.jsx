import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/cadastro.css";

const Cadastro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userToEdit = location.state?.user;
  
  const [nome, setNome] = useState("");
  const [anoNascimento, setAnoNascimento] = useState("");
  const [endereco, setEndereco] = useState("");
  const [genero, setGenero] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (userToEdit) {
      setNome(userToEdit.nome);
      setAnoNascimento(userToEdit.anoNascimento);
      setEndereco(userToEdit.endereco);
      setGenero(userToEdit.genero);
      setCpf(userToEdit.cpf);
    }
  }, [userToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !anoNascimento || !endereco || !genero || !cpf) {
      setError("Todos os campos são obrigatórios!");
      return;
    }

    const userData = { nome, anoNascimento, endereco, genero, cpf };

    try {
      const url = userToEdit 
        ? `http://localhost:8800/usuarios/${userToEdit.id}`
        : "http://localhost:8800/usuarios";
      
      const method = userToEdit ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        navigate("/usuarios");
      } else {
        setError(userToEdit ? "Erro ao atualizar usuário" : "Erro ao cadastrar usuário");
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="container">
      <h1>{userToEdit ? "Editar Usuário" : "Cadastro de Usuário"}</h1>
      <form className="form" onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}

        <div className="input-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="anoNascimento">Ano de Nascimento:</label>
          <input
            type="number"
            id="anoNascimento"
            value={anoNascimento}
            onChange={(e) => setAnoNascimento(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="genero">Gênero:</label>
          <select
            id="genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          {userToEdit ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};

export default Cadastro;