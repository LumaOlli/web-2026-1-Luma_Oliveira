import SidebarMenu from "../components/SidebarMenu";
import "./relatoriosM.css";

const guidelines = [
  "O relatório deve ser preenchido de forma imparcial e profissional.",
  "Mencione especificamente o uso de laboratórios ou ferramentas digitais.",
  "O coordenador terá até 5 dias úteis para validar as horas.",
];

export default function RelatoriosM() {
  return (
    <div className="app-layout">
      <SidebarMenu />

      <main className="app-content report-page">
        <header className="report-topbar">
          <div className="report-topbar-left">
            <h2>Relatório Semestral</h2>
            <span>SEMESTRE 2023.2</span>
          </div>

          <div className="report-topbar-right">
            <button className="report-icon-button" aria-label="Notificações">
              <BellIcon />
            </button>

            <button className="report-icon-button" aria-label="Ajuda">
              <HelpIcon />
            </button>

            <div className="report-user-block">
              <div className="report-user-copy">
                <strong>Joaquim Silva</strong>
                <span>Monitor de Cálculo I</span>
              </div>

              <div className="report-user-avatar">
                <MonitorIcon />
              </div>
            </div>
          </div>
        </header>

        <section className="report-metrics">
          <article className="metric-card">
            <div className="metric-head">
              <UsersIcon />
              <span>CAPACIDADE</span>
            </div>
            <strong>142</strong>
            <p>Total de alunos atendidos no semestre</p>
            <div className="metric-line gold">
              <div className="metric-line-value" />
            </div>
          </article>

          <article className="metric-card dark">
            <div className="metric-head">
              <ClockIcon />
              <span>DURAÇÃO</span>
            </div>
            <strong>480h</strong>
            <p>Carga horária total acumulada</p>
          </article>

          <article className="metric-card">
            <div className="metric-head">
              <CheckSquareIcon />
              <span>EFICIÊNCIA</span>
            </div>
            <strong>94%</strong>
            <p>Taxa de satisfação dos monitorados</p>
            <div className="metric-line green">
              <div className="metric-line-value" />
            </div>
          </article>
        </section>

        <section className="report-grid">
          <div className="report-main">
            <article className="report-editor-card">
              <div className="section-title">
                <span className="section-number">01.</span>
                <h3>Resumo das Atividades do Semestre</h3>
              </div>

              <textarea placeholder="Descreva detalhadamente as metodologias aplicadas, tópicos abordados e principais desafios superados durante este período letivo..." />
            </article>

            <article className="report-editor-card">
              <div className="section-title">
                <span className="section-number">02.</span>
                <h3>Observações sobre o Desempenho</h3>
              </div>

              <textarea placeholder="Relate o engajamento das turmas, níveis de dificuldade recorrentes e sugestões de melhoria para o conteúdo programático..." />
            </article>
          </div>

          <aside className="report-side">
            <article className="side-card guidelines-card">
              <h4>DIRETRIZES DE AVALIAÇÃO</h4>

              <div className="guidelines-list">
                {guidelines.map((item) => (
                  <div key={item} className="guideline-item">
                    <span className="guideline-dot">i</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="side-card status-card-report">
              <h4>STATUS DO DOCUMENTO</h4>

              <div className="doc-status">
                <span className="status-bullet" />
                <strong>AGUARDANDO ENVIO</strong>
              </div>

              <button className="submit-report-button">
                <SendIcon />
                ENVIAR PARA AVALIAÇÃO
              </button>

              <p>
                Ao clicar em enviar, você confirma que todas as informações acima
                são verdadeiras e condizem com suas atividades.
              </p>
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

function UsersIcon() {
  return (
    <IconBase>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path d="M20 8.5a3.5 3.5 0 0 1 0 7" />
      <path d="M17 20a4 4 0 0 0 0-8" />
    </IconBase>
  );
}

function ClockIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  );
}

function CheckSquareIcon() {
  return (
    <IconBase>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="m8 12 3 3 5-6" />
    </IconBase>
  );
}

function SendIcon() {
  return (
    <IconBase>
      <path d="M3 12h15" />
      <path d="m12 5 7 7-7 7" />
    </IconBase>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="monitorGradientReport" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1bc2ff" />
          <stop offset="45%" stopColor="#f3dd32" />
          <stop offset="100%" stopColor="#ff5c7d" />
        </linearGradient>
      </defs>
      <rect x="9" y="10" width="46" height="32" rx="3" fill="#1a1f36" />
      <rect x="13" y="14" width="38" height="24" rx="2" fill="url(#monitorGradientReport)" />
      <path d="M28 46h8l4 6H24l4-6Z" fill="#9aa3b2" />
      <rect x="20" y="52" width="24" height="2.8" rx="1.4" fill="#c5cbd6" />
    </svg>
  );
}
