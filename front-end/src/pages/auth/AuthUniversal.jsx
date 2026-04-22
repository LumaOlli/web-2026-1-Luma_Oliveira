// src/pages/auth/AuthUniversal.jsx
import { useState } from "react";
import "./auth-universal.css";

export default function AuthUniversal() {
  const [mode, setMode] = useState("login"); // login | cadastro

  return (
    <div className="auth-page">
      <header className="auth-topbar">
        <strong>MMA UFERSA</strong>
        <button className="help-btn" type="button">?</button>
      </header>

      <main className="auth-main">
        <section className="auth-card">
          <aside className={`auth-left ${mode}`}>
            <div className="overlay" />
            <div className="left-content">
              {mode === "login" ? (
                <>
                  <h4>MMA UFERSA</h4>
                  <h1>Transformando o Monitoramento Acadêmico.</h1>
                  <p>
                    Uma plataforma dedicada à excelência educacional, conectando
                    monitores e docentes em um ambiente de dados inteligente.
                  </p>
                </>
              ) : (
                <>
                  <h4>UFERSA ACADEMIC ATELIER</h4>
                  <h1>Excelência no Acompanhamento Acadêmico.</h1>
                  <p>
                    Transformamos a gestão de monitorias em uma experiência de
                    curadoria de dados e sucesso estudantil.
                  </p>
                </>
              )}
            </div>
          </aside>

          <section className="auth-right">
            {mode === "login" ? (
              <>
                <h2>Acesse o MMA</h2>
                <p className="sub">Portal de Monitorias da UFERSA</p>

                <label>E-MAIL INSTITUCIONAL OU MATRÍCULA</label>
                <input placeholder="Ex: nome.sobrenome@ufersa.edu.br" />

                <div className="row-label">
                  <label>SENHA</label>
                  <button type="button" className="link">Esqueci minha senha</button>
                </div>
                <input type="password" placeholder="••••••••" />

                <button className="primary-btn">Entrar →</button>

                <div className="divider"><span>OU</span></div>

                <p className="switch-text">
                  Novo na plataforma?{" "}
                  <button type="button" className="link" onClick={() => setMode("cadastro")}>
                    Criar conta
                  </button>
                </p>
              </>
            ) : (
              <>
                <h2>Crie sua Conta</h2>
                <p className="sub">Preencha os dados abaixo para iniciar sua jornada.</p>

                <label>NOME COMPLETO</label>
                <input placeholder="Ex: Maria Silva Santos" />

                <label>E-MAIL INSTITUCIONAL</label>
                <input placeholder="nome.sobrenome@ufersa.edu.br" />

                <div className="grid-2">
                  <div>
                    <label>MATRÍCULA</label>
                    <input placeholder="2024000000" />
                  </div>
                  <div>
                    <label>CURSO</label>
                    <select defaultValue="">
                      <option value="" disabled>Selecione seu curso</option>
                      <option>Ciência da Computação</option>
                      <option>Engenharia de Software</option>
                      <option>Sistemas de Informação</option>
                    </select>
                  </div>
                </div>

                <button className="primary-btn">Criar Minha Conta →</button>

                <p className="switch-text">
                  Já possui conta?{" "}
                  <button type="button" className="link" onClick={() => setMode("login")}>
                    Faça login
                  </button>
                </p>
              </>
            )}
          </section>
        </section>
      </main>

      <footer className="auth-footer">
        <strong>MMA UFERSA</strong>
        <span>© 2024 UFERSA - Monitoramento Acadêmico</span>
        <nav>
          <a href="#privacidade">Políticas de Privacidade</a>
          <a href="#suporte">Suporte Técnico</a>
          <a href="#portal">Portal UFERSA</a>
        </nav>
      </footer>
    </div>
  );
}
