import React from "react";
import SidebarMenu from "../../components/SidebarMenu"; // Importando o componente padronizado
import Header from '../../components/Header';
import "./meus-horariosM.css";

export default function MeusHorariosM() {
  return (
    <div className="schedule-page">
      {/* CORREÇÃO: Usando o componente global para garantir que Configurações/Sair funcionem */}
      <SidebarMenu />

      {/* CONTEÚDO PRINCIPAL */}
      <main className="schedule-content">
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

/* --- ÍCONES ESPECÍFICOS DESTA PÁGINA (Apenas os que não estão na Sidebar) --- */

function IconBase({ children, viewBox = "0 0 24 24" }) {
  return (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function PlusCircleIcon() { return <IconBase><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></IconBase>; }
function CalendarMiniIcon() { return <IconBase><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M15 3v4M9 3v4M4 10h16" /></IconBase>; }
function ClockMiniIcon() { return <IconBase><circle cx="12" cy="12" r="8" /><path d="M12 8v5l3 2" /></IconBase>; }
function SaveIcon() { return <IconBase><path d="M5 4h11l3 3v13H5Z" /><path d="M9 4v5h6V4" /><rect x="9" y="14" width="6" height="4" /></IconBase>; }
function AddCalendarIcon() { return <IconBase><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M12 13v6M9 16h6" /></IconBase>; }