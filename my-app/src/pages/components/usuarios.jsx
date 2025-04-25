import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/usuarios.css";

const Usuarios = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8800/usuarios")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error("Erro ao carregar usuários:", err);
      });
  }, []);

  const toggleDetails = (user) => {
    setSelectedUser(selectedUser?.id === user.id ? null : user);
  };

  const handleEdit = (user) => {
    navigate("/cadastro", { state: { user } });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este usuário?")) return;

    fetch(`http://localhost:8800/usuarios/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setData(data.filter((user) => user.id !== id));
        alert("Usuário excluído com sucesso!"); 
      })
      .catch((err) => {
        console.error("Erro ao excluir usuário:", err);
        alert("Erro ao excluir usuário!"); 
      });
  };

  return (
    <div className="container">
      <ul className="list">
        {data.map((user) => (
          <li key={user.id} className="li-list">
            <div className="li-header">
              <p><strong>Nome:</strong> {user.nome}</p>
              <button className="btn-list" onClick={() => toggleDetails(user)}>
                {selectedUser?.id === user.id ? "Ocultar detalhes" : "Mais detalhes"}
              </button>
            </div>
            {selectedUser?.id === user.id && (
              <div className="user-details">
                <p><strong>Ano de Nascimento:</strong> {user.anoNascimento}</p>
                <p><strong>Endereço:</strong> {user.endereco}</p>
                <p><strong>Gênero:</strong> {user.genero}</p>
                <p><strong>CPF:</strong> {user.cpf}</p>
                <div className="actions">
                  <button className="btn-edit" onClick={() => handleEdit(user)}>Editar</button>
                  <button className="btn-delete" onClick={() => handleDelete(user.id)}>Excluir</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;