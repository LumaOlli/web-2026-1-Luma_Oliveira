// src/pages/coordenador/NovoRegistroCoord.jsx
import SidebarCoord from "../../components/SidebarCoordenador";
import "./novo-registro.css";

export default function NovoRegistroCoord() {
  return (
    <div className="nr-page">
      <SidebarCoord />

      <main className="nr-main">
        <header className="nr-topbar">
          <div className="nr-brand">
            <strong>MMA Admin</strong>
            <span>Modulo de Monitoria</span>
          </div>

          <button className="nr-back-btn" type="button">
            <CloseIcon />
            <span>Voltar ao Painel</span>
          </button>
        </header>

        <section className="nr-content">
          <div className="nr-hero">
            <h1>Novo Registro</h1>
            <p>
              Selecione o tipo de entidade que deseja adicionar ao ecossistema
              academico da UFERSA.
            </p>
          </div>

          <div className="nr-cards">
            <article className="nr-card user">
              <div className="nr-card-bg nr-card-bg-user">
                <UsersGhostIcon />
              </div>

              <div className="nr-icon-box blue">
                <UserPlusIcon />
              </div>

              <h2>Cadastrar Novo Usuario</h2>
              <p>
                Adicione novos discentes, monitores, docentes ou administradores
                centrais ao sistema de monitoria.
              </p>

              <button className="nr-link blue" type="button">
                INICIAR CADASTRO <ArrowRightIcon />
              </button>
            </article>

            <article className="nr-card discipline">
              <div className="nr-card-bg nr-card-bg-book">
                <BookGhostIcon />
              </div>

              <div className="nr-icon-box gold">
                <ClipboardPlusIcon />
              </div>

              <h2>Cadastrar Nova Disciplina</h2>
              <p>
                Registre novos componentes curriculares que ofertarao vagas de
                monitoria academica no semestre.
              </p>

              <button className="nr-link gold" type="button">
                INICIAR CADASTRO <ArrowRightIcon />
              </button>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

/* Icons */

function IconBase({ children, viewBox = "0 0 24 24", className = "nr-icon" }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function CloseIcon() {
  return (
    <IconBase>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  );
}

function ArrowRightIcon() {
  return (
    <IconBase>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </IconBase>
  );
}

function UserPlusIcon() {
  return (
    <IconBase>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 19a6 6 0 0 1 12 0" />
      <path d="M18 8v6" />
      <path d="M15 11h6" />
    </IconBase>
  );
}

function ClipboardPlusIcon() {
  return (
    <IconBase>
      <rect x="6" y="4" width="13" height="16" rx="2" />
      <path d="M9 4.5h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1Z" />
      <path d="M12.5 10v6" />
      <path d="M9.5 13h6" />
    </IconBase>
  );
}

function UsersGhostIcon() {
  return (
    <svg viewBox="0 0 130 80" className="nr-ghost-icon" aria-hidden="true">
      <g fill="currentColor">
        <circle cx="54" cy="25" r="13" />
        <path d="M22 62c0-11 14-20 32-20s32 9 32 20v8H22z" />
        <circle cx="96" cy="25" r="11" opacity=".85" />
        <path d="M80 61c1-8 11-15 24-15s23 7 24 15v9H80z" opacity=".85" />
      </g>
    </svg>
  );
}

function BookGhostIcon() {
  return (
    <svg viewBox="0 0 130 80" className="nr-ghost-icon" aria-hidden="true">
      <g fill="currentColor">
        <path d="M12 14c0-6 6-10 13-10h35c11 0 20 3 25 8v58c-5-5-14-8-25-8H25c-7 0-13-4-13-10V14Z" />
        <path d="M118 14c0-6-6-10-13-10H70c-11 0-20 3-25 8v58c5-5 14-8 25-8h35c7 0 13-4 13-10V14Z" />
        <path d="M78 24h26M78 34h26M78 44h26" stroke="#fff" strokeWidth="4" fill="none" />
      </g>
    </svg>
  );
}
