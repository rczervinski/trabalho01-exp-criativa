import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const updateUser = (req, res) => {
  const userId = req.params.id;
  const { nome, anoNascimento, endereco, genero, cpf } = req.body;

  if (!nome || !anoNascimento || !endereco || !genero || !cpf) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
  }

  const q = "UPDATE usuarios SET nome = ?, anoNascimento = ?, endereco = ?, genero = ?, cpf = ? WHERE id = ?";
  const values = [nome, anoNascimento, endereco, genero, cpf, userId];

  db.query(q, values, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Usuário não encontrado!" });
    return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
  });
};

export const deleteUser = (req, res) => {
  const userId = req.params.id;

  const q = "DELETE FROM usuarios WHERE id = ?";
  db.query(q, [userId], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Usuário não encontrado!" });
    return res.status(200).json({ message: "Usuário deletado com sucesso!" });
  });
};

export const createUser = (req, res) => {
  const { nome, anoNascimento, endereco, genero, cpf } = req.body;

  if (!nome || !anoNascimento || !endereco || !genero || !cpf) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
  }

  const checkCpfQuery = "SELECT * FROM usuarios WHERE cpf = ?";
  db.query(checkCpfQuery, [cpf], (err, result) => {
    if (err) {
      console.log("Erro ao verificar CPF:", err);
      return res.status(500).json({ error: "Erro ao verificar CPF" });
    }

    if (result.length > 0) {
      return res.status(400).json({ message: "CPF já cadastrado!" });
    }

    const q = "INSERT INTO usuarios (nome, anoNascimento, endereco, genero, cpf) VALUES (?, ?, ?, ?, ?)";
    const values = [nome, anoNascimento, endereco, genero, cpf];

    db.query(q, values, (err, data) => {
      if (err) {
        console.log("Erro no INSERT:", err);
        return res.status(500).json({ error: "Erro ao cadastrar usuário, CPF já existente!" });
      }
      return res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    });
  });
};
