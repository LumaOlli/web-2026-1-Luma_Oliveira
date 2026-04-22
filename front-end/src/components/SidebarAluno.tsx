import type { ReactNode } from "react"; 
import { NavLink } from "react-router-dom";

interface MenuItem {
  label: string;
  icon: ReactNode;
  to: string;
}

const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: <DashboardIcon />, to: "/aluno/dashboard" },
  { label: "Buscar Horários", icon: <SearchClockIcon />, to: "/aluno/buscar-horarios" },
  { label: "Agendar Monitoria", icon: <PlusCalendarIcon />, to: "/aluno/agendar" },
  { label: "Minhas Monitorias", icon: <CalendarListIcon />, to: "/aluno/minhas-monitorias" },
];

export default function SidebarAluno() {
  return (
    <aside className="schedule-sidebar aluno-sidebar">
      <div className="sidebar-top-wrapper">
        <div className="schedule-brand">
          <div className="schedule-brand-icon">
            <CapIcon />
          </div>
          <div className="brand-text">
            <h1>MMA UFERSA</h1>
            <p>PORTAL DO ALUNO</p>
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
        <NavLink 
          to="/aluno/configuracoes" 
          className={({ isActive }) => `schedule-menu-item footer ${isActive ? "active" : ""}`}
        >
          <span className="schedule-menu-icon"><SettingsIcon /></span>
          <span>Configurações</span>
        </NavLink>

        <NavLink to="/logout" className="schedule-menu-item footer logout">
          <span className="schedule-menu-icon"><LogoutIcon /></span>
          <span>Sair</span>
        </NavLink>
      </div>
    </aside>
  );
}

interface IconProps {
  children: ReactNode;
  viewBox?: string;
  className?: string;
}

function IconBase({ children, viewBox = "0 0 24 24", className = "sidebar-icon" }: IconProps) {
  return (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {children}
    </svg>
  );
}

/* ÍCONES */
function DashboardIcon() { return <IconBase><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></IconBase>; }
function SearchClockIcon() { return <IconBase><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><polyline points="11 8 11 11 12.5 12.5" /></IconBase>; }
function PlusCalendarIcon() { return <IconBase><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="12" y1="14" x2="12" y2="18" /><line x1="10" y1="16" x2="14" y2="16" /></IconBase>; }
function CalendarListIcon() { return <IconBase><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M9 12h6" /><path d="M9 16h6" /></IconBase>; }
function SettingsIcon() { return <IconBase><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06" /></IconBase>; }
function LogoutIcon() { return <IconBase><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></IconBase>; }
function CapIcon() { 
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-icon">
      <path d="m2 9 10-5 10 5-10 5-10-5Z" />
      <path d="M6 11.5v4.5c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />
    </svg>
  ); 
}