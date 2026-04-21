import { useLocation, useNavigate } from "react-router-dom";
import "./agendar-monitoria.css";

export default function ConfirmacaoMonitoria() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const info = state || {
    disciplina: "Algebra Linear",
    monitor: "Gabriel Santos",
    data: "Quarta-feira, 25 de Outubro",
    horario: "14:00 - 15:00",
    local: "Bloco Academico II - Sala 104",
    duvida: "Sem descricao informada.",
  };

  return (
    <div className="agendar-page">
      <h1>Revise seu Agendamento</h1>
      <p className="step">Passo 2 de 2 - Confirmacao Final</p>

      <section className="card">
        <p><b>Disciplina:</b> {info.disciplina}</p>
        <p><b>Monitor:</b> {info.monitor}</p>
        <p><b>Data:</b> {info.data}</p>
        <p><b>Horario:</b> {info.horario}</p>
        <p><b>Local:</b> {info.local}</p>
      </section>

      <section className="card">
        <h4>Sua descricao da duvida</h4>
        <p>{info.duvida || "Sem descricao informada."}</p>
      </section>

      <div className="actions">
        <button className="btn ghost" onClick={() => navigate(-1)}>
          Voltar e Editar
        </button>
        <button className="btn primary">
          Confirmar Agendamento
        </button>
      </div>
    </div>
  );
}
