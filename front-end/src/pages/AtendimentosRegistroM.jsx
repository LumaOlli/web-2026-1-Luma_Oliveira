import SidebarMenu from "../components/SidebarMenu";
import "./atendimento-registro.css";


const historyItems = [
  {
    date: "02 OUT",
    title: "Dúvida sobre Limites",
    status: "Resolvido",
    tone: "done",
  },
  {
    date: "25 SET",
    title: "Revisão Pré-Prova",
    status: "Resolvido",
    tone: "done",
  },
  {
    date: "18 SET",
    title: "Derivadas Fundamentais",
    status: "Ausente",
    tone: "missed",
  },
];

export default function AtendimentosRegistro() {
  return (
    <div className="app-layout">
      <SidebarMenu />

      <main className="app-content service-page">
        <header className="service-topbar">
          <div className="service-topbar-left">
            <BookMonitorIcon />
            <h2>Monitoria Acadêmica</h2>
          </div>

          <div className="service-topbar-right">
            <button className="service-icon-button" aria-label="Notificações">
              <BellIcon />
            </button>

            <button className="service-icon-button" aria-label="Ajuda">
              <HelpIcon />
            </button>

            <div className="service-user-block">
              <div className="service-user-copy">
                <strong>Henrique Silva</strong>
                <span>MONITOR DE CÁLCULO I</span>
              </div>

              <div className="service-user-avatar">
                <MonitorIcon />
              </div>
            </div>
          </div>
        </header>

        <section className="service-header">
          <div>
            <div className="service-breadcrumb">
              <span>Atendimentos</span>
              <span className="separator">›</span>
              <strong>Novo Registro</strong>
            </div>
            <h1>Registro de Atendimento</h1>
          </div>

          <div className="scheduled-chip">
            <CalendarCheckIcon />
            <span>Agendado para: 14 de Outubro, 14:30</span>
          </div>
        </section>

        <section className="service-layout-grid">
          <div className="service-main-column">
            <article className="service-student-card">
              <div className="student-profile">
                <div className="student-avatar">
                  <MonitorIcon />
                </div>

                <div className="student-info">
                  <div className="student-meta">
                    <span className="student-status">ATIVO</span>
                    <span className="student-code">MAT-202300451</span>
                  </div>

                  <h3>Mariana Souza Vasconcelos</h3>
                  <p>Ciência e Tecnologia - 3º Semestre</p>
                </div>
              </div>

              <div className="student-doubt-card">
                <div className="doubt-title">
                  <AlertCircleIcon />
                  <strong>Dúvida Reportada</strong>
                </div>

                <p>
                  "Tenho dificuldades em entender a aplicação prática de
                  Integrais por Substituição, especificamente quando envolvem
                  funções trigonométricas no denominador."
                </p>
              </div>
            </article>

            <article className="service-form-card">
              <div className="field-block">
                <label>
                  <SummaryIcon />
                  Resumo do Atendimento
                </label>
                <textarea placeholder="Descreva o que foi resolvido e quais conceitos foram abordados..." />
              </div>

              <div className="field-block">
                <label>
                  <ObservationIcon />
                  Observações Internas (Somente Monitores/Docentes)
                </label>
                <textarea placeholder="Notas sobre o desempenho do aluno ou pontos para revisar futuramente..." />
              </div>
            </article>
          </div>

          <aside className="service-side-column">
            <article className="finish-card">
              <h3>FINALIZAÇÃO</h3>

              <label className="check-row">
                <input type="checkbox" />
                <span className="fake-check" />
                <span>
                  <strong>Dúvida Sanada</strong>
                  <small>Confirme se o aluno compreendeu o conteúdo.</small>
                </span>
              </label>

              <div className="finish-divider" />

              <div className="finish-info">
                <span>Duração Estimada</span>
                <strong>45 min</strong>
              </div>

              <div className="finish-info">
                <span>Tipo</span>
                <em>PRESENCIAL</em>
              </div>

              <div className="finish-info">
                <span>Local</span>
                <strong>Bloco B, Sala 12</strong>
              </div>

              <button className="finish-button">
                <CheckCircleIcon />
                Salvar e Finalizar Atendimento
              </button>
            </article>

            <article className="history-card">
              <h3>HISTÓRICO RECENTE</h3>

              <div className="history-timeline">
                {historyItems.map((item, index) => (
                  <div key={`${item.date}-${item.title}`} className="history-item">
                    <div className={`history-dot ${item.tone}${index === historyItems.length - 1 ? " last" : ""}`} />
                    <div className="history-copy">
                      <span>{item.date}</span>
                      <strong>{item.title}</strong>
                      <p className={item.tone}>{item.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </aside>
        </section>
      </main>
    </div>
  );
}

function IconBase({ children, viewBox = "0 0 24 24" }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function BookMonitorIcon() {
  return (
    <IconBase>
      <path d="M4 5h8a3 3 0 0 1 3 3v11H7a3 3 0 0 0-3 3Z" />
      <path d="M20 5h-8a3 3 0 0 0-3 3v11h8a3 3 0 0 1 3 3Z" />
      <path d="m13 8 2 2 4-4" />
    </IconBase>
  );
}

function BellIcon() {
  return (
    <IconBase>
      <path d="M15 17H5l1.5-2v-4a5.5 5.5 0 0 1 11 0v4L19 17h-4Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </IconBase>
  );
}

function HelpIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.1 9a3 3 0 1 1 4.7 2.5c-.9.6-1.8 1.1-1.8 2.5" />
      <path d="M12 17h.01" />
    </IconBase>
  );
}

function CalendarCheckIcon() {
  return (
    <IconBase>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
      <path d="m9 16 2 2 4-5" />
    </IconBase>
  );
}

function AlertCircleIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5" />
      <path d="M12 16h.01" />
    </IconBase>
  );
}

function SummaryIcon() {
  return (
    <IconBase>
      <path d="M4 7h16M4 12h12M4 17h10" />
      <path d="m17 15 2 2 3-4" />
    </IconBase>
  );
}

function ObservationIcon() {
  return (
    <IconBase>
      <circle cx="9" cy="9" r="3" />
      <path d="M4 20a6 6 0 0 1 10 0" />
      <path d="m14 13 6-6" />
      <path d="m15 7 2 2" />
    </IconBase>
  );
}

function CheckCircleIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </IconBase>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="monitorGradientAttend" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1bc2ff" />
          <stop offset="45%" stopColor="#67c46f" />
          <stop offset="100%" stopColor="#143a6d" />
        </linearGradient>
      </defs>
      <rect x="9" y="10" width="46" height="32" rx="3" fill="#1a1f36" />
      <rect x="13" y="14" width="38" height="24" rx="2" fill="url(#monitorGradientAttend)" />
      <path d="M28 46h8l4 6H24l4-6Z" fill="#9aa3b2" />
      <rect x="20" y="52" width="24" height="2.8" rx="1.4" fill="#c5cbd6" />
    </svg>
  );
}
