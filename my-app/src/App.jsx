import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/components/home";
import Usuarios from "./pages/components/usuarios";
import Cadastro from "./pages/components/cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;