// src/App.jsx
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
import AlunoLayout from "./pages/aluno/AlunoLayout";
import DashboardAluno from "./pages/aluno/DashboardAluno";
import BuscarHorarios from "./pages/aluno/BuscarHorarios";
import AgendarMonitoria from "./pages/aluno/AgendarMonitoria";
import ConfirmacaoMonitoria from "./pages/aluno/ConfirmacaoMonitoria";
import MinhasMonitorias from "./pages/aluno/MinhasMonitorias";

// COORDENADOR
import DashboardCoord from "./pages/coordenador/DashboardCoord";
import NovoRegistroCoord from "./pages/coordenador/NovoRegistro";
import GerenciarDisciplinas from "./pages/coordenador/GerenciarDisciplinas";
import CadastrarDisciplina from "./pages/coordenador/CadastrarDisciplina";
import EditarDisciplina from "./pages/coordenador/EditarDisciplina";
import ExcluirDisciplina from "./pages/coordenador/ExcluirDisciplina";
import GerenciarUsuarios from "./pages/coordenador/GerenciarUsuarios";
import CadastrarUsuario from "./pages/coordenador/CadastrarUsuario";
import EditarUsuario from "./pages/coordenador/EditarUsuario";
import RemoverUsuario from "./pages/coordenador/RemoverUsuario";

import AuthUniversal from "./pages/auth/AuthUniversal";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Inicial */}
        <Route path="/auth" element={<AuthUniversal />} />

        {/* MONITOR */}
        <Route path="/dashboard" element={<DashboardMonitoria />} />
        <Route path="/meus-horarios" element={<MeusHorariosM />} />
        <Route path="/agendamentos" element={<AgendamentosM />} />
        <Route path="/atendimentos" element={<AtendimentosRegistro />} />
        <Route path="/relatorios" element={<RelatoriosM />} />

        {/* ALUNO (com layout e menu lateral único) */}
        <Route path="/aluno" element={<AlunoLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardAluno />} />
          <Route path="buscar-horarios" element={<BuscarHorarios />} />
          <Route path="agendar" element={<AgendarMonitoria />} />
          <Route path="agendar/confirmacao" element={<ConfirmacaoMonitoria />} />
          <Route path="minhas-monitorias" element={<MinhasMonitorias />} />
          <Route path="configuracoes" element={<SettingsM />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* aliases antigos do aluno */}
        <Route path="/aluno/agendar-monitoria" element={<Navigate to="/aluno/agendar" replace />} />
        <Route
          path="/aluno/agendar-monitoria/confirmacao"
          element={<Navigate to="/aluno/agendar/confirmacao" replace />}
        />
        <Route path="/aluno/meus-agendamentos" element={<Navigate to="/aluno/minhas-monitorias" replace />} />

        {/* COORDENADOR */}
        <Route path="/coordenador" element={<Navigate to="/coordenador/dashboard" replace />} />
        <Route path="/coordenador/dashboard" element={<DashboardCoord />} />
        <Route path="/coordenador/novo-registro" element={<NovoRegistroCoord />} />
        <Route path="/coordenador/disciplinas" element={<GerenciarDisciplinas />} />
        <Route path="/coordenador/disciplinas/nova" element={<CadastrarDisciplina />} />
        <Route path="/coordenador/disciplinas/editar/:id" element={<EditarDisciplina />} />
        <Route path="/coordenador/disciplinas/excluir/:id" element={<ExcluirDisciplina />} />
        <Route path="/coordenador/usuarios" element={<GerenciarUsuarios />} />
        <Route path="/coordenador/usuarios/novo" element={<CadastrarUsuario />} />
        <Route path="/coordenador/usuarios/editar/:id" element={<EditarUsuario />} />
        <Route path="/coordenador/usuarios/remover/:id" element={<RemoverUsuario />} />
        <Route path="/coordenador/configuracoes" element={<SettingsM />} />
        <Route path="/coordenador/logout" element={<Logout />} />
        <Route path="/coordenador/*" element={<Navigate to="/coordenador/dashboard" replace />} />

        {/* SHARED */}
        <Route path="/configuracoes" element={<SettingsM />} />
        <Route path="/logout" element={<Logout />} />

        {/* fallback global */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;