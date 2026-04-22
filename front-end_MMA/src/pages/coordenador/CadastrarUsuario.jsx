// src/pages/coordenador/CadastrarUsuario.jsx
import SidebarCoord from "../../components/SidebarCoordenador";
import "./usuario-crud.css";

export default function CadastrarUsuario() {
  return (
    <div className="uc-page">
      <SidebarCoord />
      <main className="uc-main">
        <Topbar />

        <section className="uc-content">
          <p className="uc-breadcrumb">USUARIOS › NOVO MONITOR</p>
          <h1>Cadastro de Monitoria</h1>
          <p className="uc-sub">
            Registre novos monitores no sistema e vincule-os as suas respectivas disciplinas academicas.
          </p>

          <article className="uc-card">
            <div className="uc-grid">
              <Field label="FULL NAME"><input placeholder="Nome completo do discente" /></Field>
              <Field label="INSTITUTIONAL EMAIL"><input placeholder="email@ufersa.edu.br" /></Field>
              <Field label="MATRICULA"><input placeholder="202XXXXXXX" /></Field>
              <Field label="USER TYPE"><input value="Monitor" readOnly /></Field>
              <Field label="COURSE">
                <select defaultValue=""><option value="" disabled>Selecione o curso</option><option>Ciencia da Computacao</option></select>
              </Field>
            </div>

            <div className="uc-divider" />

            <h3>Vinculo Academico</h3>
            <div className="uc-tip">
              <strong>Dica de Vinculacao</strong>
              <p>A selecao da disciplina e obrigatoria para habilitar as funcoes de monitoria.</p>
            </div>

            <Field label="DISCIPLINA PARA MONITORIA">
              <select defaultValue=""><option value="" disabled>Escolha a disciplina designada</option><option>Calculo I</option></select>
            </Field>

            <div className="uc-actions">
              <button className="btn ghost">Cancel</button>
              <button className="btn primary">Save User</button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

function Field({ label, children }) {
  return <label className="uc-field"><span>{label}</span>{children}</label>;
}

function Topbar() {
  return (
    <header className="uc-topbar">
      <strong>MMA UFERSA</strong>
      <div className="uc-right">
        <div className="uc-search"><input placeholder="Buscar..." /></div>
        <span>🔔</span><span>❔</span><span>👤</span>
      </div>
    </header>
  );
}
