import { NavLink } from "react-router-dom";
import "./AgendamentosM.css";

const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon />, to: "/dashboard" },
  { label: "Meus Horários", icon: <ClockIcon />, to: "/meus-horarios" },
  { label: "Agendamentos", icon: <CalendarIcon />, to: "/agendamentos" },
  { label: "Atendimento", icon: <ClipboardUserIcon />, to: "/atendimentos" },
  { label: "Relatório", icon: <FileIcon />, to: "/relatorios" },
];

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
          <button className="appointments-menu-item footer">
            <span className="appointments-menu-icon">
              <SettingsIcon />
            </span>
            <span>Configurações</span>
          </button>

          <button className="appointments-menu-item footer logout">
            <span className="appointments-menu-icon">
              <LogoutIcon />
            </span>
            <span>Sair</span>
          </button>
        </div>
      </aside>

      <main className="appointments-content">
        <header className="appointments-topbar">
          <h2>Visualizar Agendamentos</h2>

          <div className="appointments-user">
            <button className="top-icon-button" aria-label="Notificações">
              <BellIcon />
              <span className="notification-dot" />
            </button>

            <div className="user-copy">
              <strong>Lucas Oliveira</strong>
              <span>Monitor: Estrutura de Dados</span>
            </div>

            <div className="user-avatar">
              <MonitorIcon />
            </div>
          </div>
        </header>

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
            <span>DATA &amp; HORÁRIO</span>
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
            <p>
              <BellMiniIcon /> Próximo às 14:00 (Mariana A.)
            </p>
          </article>

          <article className="mini-card accent-green">
            <span className="mini-label">TAXA DE CONCLUSÃO</span>
            <strong>92%</strong>
            <div className="mini-progress">
              <div className="mini-progress-value" />
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

function DashboardIcon() {
  return (
    <IconBase>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
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

function CalendarIcon() {
  return (
    <IconBase>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01" />
    </IconBase>
  );
}

function ClipboardUserIcon() {
  return (
    <IconBase>
      <path d="M9 3h6l1 2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2l1-2Z" />
      <circle cx="12" cy="11" r="2.5" />
      <path d="M8.5 18a4 4 0 0 1 7 0" />
    </IconBase>
  );
}

function FileIcon() {
  return (
    <IconBase>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </IconBase>
  );
}

function SettingsIcon() {
  return (
    <IconBase>
      <path d="M12 3l1.3 2.8 3.1.4-2.2 2.2.5 3.1-2.7-1.5-2.7 1.5.5-3.1L7.6 6.2l3.1-.4L12 3Z" />
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  );
}

function LogoutIcon() {
  return (
    <IconBase>
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
      <path d="M21 21V3" />
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

function BellMiniIcon() {
  return (
    <IconBase>
      <path d="M15 17H5l1.5-2v-4a5.5 5.5 0 0 1 11 0v4L19 17h-4Z" />
    </IconBase>
  );
}

function SearchIcon() {
  return (
    <IconBase>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </IconBase>
  );
}

function ChevronDownIcon() {
  return (
    <IconBase>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

function EyeIcon() {
  return (
    <IconBase>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.7" />
    </IconBase>
  );
}

function InfoIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v5" />
      <path d="M12 7h.01" />
    </IconBase>
  );
}

function PlayIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 9 5 3-5 3Z" />
    </IconBase>
  );
}

function ReportIcon() {
  return (
    <IconBase>
      <path d="M4 19h4" />
      <path d="M4 15h7" />
      <path d="M4 11h10" />
      <path d="m17 14 3 3 4-6" />
    </IconBase>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="appointmentsAvatarGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#27d4f3" />
          <stop offset="48%" stopColor="#72d07f" />
          <stop offset="100%" stopColor="#163a70" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="8" fill="#0a1730" />
      <path d="M12 56c4-11 12-18 20-18s16 7 20 18" fill="url(#appointmentsAvatarGradient)" opacity="0.9" />
      <circle cx="32" cy="24" r="10" fill="#d3f8ff" />
      <path d="M23 25c3 2 6 3 9 3 4 0 7-1 10-3" stroke="#0a1730" strokeWidth="2" />
    </svg>
  );
}

function SummaryShapeIcon() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path
        d="M28 93c15-21 29-31 45-31h18v20H73c-8 0-15 4-21 11H28Z"
        fill="currentColor"
        opacity="0.24"
      />
      <path
        d="M51 24h41v16H68v33c0 12-10 22-22 22H31V79h15c3 0 5-3 5-6V40H31V24h20Z"
        fill="currentColor"
        opacity="0.24"
      />
    </svg>
  );
}
