import React from "react";
import SidebarMenu from "../../components/SidebarMenu";
import Header from '../../components/Header'; // Seu componente padronizado
import "./relatoriosM.css";

const guidelines = [
  "O relatório deve ser preenchido de forma imparcial e profissional.",
  "Mencione especificamente o uso de laboratórios ou ferramentas digitais.",
  "O coordenador terá até 5 dias úteis para validar as horas.",
];

export default function RelatoriosM() {
  return (
    <div className="app-layout">
      <SidebarMenu />

      <main className="app-content report-page">
        {/* PADRONIZAÇÃO AQUI: Substituímos o <header> antigo pelo componente oficial */}
        <Header titulo="Relatório Semestral" />

        <div className="page-container">
          <section className="report-metrics">
            <article className="metric-card">
              <div className="metric-head">
                <UsersIcon />
                <span>CAPACIDADE</span>
              </div>
              <strong>142</strong>
              <p>Total de alunos atendidos no semestre</p>
              <div className="metric-line gold">
                <div className="metric-line-value" />
              </div>
            </article>

            <article className="metric-card dark">
              <div className="metric-head">
                <ClockIcon />
                <span>DURAÇÃO</span>
              </div>
              <strong>480h</strong>
              <p>Carga horária total acumulada</p>
            </article>

            <article className="metric-card">
              <div className="metric-head">
                <CheckSquareIcon />
                <span>EFICIÊNCIA</span>
              </div>
              <strong>94%</strong>
              <p>Taxa de satisfação dos monitorados</p>
              <div className="metric-line green">
                <div className="metric-line-value" />
              </div>
            </article>
          </section>

          <section className="report-grid">
            <div className="report-main">
              <article className="report-editor-card">
                <div className="section-title">
                  <span className="section-number">01.</span>
                  <h3>Resumo das Atividades do Semestre</h3>
                </div>
                <textarea placeholder="Descreva detalhadamente as metodologias aplicadas, tópicos abordados e principais desafios superados durante este período letivo..." />
              </article>

              <article className="report-editor-card">
                <div className="section-title">
                  <span className="section-number">02.</span>
                  <h3>Observações sobre o Desempenho</h3>
                </div>
                <textarea placeholder="Relate o engajamento das turmas, níveis de dificuldade recorrentes e sugestões de melhoria para o conteúdo programático..." />
              </article>
            </div>

            <aside className="report-side">
              <article className="side-card guidelines-card">
                <h4>DIRETRIZES DE AVALIAÇÃO</h4>
                <div className="guidelines-list">
                  {guidelines.map((item) => (
                    <div key={item} className="guideline-item">
                      <span className="guideline-dot">i</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="side-card status-card-report">
                <h4>STATUS DO DOCUMENTO</h4>
                <div className="doc-status">
                  <span className="status-bullet" />
                  <strong>AGUARDANDO ENVIO</strong>
                </div>
                <button className="submit-report-button">
                  <SendIcon />
                  ENVIAR PARA AVALIAÇÃO
                </button>
                <p>
                  Ao clicar em enviar, você confirma que todas as informações acima
                  são verdadeiras e condizem com suas atividades.
                </p>
              </article>
            </aside>
          </section>
        </div>
      </main>
    </div>
  );
}

/* --- ÍCONES (Mantidos apenas os necessários para o corpo da página) --- */

function IconBase({ children, viewBox = "0 0 24 24" }) {
  return (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function UsersIcon() { return <IconBase><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="4" /><path d="M20 8.5a3.5 3.5 0 0 1 0 7" /><path d="M17 20a4 4 0 0 0 0-8" /></IconBase>; }
function ClockIcon() { return <IconBase><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></IconBase>; }
function CheckSquareIcon() { return <IconBase><rect x="4" y="4" width="16" height="16" rx="2" /><path d="m8 12 3 3 5-6" /></IconBase>; }
function SendIcon() { return <IconBase><path d="M3 12h15" /><path d="m12 5 7 7-7 7" /></IconBase>; }