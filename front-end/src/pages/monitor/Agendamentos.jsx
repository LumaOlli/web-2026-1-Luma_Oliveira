import React from "react";
import { NavLink } from "react-router-dom";
import SidebarMenu from "../../components/SidebarMenu";
import Header from '../../components/Header';
import "./Agendamentos.css";

// Configuração do Menu Lateral
const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon />, to: "/dashboard" },
  { label: "Meus Horários", icon: <ClockIcon />, to: "/meus-horarios" },
  { label: "Agendamentos", icon: <CalendarIcon />, to: "/agendamentos" },
  { label: "Atendimento", icon: <ClipboardUserIcon />, to: "/atendimentos" },
  { label: "Relatório", icon: <FileIcon />, to: "/relatorios" },
];

// Dados Mockados dos Agendamentos
const appointments = [
  {
    initials: "MA",
    name: "Mariana Albuquerque",
    registration: "2023001245",
    subject: "Estrutura de Dados I",
    date: "15 Out, 2023",
    time: "14:00 - 15:00",
    status: "AGENDADO",
    statusTone: "scheduled",
    action: "INICIAR",
    actionTone: "primary",
    avatarTone: "blue",
    trailing: "view",
  },
  {
    initials: "RS",
    name: "Ricardo Silva",
    registration: "2022005832",
    subject: "Estrutura de Dados I",
    date: "14 Out, 2023",
    time: "09:30 - 10:30",
    status: "REALIZADO",
    statusTone: "done",
    action: "VER RELATÓRIO",
    actionTone: "secondary",
    avatarTone: "green",
    trailing: "view",
  },
  {
    initials: "BP",
    name: "Beatriz Pinheiro",
    registration: "2023009441",
    subject: "Estrutura de Dados I",
    date: "13 Out, 2023",
    time: "16:00 - 17:00",
    status: "CANCELADO",
    statusTone: "cancelled",
    action: "",
    actionTone: "ghost",
    avatarTone: "red",
    trailing: "info",
  },
  {
    initials: "JC",
    name: "João Cavalcante",
    registration: "2023003310",
    subject: "Cálculo Diferencial",
    date: "16 Out, 2023",
    time: "10:00 - 11:00",
    status: "AGENDADO",
    statusTone: "scheduled",
    action: "INICIAR",
    actionTone: "primary",
    avatarTone: "blue",
    trailing: "view",
  },
];

export default function AgendamentosM() {
  return (
    <div className="appointments-page">
      {/* SIDEBAR FIXA */}
      <aside className="appointments-sidebar">
        <div>
          <div className="appointments-brand">
            <h1>MMA Monitoria</h1>
            <p>PORTAL DO MONITOR</p>
          </div>

          <nav className="appointments-nav">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `appointments-menu-item${isActive ? " active" : ""}`
                }
              >
                <span className="appointments-menu-icon">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="appointments-sidebar-footer">
          {/* CORREÇÃO AQUI: NavLink para Configurações */}
          <NavLink 
            to="/configuracoes" 
            className={({ isActive }) => `appointments-menu-item footer${isActive ? " active" : ""}`}
          >
            <span className="appointments-menu-icon"><SettingsIcon /></span>
            <span>Configurações</span>
          </NavLink>
          
          {/* CORREÇÃO AQUI: NavLink para Sair */}
          <NavLink to="/logout" className="appointments-menu-item footer logout">
            <span className="appointments-menu-icon"><LogoutIcon /></span>
            <span>Sair</span>
          </NavLink>
        </div>
      </aside>

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <main className="appointments-content">
        <Header titulo="Visualizar Agendamentos" />

        <div className="page-body">
          <section className="filters-row">
            <div className="filter-group search">
              <label>BUSCAR ALUNO</label>
              <div className="input-shell">
                <SearchIcon />
                <input placeholder="Nome do aluno ou matrícula..." />
              </div>
            </div>

            <div className="filter-group status">
              <label>STATUS</label>
              <button className="select-shell">
                <span>Todos os Status</span>
                <ChevronDownIcon />
              </button>
            </div>

            <div className="semester-chip">Semestre 2024.1 <span>×</span></div>
          </section>

          <section className="appointments-table">
            <div className="table-head">
              <span>ALUNO</span>
              <span>DISCIPLINA</span>
              <span>DATA & HORÁRIO</span>
              <span>STATUS</span>
              <span>AÇÕES</span>
            </div>

            <div className="table-body">
              {appointments.map((appointment) => (
                <article key={`${appointment.name}-${appointment.date}`} className="appointment-row">
                  <div className="student-cell">
                    <div className={`student-avatar ${appointment.avatarTone}`}>
                      {appointment.initials}
                    </div>
                    <div>
                      <strong>{appointment.name}</strong>
                      <p>Mat: {appointment.registration}</p>
                    </div>
                  </div>

                  <div className="subject-cell">{appointment.subject}</div>

                  <div className="date-cell">
                    <strong>{appointment.date}</strong>
                    <span>{appointment.time}</span>
                  </div>

                  <div className="status-cell">
                    <span className={`status-pill ${appointment.statusTone}`}>
                      {appointment.status}
                    </span>
                  </div>

                  <div className="actions-cell">
                    <button className="eye-button" aria-label="Visualizar">
                      {appointment.trailing === "view" ? <EyeIcon /> : <InfoIcon />}
                    </button>

                    {appointment.action ? (
                      <button className={`action-button ${appointment.actionTone}`}>
                        {appointment.actionTone === "primary" ? <PlayIcon /> : <ReportIcon />}
                        {appointment.action}
                      </button>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="stats-panels">
            <article className="mini-card accent-gold">
              <span className="mini-label">PRÓXIMAS 24H</span>
              <strong>4 Atendimentos</strong>
              <p><BellMiniIcon /> Próximo às 14:00 (Mariana A.)</p>
            </article>

            <article className="mini-card accent-green">
              <span className="mini-label">TAXA DE CONCLUSÃO</span>
              <strong>92%</strong>
              <div className="mini-progress">
                <div className="mini-progress-value" style={{ width: '92%' }} />
              </div>
            </article>

            <article className="summary-card">
              <span className="mini-label">STATUS DO SEMESTRE</span>
              <strong>48 Horas</strong>
              <p>Monitoria ativa em fluxo regular</p>
              <div className="summary-mark">
                <SummaryShapeIcon />
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

/* --- COMPONENTES DE ÍCONES --- */

function IconBase({ children, viewBox = "0 0 24 24" }) {
  return (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function DashboardIcon() { return <IconBase><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></IconBase>; }
function ClockIcon() { return <IconBase><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></IconBase>; }
function CalendarIcon() { return <IconBase><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01" /></IconBase>; }
function ClipboardUserIcon() { return <IconBase><path d="M9 3h6l1 2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2l1-2Z" /><circle cx="12" cy="11" r="2.5" /><path d="M8.5 18a4 4 0 0 1 7 0" /></IconBase>; }
function FileIcon() { return <IconBase><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h6" /></IconBase>; }
function SettingsIcon() { return <IconBase><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></IconBase>; }
function LogoutIcon() { return <IconBase><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></IconBase>; }
function BellMiniIcon() { return <IconBase><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></IconBase>; }
function SearchIcon() { return <IconBase><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></IconBase>; }
function ChevronDownIcon() { return <IconBase><polyline points="6 9 12 15 18 9" /></IconBase>; }
function EyeIcon() { return <IconBase><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></IconBase>; }
function InfoIcon() { return <IconBase><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></IconBase>; }
function PlayIcon() { return <IconBase><polygon points="5 3 19 12 5 21 5 3" /></IconBase>; }
function ReportIcon() { return <IconBase><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></IconBase>; }
function SummaryShapeIcon() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
      <path d="M28 93c15-21 29-31 45-31h18v20H73c-8 0-15 4-21 11H28Z" fill="currentColor" opacity="0.24" />
      <path d="M51 24h41v16H68v33c0 12-10 22-22 22H31V79h15c3 0 5-3 5-6V40H31V24h20Z" fill="currentColor" opacity="0.24" />
    </svg>
  );
}