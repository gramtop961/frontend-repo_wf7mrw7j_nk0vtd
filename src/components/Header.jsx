export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="mx-auto max-w-5xl px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-500 to-fuchsia-600 shadow-lg shadow-rose-500/30" />
          <span className="text-lg font-semibold tracking-tight text-gray-900">Hola</span>
        </div>
        <nav className="text-sm text-gray-600">
          <span className="px-3 py-1 rounded-full bg-gray-100/70">Simple greeting</span>
        </nav>
      </div>
    </header>
  );
}
