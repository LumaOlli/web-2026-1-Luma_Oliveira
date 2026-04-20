import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon />, to: "/dashboard" },
  { label: "Meus Horários", icon: <ClockIcon />, to: "/meus-horarios" },
  { label: "Agendamentos", icon: <CalendarIcon />, to: "/agendamentos" },
  { label: "Atendimento", icon: <ClipboardUserIcon />, to: "/atendimentos" },
  { label: "Relatório", icon: <FileIcon />, to: "/relatorios" },
];

export default function SidebarMenu() {
  return (
    <aside className="app-sidebar">
      <div>
        <div className="app-brand">
          <h1>MMA Monitoria</h1>
          <p>PORTAL DO MONITOR</p>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => `menu-item${isActive ? " active" : ""}`}
            >
              <span className="menu-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <button className="menu-item footer-item">
          <span className="menu-icon">
            <SettingsIcon />
          </span>
          <span>Configurações</span>
        </button>

        <button className="menu-item footer-item logout">
          <span className="menu-icon">
            <LogoutIcon />
          </span>
          <span>Sair</span>
        </button>
      </div>
    </aside>
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
      <path d="M8 14h.01M12 14h.01M16 14h.01" />
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
