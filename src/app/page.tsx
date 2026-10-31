export default function Home() {
  return (
    <div className="space-y-2 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900">Good morning!</h1>
      <p className="text-slate-500">Here's what's happening with your tasks.</p>
      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-sm font-medium text-slate-500">Total tasks</h2>
          <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-sm font-medium text-slate-500">Completed</h2>
          <p className="text-3xl font-bold text-slate-900 mt-2">5</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-sm font-medium text-slate-500">In Progress</h2>
          <p className="text-3xl font-bold text-slate-900 mt-2">4</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-sm font-medium text-slate-500">Overdue</h2>
          <p className="text-3xl font-bold text-slate-900 mt-2">3</p>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900">Recent tasks</h2>
        <div className="mt-4 flex flex-col gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">Finish TaskFlow UI</h3>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-slate-500">October 31, 2026</p>
              <span className="inline-flex rounded-full px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100">
                In Progress
              </span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">
              Create authentication system
            </h3>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-slate-500">November 2, 2026</p>
              <span className="inline-flex rounded-full px-3 py-1 text-xs font-medium text-slate-700 bg-slate-100">
                Todo
              </span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">
              Connect PostgreSQL database
            </h3>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-slate-500">November 5, 2026</p>
              <span className="inline-flex rounded-full px-3 py-1 text-xs font-medium text-green-700 bg-green-100">
                Completed
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900">Upcoming tasks</h2>

        <div className="mt-4 flex flex-col gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">
              Implement task filtering
            </h3>

            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-slate-500">November 4, 2026</p>

              <span className="inline-flex rounded-full px-3 py-1 text-xs font-medium bg-red-100 text-red-700">
                High
              </span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">Write API tests</h3>

            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-slate-500">November 7, 2026</p>

              <span className="inline-flex rounded-full px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-700">
                Medium
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
