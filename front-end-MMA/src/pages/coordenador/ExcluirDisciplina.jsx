// src/pages/coordenador/ExcluirDisciplina.jsx
import SidebarCoord from "../../components/SidebarCoordenador";
import "./disciplina-crud.css";

export default function ExcluirDisciplina() {
  return (
    <div className="dm-page">
      <SidebarCoord />

      <main className="dm-main">
        <Topbar />
        <section className="dm-content">
          <button className="dm-back" type="button">← Voltar para Gerenciamento de Disciplina</button>

          <div className="dm-layout">
            <article className="dm-card">
              <h1 className="dm-danger-title">Excluir Disciplina</h1>

              <div className="dm-alert">
                A exclusao desta disciplina removera todos os vinculos de monitoria associados a ela.
                Esta acao e irreversivel e afetara os relatorios de frequencia de estudantes ativos.
              </div>

              <div className="dm-selected">
                <h4>Dados da Disciplina Selecionada</h4>
                <p><b>Nome:</b> Calculo I</p>
                <p><b>Codigo:</b> DCET0102</p>
                <p><b>Departamento:</b> Ciencias Exatas e Tecnologicas</p>
              </div>

              <div className="dm-actions left">
                <button className="btn danger" type="button">Confirmar Exclusao</button>
                <button className="btn ghost" type="button">Voltar</button>
              </div>
            </article>

            <aside className="dm-side">
              <article className="dm-info">
                <h4>Impacto da Acao</h4>
                <ul className="dm-impact-list">
                  <li>04 monitores serao desligados automaticamente.</li>
                  <li>Historico de editais vinculados sera arquivado.</li>
                  <li>Relatorios parciais do semestre serao deletados.</li>
                </ul>
              </article>

              <article className="dm-tip">
                <h4>Dica de Seguranca</h4>
                <p>
                  Se quiser impedir novos registros mantendo historico,
                  considere usar "Arquivar Disciplina" em vez de excluir.
                </p>
              </article>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}

function Topbar() {
  return (
    <header className="dm-topbar">
      <strong>MMA - Academic Atelier</strong>
      <div className="dm-top-right">
        <div className="dm-search"><SearchIcon /><input placeholder="Search resources..." /></div>
        <BellIcon /><HelpIcon /><UserIcon />
      </div>
    </header>
  );
}

function IconBase({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>;
}
function SearchIcon() { return <IconBase><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></IconBase>; }
function BellIcon() { return <IconBase><path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></IconBase>; }
function HelpIcon() { return <IconBase><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-.7.7-1.3 1.1-1.3 2.3" /><path d="M12 17h.01" /></IconBase>; }
function UserIcon() { return <IconBase><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></IconBase>; }
