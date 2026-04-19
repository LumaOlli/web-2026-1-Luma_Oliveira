export default function Sidebar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-200 dark:bg-slate-800 flex flex-col py-8 px-4">
      <div className="mb-10">
        <h1 className="text-xl font-bold">MMA UFERSA</h1>
        <p className="text-xs text-slate-500 uppercase">
          Portal do Monitor
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        <a className="flex gap-2 p-2 bg-slate-300 rounded font-bold">
          Dashboard
        </a>

        <a className="flex gap-2 p-2 hover:bg-slate-300 rounded">
          Meus Horários
        </a>

        <a className="flex gap-2 p-2 hover:bg-slate-300 rounded">
          Agendamento
        </a>

        <a className="flex gap-2 p-2 hover:bg-slate-300 rounded">
          Atendimento
        </a>
      </nav>

      <div className="mt-auto space-y-2">
        <a className="flex gap-2 p-2 hover:bg-slate-300 rounded">
          Configurações
        </a>
        <a className="flex gap-2 p-2 hover:bg-slate-300 rounded">
          Sair
        </a>
      </div>
    </aside>
  );
}