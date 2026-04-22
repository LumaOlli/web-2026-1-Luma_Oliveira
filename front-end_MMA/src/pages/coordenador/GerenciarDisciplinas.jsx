// src/pages/coordenador/GerenciarDisciplinas.jsx
import { useNavigate } from "react-router-dom";
import SidebarCoord from "../../components/SidebarCoordenador";
import "./gerenciar-disciplinas.css";

const disciplinas = [
  { id: "#1024", nome: "Calculo Diferencial e Integral I", codigo: "DCET0102", dep: "Ciencias Exatas e Tecnologicas", status: "Ativo", monitores: 6 },
  { id: "#1025", nome: "Introducao a Programacao", codigo: "DCOMP045", dep: "Computacao e Tecnologia", status: "Ativo", monitores: 4 },
  { id: "#1032", nome: "Algoritmos e Estrutura de Dados", codigo: "DCOMP089", dep: "Computacao e Tecnologia", status: "Pendente", monitores: 0 },
  { id: "#1040", nome: "Fisica Teorica e Experimental I", codigo: "DCET0122", dep: "Ciencias Exatas e Tecnologicas", status: "Ativo", monitores: 2 },
  { id: "#1088", nome: "Geometria Analitica", codigo: "DCET0100", dep: "Ciencias Exatas e Tecnologicas", status: "Interrompido", monitores: 0 },
];

export default function GerenciarDisciplinas() {
  const navigate = useNavigate();

  const goNova = () => navigate("/coordenador/disciplinas/nova");
  const goEditar = (id) => navigate(`/coordenador/disciplinas/editar/${id.replace("#", "")}`);
  const goExcluir = (id) => navigate(`/coordenador/disciplinas/excluir/${id.replace("#", "")}`);

  return (
    <div className="gd-page">
      <SidebarCoord />

      <main className="gd-main">
        <section className="gd-head">
          <div>
            <h2>Gerenciar Disciplinas</h2>
            <p className="gd-sub">
              Visualize and configure academic courses for the current semester monitoring program.
            </p>
          </div>

          <button type="button" className="gd-create-btn" onClick={goNova}>
            <PlusIcon /> Criar Nova Disciplina
          </button>
        </section>

        <section className="gd-summary">
          <article className="gd-card">
            <div className="gd-card-top">
              <div className="gd-book-icon"><BookIcon /></div>
              <span className="gd-badge">+12%</span>
            </div>
            <p className="gd-label">TOTAL DE DISCIPLINAS</p>
            <strong>142</strong>
          </article>
        </section>

        <section className="gd-toolbar">
          <div className="gd-search">
            <SearchIcon />
            <input placeholder="Filtrar por nome da disciplina ou codigo..." />
          </div>
          <button type="button" className="gd-light-btn"><FilterIcon /> Departamento</button>
          <button type="button" className="gd-light-btn"><DownloadIcon /> Exportar</button>
        </section>

        <section className="gd-table-wrap">
          <table className="gd-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME DA DISCIPLINA</th>
                <th>CODIGO</th>
                <th>DEPARTAMENTO</th>
                <th>ACOES</th>
              </tr>
            </thead>

            <tbody>
              {disciplinas.map((d) => (
                <tr key={d.id}>
                  <td className="gd-id">{d.id}</td>
                  <td>
                    <strong>{d.nome}</strong>
                    <p className="gd-status-line">
                      <span className={`dot ${d.status.toLowerCase()}`} />
                      {d.status} • {d.monitores} Monitores
                    </p>
                  </td>
                  <td><span className="gd-code">{d.codigo}</span></td>
                  <td>{d.dep}</td>
                  <td className="gd-actions">
                    <button type="button" onClick={() => goEditar(d.id)} title="Editar">
                      <EditIcon />
                    </button>
                    <button type="button" className="danger" onClick={() => goExcluir(d.id)} title="Remover">
                      <TrashIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="gd-footer">
            <p>Mostrando <strong>1 - 5</strong> de <strong>142</strong> disciplinas</p>
            <div className="gd-pagination">
              <button type="button">‹</button>
              <button type="button" className="active">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <span>…</span>
              <button type="button">28</button>
              <button type="button">›</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* icons */
function IconBase({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}
function SearchIcon() { return <IconBase><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></IconBase>; }
function PlusIcon() { return <IconBase><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></IconBase>; }
function BookIcon() { return <IconBase><path d="M2 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H2z" /><path d="M22 4h-6a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h6z" /></IconBase>; }
function FilterIcon() { return <IconBase><line x1="4" y1="6" x2="20" y2="6" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="18" x2="14" y2="18" /></IconBase>; }
function DownloadIcon() { return <IconBase><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></IconBase>; }
function EditIcon() { return <IconBase><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></IconBase>; }
function TrashIcon() { return <IconBase><polyline points="3 6 5 6 21 6" /><path d="M19 6 18 20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></IconBase>; }