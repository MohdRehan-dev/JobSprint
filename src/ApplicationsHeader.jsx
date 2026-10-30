export default function ApplicationsHeader() {
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">Applications</h1>

        <button
          type="button"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          Add Application
        </button>
      </div>

      <input
        type="text"
        aria-label="Search applications"
        placeholder="Search applications..."
        className="mt-6 w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
      />
    </>
  );
}