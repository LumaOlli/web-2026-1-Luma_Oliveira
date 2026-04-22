// src/layouts/AlunoLayout.jsx
import { Outlet } from "react-router-dom";
import SidebarAluno from "../../components/SidebarAluno";
import "./aluno-layout.css";

export default function AlunoLayout() {
  return (
    <div className="aluno-layout">
      <SidebarAluno />
      <main className="aluno-main">
        <Outlet />
      </main>
    </div>
  );
}
