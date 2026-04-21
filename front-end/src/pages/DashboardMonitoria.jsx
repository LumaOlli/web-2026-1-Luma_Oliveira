import React from "react";
import SidebarMenu from "../components/SidebarMenu"; // Importação do componente unificado
import Header from '../components/Header';
import "./dashboard-monitoria.css";

// Dados específicos das notificações do Dashboard
const notices = [
  {
    title: "Cancelamento de Agendamento",
    message: "O aluno Maria Silva cancelou o horário das 14:00 hoje.",
    time: "15 min atrás",
    tone: "danger",
    icon: <CloseCircleIcon />,
  },
  {
    title: "Novo Agendamento Realizado",
    message: "João Pedro reservou o horário de amanhã às 09:00.",
    time: "2 horas atrás",
    tone: "success",
    icon: <CalendarCheckIcon />,
  },
];

// Dados específicos dos próximos atendimentos
const appointments = [
  {
    status: "AGORA",
    title: "Recursividade e Pilha de Execução",
    student: "Carlos Mendes",
    course: "Software",
    time: "10:00 - 11:30",
    place: "Lab 04 - Bloco C",
    action: <ArrowRightIcon />,
  },
  {
    status: "PRÓXIMO",
    title: "Ponteiros e Alocação Dinâmica",
    student: "Fernanda Lima",
    course: "Computação",
    time: "15:00 - 16:00",
    place: "Sala de Monitoria B",
    action: <DotsIcon />,
  },
];

export default function DashboardMonitoria() {
  return (
    <div className="monitor-dashboard">
      {/* CORREÇÃO: Agora usamos o componente padronizado que já tem os NavLinks de Configurações e Sair */}
      <SidebarMenu />

      <main className="content">
        <Header titulo="Dashboard de Monitoria" />

        <div className="dashboard-scroll-area">
          <section className="hero-grid">
            <article className="hero-card">
              <div className="hero-overlay" />
              <div className="hero-content">
                <h3>Bem-vinda de volta, Luma.</h3>
                <p>
                  Você tem 4 atendimentos agendados para hoje. A meta mensal de
                  20 horas está 65% concluída.
                </p>

                <div className="hero-actions">
                  <button className="primary-button">
                    <span className="plus-badge">+</span>
                    Iniciar Atendimento
                  </button>
                  <button className="secondary-button">Ver Cronograma</button>
                </div>
              </div>
            </article>

            <article className="profile-card">
              <div className="profile-head">
                <div className="profile-avatar">
                  <MonitorIcon />
                </div>
                <div>
                  <span className="profile-label">MONITORIA ATIVA</span>
                  <h3>Luma Oliveira</h3>
                  <p>Engenharia de Software</p>
                </div>
              </div>

              <div className="profile-info">
                <div className="info-row">
                  <span>Disciplina</span>
                  <strong>Algoritmos e Estrutura de Dados I</strong>
                </div>
                <div className="info-row">
                  <span>Departamento</span>
                  <strong>Ciências Exatas e Naturais</strong>
                </div>
                <div className="info-row">
                  <span>Orientador</span>
                  <strong>Dr. Ricardo M.</strong>
                </div>
              </div>
            </article>
          </section>

          <section className="stats-grid">
            <article className="card status-card">
              <div className="section-title">
                <div className="section-title-left">
                  <TrendIcon />
                  <h3>Status de Monitoria</h3>
                </div>
                <span className="badge-success">Mês Atual</span>
              </div>
              <div className="hours-line">
                <strong>12h</strong>
                <span>/ 20h meta</span>
              </div>
              <div className="progress-bar">
                <div className="progress-value" style={{ width: '60%' }} />
              </div>
              <p className="status-text">
                Faltam 8 horas para atingir a meta do edital.
                <br />
                Próximo relatório parcial em 5 dias.
              </p>
            </article>

            <article className="card notices-card">
              <div className="section-title">
                <div className="section-title-left">
                  <AlertIcon />
                  <h3>Alertas e Notificações</h3>
                </div>
                <button className="link-button">Limpar Tudo</button>
              </div>
              <div className="notices-list">
                {notices.map((notice) => (
                  <div key={notice.title} className={`notice ${notice.tone}`}>
                    <div className="notice-icon">{notice.icon}</div>
                    <div className="notice-copy">
                      <strong>{notice.title}</strong>
                      <p>{notice.message}</p>
                    </div>
                    <span className="notice-time">{notice.time}</span>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="timeline-card">
            <div className="timeline-header">
              <div>
                <h3>Próximos Atendimentos</h3>
                <p>Resumo do dia: 20 de Abril, 2026</p>
              </div>
              <span className="semester-pill">Semestre 2026.1</span>
            </div>

            <div className="timeline-list">
              <div className="timeline-line" />
              {appointments.map((item, index) => (
                <article key={item.title} className="appointment">
                  <div className={`timeline-dot${index === 0 ? " active" : ""}`} />
                  <div className="appointment-card">
                    <div className="appointment-main">
                      <span className="appointment-status">{item.status}</span>
                      <h4>{item.title}</h4>
                      <p><UserIcon /> Aluno: {item.student} ({item.course})</p>
                    </div>
                    <div className="appointment-side">
                      <strong>{item.time}</strong>
                      <span>{item.place}</span>
                    </div>
                    <button className="appointment-action">{item.action}</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

/* --- ÍCONES INTERNOS DO DASHBOARD (Apenas os que não estão na Sidebar) --- */

function IconBase({ children, viewBox = "0 0 24 24" }) {
  return (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function CalendarCheckIcon() { return <IconBase><rect x="3" y="5" width="18" height="16" rx="2" /><path d="m9 16 2 2 4-5" /></IconBase>; }
function MonitorIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" style={{ width: '100%' }}>
      <defs>
        <linearGradient id="screenGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1bc2ff" /><stop offset="100%" stopColor="#ff5c7d" />
        </linearGradient>
      </defs>
      <rect x="9" y="10" width="46" height="32" rx="3" fill="#1a1f36" />
      <rect x="13" y="14" width="38" height="24" rx="2" fill="url(#screenGradient)" />
      <path d="M28 46h8l4 6H24l4-6Z" fill="#9aa3b2" />
    </svg>
  );
}
function TrendIcon() { return <IconBase><path d="M4 16 10 10l4 4 6-8" /><path d="M20 8v4h-4" /></IconBase>; }
function AlertIcon() { return <IconBase><path d="M12 3v10" /><path d="M12 17h.01" /></IconBase>; }
function CloseCircleIcon() { return <IconBase><circle cx="12" cy="12" r="9" /><path d="m9 9 6 6M15 9l-6 6" /></IconBase>; }
function UserIcon() { return <IconBase><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></IconBase>; }
function ArrowRightIcon() { return <IconBase><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></IconBase>; }
function DotsIcon() { return <IconBase><path d="M5 12h.01M12 12h.01M19 12h.01" /></IconBase>; }