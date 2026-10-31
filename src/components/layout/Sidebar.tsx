export default function Sidebar() {
  return (
    <aside className="w-full md:w-[250px] bg-slate-900 text-white p-4 md:p-6 md:min-h-screen shrink-0">
      <h1 className="text-2xl font-bold mb-8">TaskFlow</h1>
      <nav className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-4">
        <a
          href="#"
          className="text-slate-300 hover:bg-slate-800 rounded-md px-3 py-2"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="text-slate-300 hover:bg-slate-800 rounded-md px-3 py-2"
        >
          My Tasks
        </a>
        <a
          href="#"
          className="text-slate-300 hover:bg-slate-800 rounded-md px-3 py-2"
        >
          Categories
        </a>
        <a
          href="#"
          className="text-slate-300 hover:bg-slate-800 rounded-md px-3 py-2"
        >
          Settings
        </a>
      </nav>
    </aside>
  );
}
