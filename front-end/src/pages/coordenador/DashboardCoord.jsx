// src/pages/coordenador/DashboardCoord.jsx
import SidebarCoord from "../../components/SidebarCoordenador";
import "./dashboard-coord.css";

const atividadesRecentes = [
  {
    id: 1,
    titulo: "Novos Tutores Aprovados",
    desc: "Departamento de Computacao • 3 novos membros",
    hora: "14:20 PM",
    tone: "green",
    icon: <UserAddIcon />,
  },
  {
    id: 2,
    titulo: "Atualizacao de Ementa",
    desc: "Calculo Diferencial e Integral I • Alteracao de bibliografia",
    hora: "ONTEM",
    tone: "blue",
    icon: <DocEditIcon />,
  },
];

export default function DashboardCoord() {
  return (
    <div className="coord-dashboard">
      <SidebarCoord />

      <main className="coord-content">
        <header className="coord-topbar">
          <div className="coord-topbar-icons">
            <BellIcon />
            <SettingsIcon />
            <UserBadgeIcon />
          </div>
        </header>

        <section className="coord-headline">
          <div>
            <h1>Dashboard do Administrador</h1>
            <p>MMA UFERSA Academic Monitoring Hub</p>
          </div>

          <button className="semester-btn" type="button">
            <CalendarIcon />
            <span>Semestre 2024.1</span>
          </button>
        </section>

        <section className="kpi-grid">
          <article className="kpi-card">
            <div className="kpi-top">
              <CapIcon />
              <span className="pill success">+12 %</span>
            </div>
            <h2>128</h2>
            <p>TOTAL DE MONITORES ATIVOS</p>
          </article>

          <article className="kpi-card">
            <div className="kpi-top">
              <BooksIcon />
              <span className="pill neutral">ESTAVEL</span>
            </div>
            <h2>45</h2>
            <p>DISCIPLINAS CADASTRADAS</p>
          </article>
        </section>

        <section className="main-grid">
          <article className="recent-card">
            <div className="recent-head">
              <h3>Atividades Recentes</h3>
              <a href="#relatorio">Ver relatorio completo</a>
            </div>

            <div className="recent-list">
              {atividadesRecentes.map((item) => (
                <div className="recent-item" key={item.id}>
                  <div className={`recent-icon ${item.tone}`}>{item.icon}</div>
                  <div className="recent-copy">
                    <strong>{item.titulo}</strong>
                    <p>{item.desc}</p>
                  </div>
                  <span className="recent-time">{item.hora}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="quick-card">
            <h3>Gerenciamento Rapido</h3>

            <button className="quick-item" type="button">
              <UsersGearIcon />
              <div>
                <strong>Gerenciar Usuarios</strong>
                <p>EDITAR PERMISSOES E ACESSO</p>
              </div>
            </button>

            <button className="quick-item" type="button">
              <ChecklistIcon />
              <div>
                <strong>Verificar Registros</strong>
                <p>14 APROVACOES PENDENTES</p>
              </div>
            </button>
          </article>
        </section>

        <button className="fab" type="button" aria-label="Novo">
          <PlusIcon />
        </button>
      </main>
    </div>
  );
}

/* Icones locais do dashboard */
function IconBase({ children, viewBox = "0 0 24 24", className = "dash-icon" }) {
  return (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {children}
    </svg>
  );
}
function BellIcon() { return <IconBase><path d="M15 17H5a2 2 0 0 1-2-2c0-1.1.9-2 2-2V9a5 5 0 0 1 10 0v4c1.1 0 2 .9 2 2a2 2 0 0 1-2 2z" /><path d="M9 19a2 2 0 0 0 4 0" /></IconBase>; }
function SettingsIcon() { return <IconBase><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V23a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H1a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V1a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H23a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1z" /></IconBase>; }
function UserBadgeIcon() { return <IconBase><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></IconBase>; }
function CalendarIcon() { return <IconBase><rect x="3" y="5" width="18" height="16" rx="2" /><line x1="16" y1="3" x2="16" y2="7" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="3" y1="11" x2="21" y2="11" /></IconBase>; }
function CapIcon() { return <IconBase><path d="m2 9 10-5 10 5-10 5-10-5Z" /><path d="M6 11.5v4.5c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" /></IconBase>; }
function BooksIcon() { return <IconBase><path d="M4 19h14" /><path d="M4 5h10v14H4z" /><path d="M14 7h4v12h-4" /></IconBase>; }
function UserAddIcon() { return <IconBase><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="3" /><path d="M20 8v6M23 11h-6" /></IconBase>; }
function DocEditIcon() { return <IconBase><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" /><path d="m10 14 6-6 2 2-6 6-3 1z" /></IconBase>; }
function UsersGearIcon() { return <IconBase><circle cx="8" cy="8" r="3" /><path d="M2 20a6 6 0 0 1 12 0" /><circle cx="18" cy="8" r="2" /><path d="M14.5 20a4.5 4.5 0 0 1 7 0" /></IconBase>; }
function ChecklistIcon() { return <IconBase><rect x="3" y="4" width="18" height="18" rx="2" /><path d="m8 11 2 2 4-4" /><path d="M8 17h8" /></IconBase>; }
function PlusIcon() { return <IconBase><path d="M12 5v14M5 12h14" /></IconBase>; }
