export default function Sidebar({ changePage }) {
  return (
    <aside className="w-full border-r bg-white p-6 md:w-64">
      <h2 className="mt-5 mb-10 text-xl font-bold">JobSprint</h2>

      <nav className="mt-8 space-y-5">
        <button
          type="button"
          className="block rounded-lg px-4 py-2 transition duration-150 hover:bg-blue-100 active:scale-95"
          onClick={() => changePage("Dashboard")}
        >
          Dashboard
        </button>

        <button
          type="button"
          className="block rounded-lg px-4 py-2 transition duration-150 hover:bg-blue-100 active:scale-95"
          onClick={() => changePage("Applications")}
        >
          Applications
        </button>
      </nav>
    </aside>
  );
}
