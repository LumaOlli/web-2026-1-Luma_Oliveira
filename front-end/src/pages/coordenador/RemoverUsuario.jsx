// src/pages/coordenador/RemoverUsuario.jsx
import SidebarCoord from "../../components/SidebarCoordenador";
import "./usuario-crud.css";

export default function RemoverUsuario() {
  return (
    <div className="uc-page">
      <SidebarCoord />
      <main className="uc-main">
        <Topbar />

        <section className="uc-content">
          <h1>Gerenciamento de Usuarios</h1>
          <p className="uc-sub">Controle de acessos e monitoramento institucional.</p>

          <article className="uc-card">
            <div className="fake-list">
              <div className="fake-row">Ricardo Camargo de Oliveira</div>
              <div className="fake-row">Ana Silva</div>
              <div className="fake-row">Lucas Ramos</div>
            </div>
          </article>
        </section>

        <div className="uc-overlay">
          <div className="uc-modal">
            <h2>Confirmar Remocao</h2>
            <p>
              Tem certeza que deseja remover este usuario?
              Esta acao nao podera ser desfeita e todos os registros associados serao arquivados.
            </p>

            <div className="uc-user-box">
              <small>DADOS DO USUARIO</small>
              <strong>Ricardo Camargo de Oliveira</strong>
              <p>Matricula: 2023010552</p>
            </div>

            <div className="uc-actions">
              <button className="btn ghost">CANCELAR</button>
              <button className="btn danger">CONFIRMAR REMOCAO</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Topbar() {
  return (
    <header className="uc-topbar">
      <strong>Academic Atelier</strong>
      <div className="uc-right">
        <span>Dashboard</span>
        <span className="active-link">Gerenciamento de Usuario</span>
        <span>Gerenciamento de Disciplina</span>
      </div>
    </header>
  );
}
