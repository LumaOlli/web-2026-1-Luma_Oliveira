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

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirecionamento inicial */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* MONITOR */}
        <Route path="/dashboard" element={<DashboardMonitoria />} />
        <Route path="/meus-horarios" element={<MeusHorariosM />} />
        <Route path="/agendamentos" element={<AgendamentosM />} />
        <Route path="/atendimentos" element={<AtendimentosRegistro />} />
        <Route path="/relatorios" element={<RelatoriosM />} />

        {/* ALUNO */}
        <Route path="/aluno/dashboard" element={<DashboardAluno />} />
        <Route path="/aluno/buscar-horarios" element={<BuscarHorarios />} />
        <Route path="/aluno/minhas-monitorias" element={<MinhasMonitorias />} />
        <Route path="/aluno/agendar" element={<AgendarMonitoria />} />
        <Route path="/aluno/agendar/confirmacao" element={<ConfirmacaoMonitoria />} />
        <Route path="/aluno/agendar-monitoria" element={<Navigate to="/aluno/agendar" replace />} />
        <Route path="/aluno/agendar-monitoria/confirmacao" element={<Navigate to="/aluno/agendar/confirmacao" replace />} />

        {/* COORDENADOR */}
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
        <Route path="/coordenador" element={<Navigate to="/coordenador/dashboard" replace />} />

        {/* SHARED */}
        <Route path="/configuracoes" element={<SettingsM />} />
        <Route path="/aluno/configuracoes" element={<SettingsM />} />
        <Route path="/coordenador/configuracoes" element={<SettingsM />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/aluno/logout" element={<Logout />} />
        <Route path="/coordenador/logout" element={<Logout />} />

        {/* Fallback único */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;