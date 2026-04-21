import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import Header from "../components/Header";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings-page">
      <SidebarMenu />
      
      <main className="content">
        <Header titulo="Configurações" />

        <div className="settings-container">
          {/* Seção de Perfil */}
          <section className="settings-section">
            <div className="section-info">
              <h3>Perfil do Monitor</h3>
              <p>Gerencie suas informações públicas e de contato.</p>
            </div>
            
            <div className="settings-card">
              <div className="profile-upload">
                <div className="avatar-large">
                  <UserIcon />
                </div>
                <button className="text-button">Alterar foto</button>
              </div>

              <div className="form-grid">
                <div className="input-group">
                  <label>Nome Completo</label>
                  <input type="text" defaultValue="Luma Oliveira" />
                </div>
                <div className="input-group">
                  <label>E-mail Acadêmico</label>
                  <input type="email" defaultValue="luma.oliveira@ufersa.edu.br" />
                </div>
                <div className="input-group">
                  <label>Matrícula</label>
                  <input type="text" defaultValue="2026104050" disabled />
                </div>
                <div className="input-group">
                  <label>Telefone / WhatsApp</label>
                  <input type="text" placeholder="(00) 00000-0000" />
                </div>
              </div>
            </div>
          </section>

          {/* Seção de Preferências */}
          <section className="settings-section">
            <div className="section-info">
              <h3>Preferências de Notificação</h3>
              <p>Escolha como deseja ser avisado sobre novos agendamentos.</p>
            </div>

            <div className="settings-card">
              <div className="toggle-item">
                <div>
                  <strong>Notificações por E-mail</strong>
                  <p>Receber resumo diário de agendamentos.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="toggle-item">
                <div>
                  <strong>Alertas do Sistema</strong>
                  <p>Notificações em tempo real no navegador.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </section>

          <div className="settings-actions">
             <button className="secondary-button">Cancelar</button>
             <button className="primary-button">Salvar Alterações</button>
          </div>
        </div>
      </main>
    </div>
  );
}

/* Ícone auxiliar */
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '48px', color: '#9aa3b2'}}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}