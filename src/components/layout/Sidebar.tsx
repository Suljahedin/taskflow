import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-[250px] bg-card text-foreground border-b md:border-b-0 md:border-r border-border p-4 md:p-6 md:min-h-screen shrink-0">
      <h1 className="text-2xl font-bold mb-8">TaskFlow</h1>

      <nav className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-4">
        <a
          href="#"
          className="text-muted hover:bg-background rounded-md px-3 py-2"
        >
          Dashboard
        </a>

        <a
          href="#"
          className="text-muted hover:bg-background rounded-md px-3 py-2"
        >
          My Tasks
        </a>

        <a
          href="#"
          className="text-muted hover:bg-background rounded-md px-3 py-2"
        >
          Categories
        </a>

        <a
          href="#"
          className="text-muted hover:bg-background rounded-md px-3 py-2"
        >
          Settings
        </a>
      </nav>

      <ThemeToggle />
    </aside>
  );
}
