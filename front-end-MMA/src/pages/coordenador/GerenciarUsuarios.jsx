// src/pages/coordenador/GerenciarUsuarios.jsx
import { useNavigate } from "react-router-dom";
import SidebarCoord from "../../components/SidebarCoordenador";
import "./gerenciar-usuarios.css";

const usuarios = [
  { id: 1, nome: "Arthur Melo", email: "arthur.melo@ufersa.edu.br", matricula: "2021004512", tipo: "Discente", iniciais: "AM", cor: "a" },
  { id: 2, nome: "Beatriz Lima", email: "b.lima@ufersa.edu.br", matricula: "19980500", tipo: "Monitor", iniciais: "BL", cor: "b" },
  { id: 3, nome: "Carlos Santos", email: "admin.carlos@ufersa.edu.br", matricula: "0001-ADM", tipo: "Administrador", iniciais: "CS", cor: "c" },
  { id: 4, nome: "Davi Mendes", email: "davi.mendes@ufersa.edu.br", matricula: "2022108842", tipo: "Discente", iniciais: "DM", cor: "d" },
  { id: 5, nome: "Eduarda Azevedo", email: "eduarda.azevedo@ufersa.edu.br", matricula: "2020012293", tipo: "Discente", iniciais: "EA", cor: "e" },
];

export default function GerenciarUsuarios() {
  const navigate = useNavigate();

  return (
    <div className="gu3-page">
      <div className="gu3-body">
        <SidebarCoord />

        <main className="gu3-main">
          <section className="gu3-head">
            <div>
              <h1>Gerenciar Usuários</h1>
              <p>Configure as permissões e níveis de acesso para estudantes e professores.</p>
            </div>

            <div className="gu3-actions">
              <div className="gu3-search">
                <SearchIcon />
                <input placeholder="Buscar por nome ou matrícula..." />
              </div>

              <button className="gu3-create" onClick={() => navigate("/coordenador/usuarios/novo")}>
                <UserPlusIcon />
                Criar Novo Usuário
              </button>
            </div>
          </section>

          <section className="gu3-grid">
            <aside className="gu3-side">
              <article className="gu3-side-card">
                <div className="gu3-side-title">
                  <span>TOTAL DE USUÁRIOS</span>
                  <UsersIcon />
                </div>
                <h2>1,284</h2>
                <p className="positive">+12% desde o último semestre</p>
              </article>

              <article className="gu3-side-card">
                <h3>Distribuição</h3>

                <div className="dist-row"><span>Discentes</span><strong>1,150</strong></div>
                <div className="bar blue"><i /></div>

                <div className="dist-row"><span>Monitores</span><strong>112</strong></div>
                <div className="bar gold"><i /></div>

                <div className="dist-row"><span>Administradores</span><strong>22</strong></div>
                <div className="bar light"><i /></div>
              </article>
            </aside>

            <article className="gu3-table-wrap">
              <table className="gu3-table">
                <thead>
                  <tr>
                    <th>NOME</th>
                    <th>EMAIL</th>
                    <th>MATRÍCULA</th>
                    <th>TIPO</th>
                    <th className="actions-col">AÇÕES</th>
                  </tr>
                </thead>

                <tbody>
                  {usuarios.map((u) => (
                    <tr key={u.id}>
                      <td>
                        <div className="name-cell">
                          <span className={`avatar ${u.cor}`}>{u.iniciais}</span>
                          <strong>{u.nome}</strong>
                        </div>
                      </td>
                      <td>{u.email}</td>
                      <td className="mono">{u.matricula}</td>
                      <td>
                        <span className={`role ${u.tipo.toLowerCase()}`}>{u.tipo}</span>
                      </td>
                      <td className="gu3-row-actions">
                        <button
                          type="button"
                          className="icon-btn edit"
                          onClick={() => navigate(`/coordenador/usuarios/editar/${u.id}`)}
                          aria-label="Editar usuário"
                          title="Editar"
                        >
                          <EditIcon />
                        </button>

                        <button
                          type="button"
                          className="icon-btn remove"
                          onClick={() => navigate(`/coordenador/usuarios/remover/${u.id}`)}
                          aria-label="Remover usuário"
                          title="Remover"
                        >
                          <TrashIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <footer className="gu3-footer">
                <p>Exibindo 1 a 5 de 1.284 usuários</p>
                <div className="pager">
                  <button>‹</button>
                  <button className="active">1</button>
                  <button>2</button>
                  <button>3</button>
                  <span>...</span>
                  <button>257</button>
                  <button>›</button>
                </div>
              </footer>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

/* ICONS */
function IconBase({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}
function SearchIcon() { return <IconBase><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></IconBase>; }
function BellIcon() { return <IconBase><path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></IconBase>; }
function SettingsIcon() { return <IconBase><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V23a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H1a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V1a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H23a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1z" /></IconBase>; }
function UserIcon() { return <IconBase><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></IconBase>; }
function UserPlusIcon() { return <IconBase><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="3" /><path d="M20 8v6M23 11h-6" /></IconBase>; }
function UsersIcon() { return <IconBase><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="3" /><path d="M20 8a3 3 0 1 1 0 6" /></IconBase>; }
function EditIcon() { return <IconBase><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" /></IconBase>; }
function TrashIcon() { return <IconBase><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></IconBase>; }
