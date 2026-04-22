// src/pages/coordenador/EditarDisciplina.jsx
import SidebarCoord from "../../components/SidebarCoordenador";
import "./disciplina-crud.css";

export default function EditarDisciplina() {
  return (
    <div className="dm-page">
      <SidebarCoord />

      <main className="dm-main">
        <Topbar />
        <section className="dm-content">
          <p className="dm-breadcrumb">DISCIPLINAS › EDITAR DISCIPLINA</p>
          <h1 className="dm-title">Editar Disciplina</h1>
          <p className="dm-subtitle">
            Atualize as informacoes cadastrais da unidade curricular no sistema.
          </p>

          <div className="dm-layout">
            <article className="dm-card">
              <Field label="Nome da Disciplina">
                <input defaultValue="Algoritmos e Estrutura de Dados II" />
              </Field>

              <div className="dm-grid-2">
                <Field label="Codigo da Disciplina">
                  <input defaultValue="CC0042" />
                </Field>

                <Field label="Departamento">
                  <select defaultValue="Ciencias Exatas e Tecnologicas">
                    <option>Ciencias Exatas e Tecnologicas</option>
                    <option>Computacao e Tecnologia</option>
                  </select>
                </Field>
              </div>

              <div className="dm-actions">
                <button className="btn ghost" type="button">Cancelar</button>
                <button className="btn primary" type="button">Salvar Alteracoes</button>
              </div>
            </article>

            <aside className="dm-side">
              <article className="dm-impact">
                <p>IMPACTO DA DISCIPLINA</p>
                <h3>84%</h3>
                <span>Taxa de Monitoria Ativa</span>
                <div className="dm-progress">
                  <div className="dm-progress-value" />
                </div>
              </article>

              <article className="dm-info">
                <h4>Informacoes de Sistema</h4>
                <p><b>Ultima Modificacao:</b> 12 Out, 2023</p>
                <p><b>Criado por:</b> Admin_Master</p>
                <p><b>Status:</b> <span className="tag-green">ATIVO</span></p>
              </article>
            </aside>
          </div>

          <article className="dm-card dm-history">
            <h4>Historico de Alteracoes</h4>
            <div className="history-item">
              <small>12 OUT 2023</small>
              <strong>Alteracao de Ementa</strong>
              <p>Atualizacao dos requisitos minimos para monitores voluntarios.</p>
            </div>
            <div className="history-item">
              <small>15 ABR 2023</small>
              <strong>Vinculacao de Departamento</strong>
              <p>Migracao da disciplina para novo nucleo de Ciencias Tecnologicas.</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="dm-field">
      <span>{label}</span>
      {children}
    </label>
  );
}

function Topbar() {
  return (
    <header className="dm-topbar">
      <strong>MMA - Academic Atelier</strong>
      <div className="dm-top-right">
        <div className="dm-search"><SearchIcon /><input placeholder="Search resources..." /></div>
        <BellIcon /><HelpIcon /><UserIcon />
      </div>
    </header>
  );
}

function IconBase({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>;
}
function SearchIcon() { return <IconBase><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></IconBase>; }
function BellIcon() { return <IconBase><path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></IconBase>; }
function HelpIcon() { return <IconBase><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-.7.7-1.3 1.1-1.3 2.3" /><path d="M12 17h.01" /></IconBase>; }
function UserIcon() { return <IconBase><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></IconBase>; }
