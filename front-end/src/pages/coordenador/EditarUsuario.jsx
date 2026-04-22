// src/pages/coordenador/EditarUsuario.jsx
import SidebarCoord from "../../components/SidebarCoordenador";
import "./usuario-crud.css";

export default function EditarUsuario() {
  return (
    <div className="uc-page">
      <SidebarCoord />
      <main className="uc-main">
        <Topbar />

        <section className="uc-content">
          <p className="uc-breadcrumb">ADMINISTRACAO › USUARIOS</p>
          <h1>Editar Usuario</h1>

          <article className="uc-card uc-card-edit">
            <div className="uc-grid">
              <Field label="NOME COMPLETO"><input defaultValue="Arthur Dent" /></Field>
              <Field label="E-MAIL INSTITUCIONAL"><input defaultValue="arthur.dent@ufersa.edu.br" /></Field>
              <Field label="MATRICULA"><input defaultValue="2023004561" /></Field>
              <Field label="TIPO DE USUARIO"><select defaultValue="Monitor"><option>Monitor</option><option>Discente</option></select></Field>
              <Field label="CURSO"><select defaultValue="Ciencia da Computacao"><option>Ciencia da Computacao</option></select></Field>
            </div>

            <div className="uc-status-line"><span className="dot" /> ACADEMIC PULSE ACTIVE</div>

            <div className="uc-actions">
              <button className="btn ghost">CANCELAR</button>
              <button className="btn primary">SALVAR ALTERACOES</button>
            </div>
          </article>

          <div className="uc-bottom-cards">
            <article className="mini-card">
              <h4>ULTIMO ACESSO</h4>
              <strong>Hoje, 09:42</strong>
              <p>IP: 192.168.1.45 • Mossoro, RN</p>
            </article>

            <article className="mini-card warm">
              <h4>STATUS DE MONITORIA</h4>
              <strong>Este usuario esta vinculado a 3 disciplinas ativas neste semestre.</strong>
              <a href="#detalhes">Ver Detalhes da Carga Horaria</a>
            </article>
          </div>
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
      <strong>MMA - Academic Atelier</strong>
      <div className="uc-right">
        <div className="uc-search"><input placeholder="Search records..." /></div>
        <span>🔔</span><span>❔</span><span>👤</span>
      </div>
    </header>
  );
}
