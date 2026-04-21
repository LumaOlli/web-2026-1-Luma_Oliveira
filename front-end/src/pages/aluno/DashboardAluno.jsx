import React from "react";
import { NavLink } from "react-router-dom";
import SidebarAluno from "../../components/SidebarAluno";
import "./dashboard-aluno.css";

const agendamentos = [
  {
    id: 1,
    horario: "HOJE as 14:00",
    disciplina: "Calculo Diferencial e Integral I",
    monitor: "Andre Silveira",
    local: "Laboratorio de Informatica 02",
    tag: "gold",
  },
  {
    id: 2,
    horario: "QUI as 10:30",
    disciplina: "Arquitetura de Computadores",
    monitor: "Ana Costa",
    local: "Google Meet (Link no e-mail)",
    tag: "blue",
  },
];

const atividades = [
  {
    id: 1,
    titulo: "Agendamento Confirmado",
    texto: "Sua solicitacao para Arquitetura foi aceita pela monitora.",
    tempo: "HA 2 HORAS",
  },
  {
    id: 2,
    titulo: "Material Disponibilizado",
    texto: "Novas listas de exercicios de Calculo I no portal.",
    tempo: "ONTEM",
  },
  {
    id: 3,
    titulo: "Duvida Respondida",
    texto: "O monitor Andre respondeu sua pergunta sobre integrais.",
    tempo: "2 DIAS ATRAS",
  },
  {
    id: 4,
    titulo: "Sessao Concluida",
    texto: "Voce participou da monitoria de Algoritmos.",
    tempo: "3 DIAS ATRAS",
  },
];

export default function DashboardAluno() {
  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">M</div>
          <div>
            <h1>MONITORIA MMA</h1>
            <p>PORTAL DISCENTES</p>
          </div>
        </div>

        <nav className="menu">
          <a className="menu-item active" href="#">Dashboard</a>
          <a className="menu-item" href="#">Buscar Horarios</a>
          <a className="menu-item" href="#">Meus Agendamentos</a>
          <a className="menu-item" href="#">Historico</a>
        </nav>

        <div className="menu-bottom">
          <a className="menu-item" href="#">Configuracoes</a>
          <a className="menu-item" href="#">Sair</a>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <input
            className="search-top"
            placeholder="Buscar disciplinas ou codigos..."
          />
          <div className="user-box">
            <strong>Marcos Oliveira</strong>
            <span>2023004562</span>
          </div>
        </header>

        <div className="content-grid">
          <section className="left-col">
            <section className="hero">
              <div>
                <h2>Bem-vindo ao Moodulo de Monitoria Academico</h2>
                <p>
                  Sua jornada de monitoria centralizada. Organize seus estudos,
                  agende encontros e acompanhe seu desempenho em um so lugar.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-yellow">Novo Agendamento</button>
                  <button className="btn btn-dark">Ver Meu Historico</button>
                </div>
              </div>
              <div className="hero-shape" />
            </section>

            <section className="section-head">
              <div>
                <h3>Proximos Agendamentos</h3>
                <p>Seus encontros confirmados para esta semana</p>
              </div>
              <a href="#">Ver Todos</a>
            </section>

            <section className="cards">
              {agendamentos.map((item) => (
                <article key={item.id} className={`card ${item.tag}`}>
                  <span className="badge">{item.horario}</span>
                  <h4>{item.disciplina}</h4>
                  <p>Monitor(a): {item.monitor}</p>
                  <hr />
                  <p>{item.local}</p>
                </article>
              ))}
            </section>

            <section className="quick-search">
              <h3>Busca Rapida de Disciplinas</h3>
              <div className="quick-row">
                <input placeholder="Ex: Algoritmos ou CT0012" />
                <button>Pesquisar</button>
              </div>
              <div className="chips">
                <span>Algoritmos</span>
                <span>Fisica II</span>
                <span>Estatistica</span>
                <span>Eng. Software</span>
              </div>
            </section>
          </section>

          <aside className="timeline">
            <h3>Atividades Recentes</h3>
            <ul>
              {atividades.map((a) => (
                <li key={a.id}>
                  <strong>{a.titulo}</strong>
                  <p>{a.texto}</p>
                  <small>{a.tempo}</small>
                </li>
              ))}
            </ul>
            <button className="full-btn">Ver registro completo</button>
          </aside>
        </div>
      </main>
    </div>
  );
}
