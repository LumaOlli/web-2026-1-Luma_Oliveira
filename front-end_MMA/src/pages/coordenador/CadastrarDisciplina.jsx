// src/pages/coordenador/CadastrarDisciplina.jsx
import SidebarCoord from "../../components/SidebarCoordenador";
import "./disciplina-crud.css";

export default function CadastrarDisciplina() {
  return (
    <div className="dm-page">
      <SidebarCoord />

      <main className="dm-main">
        <Topbar />
        <section className="dm-content">
          <p className="dm-breadcrumb">DISCIPLINAS › NOVA DISCIPLINA</p>
          <h1 className="dm-title">Cadastrar Disciplina</h1>
          <p className="dm-subtitle">
            Registre novos componentes curriculares para o programa de monitoria.
          </p>

          <article className="dm-card">
            <div className="dm-grid-2">
              <Field label="Nome da Disciplina">
                <input placeholder="Ex: Estrutura de Dados I" />
              </Field>

              <Field label="Codigo da Disciplina">
                <input placeholder="Ex: DCOMP089" />
              </Field>

              <Field label="Departamento">
                <select defaultValue="">
                  <option value="" disabled>Selecione o departamento</option>
                  <option>Ciencias Exatas e Tecnologicas</option>
                  <option>Computacao e Tecnologia</option>
                  <option>Ciencias Humanas</option>
                </select>
              </Field>

              <Field label="Carga Horaria">
                <input placeholder="Ex: 60h" />
              </Field>

              <Field label="Status Inicial">
                <select defaultValue="Ativo">
                  <option>Ativo</option>
                  <option>Pendente</option>
                  <option>Interrompido</option>
                </select>
              </Field>

              <Field label="Semestre">
                <input placeholder="Ex: 2026.1" />
              </Field>
            </div>

            <Field label="Ementa / Observacoes">
              <textarea rows={5} placeholder="Descreva a ementa da disciplina..." />
            </Field>

            <div className="dm-actions">
              <button className="btn ghost" type="button">Cancelar</button>
              <button className="btn primary" type="button">Salvar Disciplina</button>
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
        <div className="dm-search">
          <SearchIcon />
          <input placeholder="Buscar..." />
        </div>
        <BellIcon />
        <HelpIcon />
        <UserIcon />
      </div>
    </header>
  );
}

function IconBase({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}
function SearchIcon() { return <IconBase><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></IconBase>; }
function BellIcon() { return <IconBase><path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></IconBase>; }
function HelpIcon() { return <IconBase><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-.7.7-1.3 1.1-1.3 2.3" /><path d="M12 17h.01" /></IconBase>; }
function UserIcon() { return <IconBase><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></IconBase>; }
