import { useNavigate } from "react-router-dom";
import "./logout.css";

export default function Logout() {
  const navigate = useNavigate();

  return (
    <div className="logout-page">
      <header className="logout-topbar">
        <span className="brand-name">Academic Monitoring</span>
        <div className="help-icon">?</div>
      </header>

      <main className="logout-content">
        <div className="logout-card">
          <div className="success-icon-wrapper">
            <CheckIcon />
          </div>

          <h1>Sessão Encerrada com Sucesso</h1>

          <p>
            Obrigado por utilizar o Módulo de Monitoria Acadêmica.
            Por segurança, recomendamos que feche esta janela do navegador.
          </p>

          <button className="re-access-button" onClick={() => navigate("/login")}>
            Acessar Novamente
            <LogoutIcon />
          </button>

          <div className="card-divider" />
          <span className="atelier-brand">UFERSA ACADEMIC ATELIER</span>
        </div>
      </main>

      <footer className="logout-footer">
        <div className="footer-left">
          <strong>UFERSA</strong>
          <span>© 2024 UFERSA ACADEMIC ATELIER.</span>
        </div>
        <div className="footer-right">
          <a href="#privacy">PRIVACY POLICY</a>
          <a href="#portal">INSTITUTIONAL PORTAL</a>
        </div>
      </footer>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "18px", marginLeft: "10px" }}>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  );
}