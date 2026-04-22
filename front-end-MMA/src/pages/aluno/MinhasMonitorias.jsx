import SidebarAluno from "../../components/SidebarAluno";
import "./minhas-monitorias.css";

const agendadas = [
  {
    id: 1,
    disciplina: "Estrutura de Dados",
    monitor: "Dr. Ricardo Oliveira",
    dataHora: "24 Out, 14:00 - 16:00",
    local: "Sala 302 - Bloco B",
  },
  {
    id: 2,
    disciplina: "Calculo Diferencial I",
    monitor: "Ana Carolina Silva",
    dataHora: "26 Out, 09:00 - 11:00",
    local: "Laboratorio de Exatas 01",
  },
];

const historico = [
  {
    id: 1,
    status: "REALIZADO",
    disciplina: "Algoritmos",
    monitor: "Joao Pedro Lima",
    detalheA: "15 Out",
    detalheB: "Confirmada",
    tipo: "ok",
  },
  {
    id: 2,
    status: "CANCELADO",
    disciplina: "Redes de Computadores",
    monitor: "Mariana Souza",
    detalheA: "18 Out, 15:30",
    detalheB: "Cancelado pelo aluno",
    tipo: "cancel",
  },
];

export default function MinhasMonitorias() {
  return (
    <div className="mm-shell">

      <main className="mm-main">
        <header className="mm-topbar">
          <strong>Portal do Aluno MMA</strong>
          <div className="mm-top-actions">
            <span>🔔</span>
            <span className="avatar">👨‍🎓</span>
          </div>
        </header>

        <section className="mm-content">
          <h1>Minhas Monitorias</h1>
          <p>
            Acompanhe seus agendamentos, verifique horarios e gerencie suas sessoes
            de estudo assistido.
          </p>

          <div className="mm-grid">
            {agendadas.map((item) => (
              <article className="card agendada" key={item.id}>
                <span className="badge blue">AGENDADO</span>
                <h3>{item.disciplina}</h3>
                <p className="sub">Monitor: {item.monitor}</p>

                <div className="meta-row">
                  <div className="meta-box">
                    <small>DATA E HORARIO</small>
                    <strong>{item.dataHora}</strong>
                  </div>
                  <div className="meta-box">
                    <small>LOCAL / SALA</small>
                    <strong>{item.local}</strong>
                  </div>
                </div>

                <div className="actions-row">
                  <button className="btn navy">Adicionar ao Calendario</button>
                  <button className="btn danger-light">Cancelar Agendamento</button>
                </div>
              </article>
            ))}
          </div>

          <div className="mm-grid">
            {historico.map((item) => (
              <article className={`card historico ${item.tipo}`} key={item.id}>
                <span className={`badge ${item.tipo === "ok" ? "green" : "gray"}`}>
                  {item.status}
                </span>
                <h3>{item.disciplina}</h3>
                <p className="sub">Monitor: {item.monitor}</p>

                <div className="history-row">
                  <div>
                    <small>{item.tipo === "ok" ? "DATA" : "AGENDAMENTO ORIGINAL"}</small>
                    <strong>{item.detalheA}</strong>
                  </div>
                  <div>
                    <small>{item.tipo === "ok" ? "PRESENCA" : "STATUS"}</small>
                    <strong>{item.detalheB}</strong>
                  </div>
                  {item.tipo === "ok" ? (
                    <a href="#materiais">Ver Materiais</a>
                  ) : (
                    <span className="muted-note">-</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
