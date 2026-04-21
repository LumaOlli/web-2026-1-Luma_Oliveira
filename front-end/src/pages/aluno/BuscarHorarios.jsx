// BuscarHorarios.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import SidebarAluno from "../../components/SidebarAluno";
import "./buscar-horarios.css";

const departamentos = [
  "Ciencias Exatas",
  "Tecnologia da Informacao",
  "Ciencias Biologicas",
  "Humanidades",
];

const disciplinas = [
  {
    id: "DCE0012",
    nome: "Calculo Diferencial e Integral I",
    desc: "Fundamentos de limites, derivadas e introducao as integrais de funcoes.",
    monitores: 4,
    selected: false,
  },
  {
    id: "DCE0045",
    nome: "Algebra Linear",
    desc: "Sistemas lineares, espacos vetoriais, transformacoes e autovalores.",
    horarios: 8,
    selected: true,
  },
];

const horarios = [
  {
    nome: "Lucas Ferreira",
    info: "7o Semestre • Ciencia da Computacao",
    dia: "Segunda-feira",
    hora: "14:00 - 16:00",
    local: "Sala 4, Bloco C",
    formato: "",
  },
  {
    nome: "Ana Beatriz Souza",
    info: "5o Semestre • Eng. Producao",
    dia: "Quarta-feira",
    hora: "08:00 - 10:00",
    local: "",
    formato: "Remoto (Google Meet)",
  },
];

export default function BuscarHorarios() {
  return (
    <div className="bh-page">
      <aside className="bh-sidebar">
        <div className="bh-logo">
          <h1>Monitoria Academica</h1>
          <p>Portal Academico</p>
        </div>

        <nav className="bh-menu">
          <a href="#" className="bh-item">Dashboard</a>
          <a href="#" className="bh-item active">Buscar Horarios</a>
          <a href="#" className="bh-item">Meus Agendamentos</a>
          <a href="#" className="bh-item">Historico</a>
        </nav>

        <div className="bh-bottom">
          <a href="#" className="bh-item">Configuracoes</a>
          <a href="#" className="bh-item sair">Sair</a>
        </div>
      </aside>

      <main className="bh-main">
        <header className="bh-topbar">
          <strong>Monitoria Academica</strong>
          <div className="bh-user">Usuario</div>
        </header>

        <h2>Horarios de Monitoria</h2>

        <div className="bh-search">
          <input placeholder="Buscar disciplina, codigo ou nome do monitor..." />
        </div>

        <p className="bh-text">
          Encontre suporte academico especializado. Filtre por departamento e selecione a
          disciplina para visualizar os monitores disponiveis.
        </p>

        <section className="bh-grid-top">
          <article className="bh-dept">
            <h3>Departamentos</h3>
            <ul>
              {departamentos.map((dep, i) => (
                <li key={dep} className={i === 0 ? "selected" : ""}>{dep}</li>
              ))}
            </ul>

            <h4>Semestre Atual</h4>
            <span className="tag-semestre">2023.2</span>
          </article>

          <div className="bh-cards">
            {disciplinas.map((d) => (
              <article key={d.id} className={`disc-card ${d.selected ? "selected" : ""}`}>
                <div className="disc-head">
                  <small>{d.id}</small>
                  <span className={`pill ${d.selected ? "gold" : "green"}`}>
                    {d.selected ? "SELECIONADO" : `${d.monitores} MONITORES`}
                  </span>
                </div>
                <h3>{d.nome}</h3>
                <p>{d.desc}</p>
                <strong>{d.selected ? `${d.horarios} Horarios Disponiveis` : "Visualizar Horarios ->"}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="bh-list">
          <div className="bh-list-head">
            <div>
              <h3>Horarios para Algebra Linear</h3>
              <p>Selecione um monitor para agendar seu atendimento</p>
            </div>
            <div className="view-actions">
              <button>▦</button>
              <button className="active">☰</button>
            </div>
          </div>

          <div className="rows">
            {horarios.map((h) => (
              <article className="row" key={h.nome}>
                <div className="person">
                  <div className="avatar">{h.nome.split(" ").map(n => n[0]).slice(0, 2).join("")}</div>
                  <div>
                    <h4>{h.nome}</h4>
                    <p>{h.info}</p>
                  </div>
                </div>

                <div className="meta"><span>DIA</span><strong>{h.dia}</strong></div>
                <div className="meta"><span>HORARIO</span><strong>{h.hora}</strong></div>
                <div className="meta">
                  <span>{h.formato ? "FORMATO" : "LOCAL"}</span>
                  <strong>{h.formato || h.local}</strong>
                </div>

                <button className="btn-agendar">Agendar</button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
