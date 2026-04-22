// src/components/SidebarCoord.jsx
import { NavLink } from "react-router-dom";
import "./sidebar-coord.css";

const items = [
  { label: "Dashboard", to: "/coordenador/dashboard", icon: <DashboardIcon /> },
  { label: "Gerenciamento de Usuario", to: "/coordenador/usuarios", icon: <UsersIcon /> },
  { label: "Gerenciamento de Disciplina", to: "/coordenador/disciplinas", icon: <BookIcon /> },
];

export default function SidebarCoord() {
  return (
    <aside className="coord-sidebar">
      <div>
        <div className="coord-module">
          <div>
            <h2>MMA Module</h2>
            <p>Admin Console</p>
          </div>
        </div>

        <nav className="coord-nav">
          {items.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => `coord-nav-item${isActive ? " active" : ""}`}
            >
              <span className="coord-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="coord-footer">
        <NavLink to="/coordenador/configuracoes" className="coord-nav-item footer">
          <span className="coord-nav-icon"><HelpIcon /></span>
          <span>Configurações</span>
        </NavLink>
        <NavLink to="/logout" className="coord-nav-item footer">
          <span className="coord-nav-icon"><LogoutIcon /></span>
          <span>Sair</span>
        </NavLink>
      </div>
    </aside>
  );
}

function IconBase({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="coord-icon">
      {children}
    </svg>
  );
}
function DashboardIcon() { return <IconBase><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></IconBase>; }
function UsersIcon() { return <IconBase><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="3" /><path d="M20 8v6M23 11h-6" /></IconBase>; }
function BookIcon() { return <IconBase><path d="M2 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H2z" /><path d="M22 4h-6a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h6z" /></IconBase>; }
function HelpIcon() { return <IconBase><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-.7.7-1.3 1.1-1.3 2.3" /><path d="M12 17h.01" /></IconBase>; }
function LogoutIcon() { return <IconBase><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></IconBase>; }
