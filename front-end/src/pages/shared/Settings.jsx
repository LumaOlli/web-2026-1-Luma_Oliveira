import React from "react";
import { useLocation } from "react-router-dom";
import SidebarMenu from "../../components/SidebarMenu"; // Sidebar do Monitor
import SidebarAluno from "../../components/SidebarAluno";
import SidebarCoordenador from "../../components/SidebarCoordenador"; // Assume-se que criarás esta
import Header from "../../components/Header";
import "./settings.css";

export default function Settings() {
  const location = useLocation();
  
  // Identificação do Perfil baseada na URL
  const isAluno = location.pathname.includes("/aluno");
  const isCoord = location.pathname.includes("/coordenador");

  // Define o nome do perfil e a Sidebar correta
  let perfilNome = "Monitor";
  let SidebarAtiva = <SidebarMenu />;

  if (isAluno) {
    perfilNome = "Discente";
    SidebarAtiva = <SidebarAluno />;
  } else if (isCoord) {
    perfilNome = "Coordenador";
    SidebarAtiva = <SidebarCoordenador />;
  }

  return (
    <div className="settings-page">
      {/* 1. Sidebar Dinâmica */}
      {SidebarAtiva}
      
      <main className="content">
        <Header titulo="Configurações" />

        <div className="settings-container">
          <section className="settings-section">
            <div className="section-info">
              <h3>Perfil do {perfilNome}</h3>
              <p>Gerencie as informações de acesso ao portal {perfilNome}.</p>
            </div>
            
            <div className="settings-card">
              <div className="profile-upload">
                <div className="avatar-large">
                  <UserIcon />
                </div>
                <button className="text-button">Alterar foto de perfil</button>
              </div>

              <div className="form-grid">
                <div className="input-group">
                  <label>Nome Completo</label>
                  <input type="text" defaultValue="Luma Oliveira" />
                </div>
                <div className="input-group">
                  <label>E-mail Institucional</label>
                  <input type="email" defaultValue="luma.oliveira@ufersa.edu.br" />
                </div>
                <div className="input-group">
                  <label>Identificação / Matrícula</label>
                  <input type="text" defaultValue="2026104050" disabled />
                </div>
                <div className="input-group">
                  <label>Contacto Telefónico</label>
                  <input type="text" placeholder="(00) 00000-0000" />
                </div>
              </div>
            </div>
          </section>

          <section className="settings-section">
            <div className="section-info">
              <h3>Notificações e Segurança</h3>
              <p>
                {isCoord 
                  ? "Configure alertas sobre relatórios e gestão de monitores." 
                  : isAluno 
                    ? "Avisos sobre agendamentos e horários de monitoria." 
                    : "Alertas sobre novos pedidos de atendimento."}
              </p>
            </div>

            <div className="settings-card">
              <div className="toggle-item">
                <div>
                  <strong>Notificações por E-mail</strong>
                  <p>Receber alertas importantes na sua conta UFERSA.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="toggle-item">
                <div>
                  <strong>Autenticação de Dois Fatores</strong>
                  <p>Aumentar a segurança da conta do {perfilNome}.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </section>

          <div className="settings-actions">
             <button className="secondary-button">Descartar</button>
             <button className="primary-button">Guardar Alterações</button>
          </div>
        </div>
      </main>
    </div>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '48px', color: '#9aa3b2'}}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}