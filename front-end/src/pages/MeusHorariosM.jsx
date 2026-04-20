import React from "react";
import { NavLink } from "react-router-dom";
import SidebarMenu from "../components/SidebarMenu";
import Header from '../components/Header';
import "./meus-horariosM.css";

// Configuração do Menu Lateral
const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon />, to: "/dashboard" },
  { label: "Meus Horários", icon: <ClockIcon />, to: "/meus-horarios" },
  { label: "Agendamentos", icon: <CalendarIcon />, to: "/agendamentos" },
  { label: "Atendimentos", icon: <UsersIcon />, to: "/atendimentos" },
  { label: "Relatórios", icon: <FileIcon />, to: "/relatorios" },
];

export default function MeusHorariosM() {
  return (
    <div className="schedule-page">
      {/* SIDEBAR */}
      <aside className="schedule-sidebar">
        <div>
          <div className="schedule-brand">
            <div className="schedule-brand-icon">
              <CapIcon />
            </div>
            <div>
              <h1>MMA UFERSA</h1>
              <p>PORTAL DO MONITOR</p>
            </div>
          </div>

          <nav className="schedule-nav">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `schedule-menu-item${isActive ? " active" : ""}`
                }
              >
                <span className="schedule-menu-icon">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="schedule-sidebar-footer">
          <button className="schedule-menu-item footer">
            <span className="schedule-menu-icon">
              <SettingsIcon />
            </span>
            <span>Configurações</span>
          </button>

          <button className="schedule-menu-item footer logout">
            <span className="schedule-menu-icon">
              <LogoutIcon />
            </span>
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="schedule-content">
        {/* PADRONIZAÇÃO: Header unificado para todo o sistema */}
        <Header titulo="Gestão de Disponibilidade" />

        <div className="page-wrapper">
          <section className="schedule-hero">
            <div className="breadcrumb-simple">
              <strong>Monitoria Acadêmica</strong> / Meus Horários
            </div>
            <h2>Meus Horários</h2>
            <p>
              Gerencie sua grade de horários para a disciplina de Cálculo I.
              Mantenha seus horários atualizados para que os alunos possam
              realizar os agendamentos.
            </p>

            <div className="semester-status">
              <span>STATUS DO SEMESTRE</span>
              <strong>Ativo</strong>
            </div>
          </section>

          <section className="schedule-card">
            <div className="card-title">
              <span className="card-title-icon">
                <PlusCircleIcon />
              </span>
              <h3>Cadastrar Novo Horário</h3>
            </div>

            <form className="schedule-form" onSubmit={(e) => e.preventDefault()}>
              <div className="field full">
                <label>DATA DO ATENDIMENTO</label>
                <div className="input-wrap">
                  <input type="date" />
                  <CalendarMiniIcon />
                </div>
              </div>

              <div className="field">
                <label>INÍCIO</label>
                <div className="input-wrap">
                  <input type="time" />
                  <ClockMiniIcon />
                </div>
              </div>

              <div className="field">
                <label>TÉRMINO</label>
                <div className="input-wrap">
                  <input type="time" />
                  <ClockMiniIcon />
                </div>
              </div>

              <div className="field full">
                <label>LOCAL/SALA</label>
                <input type="text" placeholder="Ex: Sala 104, Bloco II" />
              </div>

              <div className="field full switch-row">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider" />
                </label>
                <span className="switch-text">RECORRENTE (FIXO PARA O SEMESTRE)</span>
              </div>

              <div className="field full">
                <button type="submit" className="save-button">
                  <SaveIcon />
                  Salvar Horário Semestral
                </button>
              </div>

              <p className="form-note">
                Os horários cadastrados são replicados para todas as semanas do
                semestre letivo. Você pode editá-los individualmente em caso de
                imprevistos.
              </p>
            </form>
          </section>
        </div>

        <button className="floating-action" aria-label="Adicionar horário">
          <AddCalendarIcon />
        </button>
      </main>
    </div>
  );
}

/* --- ÍCONES (Apenas os necessários para o corpo desta página) --- */

function IconBase({ children, viewBox = "0 0 24 24" }) {
  return (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function DashboardIcon() { return <IconBase><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></IconBase>; }
function ClockIcon() { return <IconBase><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></IconBase>; }
function CalendarIcon() { return <IconBase><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></IconBase>; }
function UsersIcon() { return <IconBase><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="4" /></IconBase>; }
function FileIcon() { return <IconBase><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5" /></IconBase>; }
function SettingsIcon() { return <IconBase><circle cx="12" cy="12" r="3" /><path d="M12 3l1.3 2.8 3.1.4-2.2 2.2.5 3.1-2.7-1.5-2.7 1.5.5-3.1" /></IconBase>; }
function LogoutIcon() { return <IconBase><path d="M10 17l5-5-5-5" /><path d="M15 12H3" /><path d="M21 21V3" /></IconBase>; }
function CapIcon() { return <IconBase><path d="m2 9 10-5 10 5-10 5-10-5Z" /><path d="M6 11.5v4.5c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" /></IconBase>; }
function PlusCircleIcon() { return <IconBase><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></IconBase>; }
function CalendarMiniIcon() { return <IconBase><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M15 3v4M9 3v4M4 10h16" /></IconBase>; }
function ClockMiniIcon() { return <IconBase><circle cx="12" cy="12" r="8" /><path d="M12 8v5l3 2" /></IconBase>; }
function SaveIcon() { return <IconBase><path d="M5 4h11l3 3v13H5Z" /><path d="M9 4v5h6V4" /><rect x="9" y="14" width="6" height="4" /></IconBase>; }
function AddCalendarIcon() { return <IconBase><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M12 13v6M9 16h6" /></IconBase>; }