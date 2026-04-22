import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// MONITOR
import DashboardMonitoria from "./pages/monitor/DashboardMonitoria";
import MeusHorariosM from "./pages/monitor/MeusHorarios";
import AgendamentosM from "./pages/monitor/Agendamentos";
import AtendimentosRegistro from "./pages/monitor/AtendimentosRegistro";
import RelatoriosM from "./pages/monitor/Relatorios";

// SHARED
import SettingsM from "./pages/shared/Settings";
import Logout from "./pages/shared/Logout";

// ALUNO
import DashboardAluno from "./pages/aluno/DashboardAluno";
import BuscarHorarios from "./pages/aluno/BuscarHorarios";
import AgendarMonitoria from "./pages/aluno/AgendarMonitoria";
import ConfirmacaoMonitoria from "./pages/aluno/ConfirmacaoMonitoria";

import "./App.css";
import MinhasMonitorias from "./pages/aluno/MinhasMonitorias";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirecionamento inicial */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* ROTAS DO MONITOR */}
        <Route path="/dashboard" element={<DashboardMonitoria />} />
        <Route path="/meus-horarios" element={<MeusHorariosM />} />
        <Route path="/agendamentos" element={<AgendamentosM />} />
        <Route path="/atendimentos" element={<AtendimentosRegistro />} />
        <Route path="/relatorios" element={<RelatoriosM />} />

        {/* ROTAS DO ALUNO */}
        <Route path="/aluno/dashboard" element={<DashboardAluno />} />
        <Route path="/aluno/buscar-horarios" element={<BuscarHorarios />} />
        <Route path="/aluno/minhas-monitorias" element={<MinhasMonitorias />} />

        {/* rota principal do agendamento (igual ao SidebarAluno) */}
        <Route path="/aluno/agendar" element={<AgendarMonitoria />} />
        <Route
          path="/aluno/agendar/confirmacao"
          element={<ConfirmacaoMonitoria />}
        />

        {/* compatibilidade com rota antiga */}
        <Route
          path="/aluno/agendar-monitoria"
          element={<Navigate to="/aluno/agendar" replace />}
        />
        <Route
          path="/aluno/agendar-monitoria/confirmacao"
          element={<Navigate to="/aluno/agendar/confirmacao" replace />}
        />

        {/* compartilhadas */}
        <Route path="/configuracoes" element={<SettingsM />} />
        <Route path="/aluno/configuracoes" element={<SettingsM />} />
        <Route path="/coordenador/configuracoes" element={<SettingsM />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/aluno/logout" element={<Logout />} />
        <Route path="/coordenador/logout" element={<Logout />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
