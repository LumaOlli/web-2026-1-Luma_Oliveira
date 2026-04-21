import React from 'react';
import SidebarAluno from '../components/SidebarAluno';
import Header from '../components/Header';
import './DashboardAluno.css';

const DashboardAluno = () => {
  return (
    <div className="dashboard-container">
      <SidebarAluno />
      
      <main className="dashboard-main">
        <Header userRole="Discente" userName="Marcos Oliveira" />

        <div className="dashboard-content">
          {/* Banner de Boas-vindas */}
          <section className="welcome-banner">
            <div className="banner-text">
              <h1>Bem-vindo ao Atelier Académico</h1>
              <p>Sua jornada de monitoria centralizada. Organize seus estudos, agende encontros e acompanhe seu desempenho em um só lugar.</p>
              <div className="banner-buttons">
                <button className="btn-primary-yellow">📅 Novo Agendamento</button>
                <button className="btn-secondary-outline">Ver Meu Histórico</button>
              </div>
            </div>
            <div className="banner-illustration"></div>
          </section>

          <div className="dashboard-grid">
            <div className="left-column">
              {/* Próximos Agendamentos */}
              <section className="appointments-section">
                <div className="section-header">
                  <h2>Próximos Agendamentos</h2>
                  <a href="/todos">Ver Todos →</a>
                </div>
                <div className="appointments-cards">
                  <article className="appointment-card border-yellow">
                    <span className="badge-yellow">HOJE às 14:00</span>
                    <h3>Cálculo Diferencial e Integral I</h3>
                    <p>👤 Monitor: André Silveira</p>
                    <p>📍 Laboratório de Informática 02</p>
                  </article>
                  <article className="appointment-card border-blue">
                    <span className="badge-blue">QUI às 10:30</span>
                    <h3>Arquitetura de Computadores</h3>
                    <p>👤 Monitora: Ana Costa</p>
                    <p>🎥 Google Meet (Link no e-mail)</p>
                  </article>
                </div>
              </section>

              {/* Busca Rápida */}
              <section className="quick-search-card">
                <h3>Busca Rápida de Disciplinas</h3>
                <div className="search-input-group">
                  <input type="text" placeholder="Ex: Algoritmos ou CT0012" />
                  <button className="btn-search">Pesquisar</button>
                </div>
                <div className="suggestions">
                  <span>Sugestões:</span>
                  {['Algoritmos', 'Física II', 'Estatística', 'Eng. Software'].map(item => (
                    <span key={item} className="suggestion-pill">{item}</span>
                  ))}
                </div>
              </section>
            </div>

            {/* Atividades Recentes (Direita) */}
            <aside className="recent-activities">
              <h3>Atividades Recentes</h3>
              <ul className="timeline">
                <li className="timeline-item">
                  <div className="status-dot green"></div>
                  <div className="timeline-content">
                    <strong>Agendamento Confirmado</strong>
                    <p>Sua solicitação para Arquitetura foi aceita pela monitora.</p>
                    <small>HÁ 2 HORAS</small>
                  </div>
                </li>
                {/* Repetir itens conforme protótipo */}
              </ul>
              <button className="btn-full-history">Ver registro completo</button>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardAluno;