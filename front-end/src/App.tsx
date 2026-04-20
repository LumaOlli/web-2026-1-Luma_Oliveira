import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardMonitoria from "./pages/DashboardMonitoria";
import MeusHorariosM from "./pages/MeusHorariosM";
import AgendamentosM from "./pages/AgendamentosM";
import AtendimentosRegistro from "./pages/AtendimentosRegistroM";
import RelatoriosM from "./pages/RelatoriosM";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;