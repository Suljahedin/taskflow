export default function Home() {
  return (
    <div className="space-y-2 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-foreground">Good morning!</h1>

      <p className="text-muted">Here's what's happening with your tasks.</p>

      {/* Statistics */}
      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-sm font-medium text-muted">Total tasks</h2>
          <p className="text-3xl font-bold text-foreground mt-2">12</p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-sm font-medium text-muted">Completed</h2>
          <p className="text-3xl font-bold text-foreground mt-2">5</p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-sm font-medium text-muted">In Progress</h2>
          <p className="text-3xl font-bold text-foreground mt-2">4</p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-sm font-medium text-muted">Overdue</h2>
          <p className="text-3xl font-bold text-foreground mt-2">3</p>
        </div>
      </section>

      {/* Recent Tasks */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground">Recent tasks</h2>

        <div className="mt-4 flex flex-col gap-4">
          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-foreground">
              Finish TaskFlow UI
            </h3>

            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-muted">October 31, 2026</p>

              <span className="inline-flex rounded-full px-3 py-1 text-xs font-medium bg-[var(--badge-blue-bg)] text-[var(--badge-blue-text)]">
                In Progress
              </span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-foreground">
              Create authentication system
            </h3>

            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-muted">November 2, 2026</p>

              <span className="inline-flex rounded-full px-3 py-1 text-xs font-medium bg-[var(--badge-gray-bg)] text-[var(--badge-gray-text)]">
                Todo
              </span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-foreground">
              Connect PostgreSQL database
            </h3>

            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-muted">November 5, 2026</p>

              <span className="inline-flex rounded-full px-3 py-1 text-xs font-medium bg-[var(--badge-green-bg)] text-[var(--badge-green-text)]">
                Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Tasks */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground">Upcoming tasks</h2>

        <div className="mt-4 flex flex-col gap-4">
          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-foreground">
              Implement task filtering
            </h3>

            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-muted">November 4, 2026</p>

              <span className="inline-flex rounded-full px-3 py-1 text-xs font-medium bg-[var(--badge-red-bg)] text-[var(--badge-red-text)]">
                High
              </span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-foreground">Write API tests</h3>

            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-muted">November 7, 2026</p>

              <span className="inline-flex rounded-full px-3 py-1 text-xs font-medium bg-[var(--badge-yellow-bg)] text-[var(--badge-yellow-text)]">
                Medium
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
