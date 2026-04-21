import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarAluno from "../../components/SidebarAluno"; // ajuste o caminho se necessário
import "./agendar-monitoria.css";

export default function AgendarMonitoria() {
  const navigate = useNavigate();
  const [duvida, setDuvida] = useState("");

  function handleProximo(e) {
    e.preventDefault();
    navigate("/aluno/agendar/confirmacao", {
      state: {
        disciplina: "Algebra Linear",
        monitor: "Gabriel Santos",
        data: "Quarta-feira, 25 de Outubro",
        horario: "14:00 - 15:00",
        local: "Bloco Academico II - Sala 104",
        duvida,
      },
    });
  }

  return (
    <div className="agendar-shell">
      <SidebarAluno />

      <main className="agendar-main">
        <form className="agendar-page" onSubmit={handleProximo}>
          <h1>Agendamento</h1>
          <p className="step">Passo 1 de 2</p>

          <section className="card">
            <h2>Componente Curricular</h2>
            <h3>Algebra Linear</h3>
            <p>Proxima vaga: Hoje, 14:00</p>
            <p>Local: Bloco Academico II - Sala 104</p>
          </section>

          <div className="grid">
            <section className="card">
              <h4>Horario Selecionado</h4>
              <p className="big">Quarta-feira, 25 de Outubro</p>
              <p>Das 14:00 as 15:00</p>
            </section>

            <section className="card">
              <h4>Descrever sua Duvida</h4>
              <textarea
                rows={7}
                value={duvida}
                onChange={(e) => setDuvida(e.target.value)}
                placeholder="Explique brevemente sua duvida..."
              />
            </section>
          </div>

          <div className="actions">
            <button type="button" className="btn ghost">Cancelar</button>
            <button type="submit" className="btn primary">Proximo</button>
          </div>
        </form>
      </main>
    </div>
  );
}
