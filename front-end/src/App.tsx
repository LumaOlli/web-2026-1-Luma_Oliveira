import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardMonitoria from "./pages/DashboardMonitoria";
import MeusHorariosM from "./pages/MeusHorariosM";
import AgendamentosM from "./pages/AgendamentosM";
import AtendimentosRegistro from "./pages/AtendimentosRegistroM";
import RelatoriosM from "./pages/RelatoriosM";
import SettingsM from "./pages/Settings"; // 1. IMPORTAR A TELA DE SETTINGS
import Logout from "./pages/Logout"; // Importar a tela de logout que fizemos
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardMonitoria />} />
        <Route path="/meus-horarios" element={<MeusHorariosM />} />
        <Route path="/agendamentos" element={<AgendamentosM />} />
        <Route path="/atendimentos" element={<AtendimentosRegistro />} />
        <Route path="/relatorios" element={<RelatoriosM />} />
        
        {/* 2. ADICIONAR AS NOVAS ROTAS AQUI */}
        <Route path="/configuracoes" element={<SettingsM />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;