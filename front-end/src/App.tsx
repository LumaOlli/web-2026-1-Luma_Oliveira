import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardMonitoria from "./pages/monitor/DashboardMonitoria";
import MeusHorariosM from "./pages/monitor/MeusHorarios";
import AgendamentosM from "./pages/monitor/Agendamentos";
import AtendimentosRegistro from "./pages/monitor/AtendimentosRegistro";
import RelatoriosM from "./pages/monitor/Relatorios";
import SettingsM from "./pages/shared/Settings"; // 1. IMPORTAR A TELA DE SETTINGS
import Logout from "./pages/shared/Logout"; // Importar a tela de logout que fizemos
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