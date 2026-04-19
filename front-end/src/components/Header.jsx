export default function Header() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-white shadow flex items-center justify-between px-8">
      <h1 className="font-bold text-lg">
        Monitoria Acadêmica
      </h1>

      <div className="flex items-center gap-4">
        <input
          className="bg-gray-100 px-3 py-1 rounded"
          placeholder="Buscar..."
        />

        <div className="h-8 w-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}