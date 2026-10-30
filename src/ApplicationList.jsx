export default function ApplicationList({ applications }) {
  return (
    <section className="mt-6 space-y-3">
      {applications.map((application) => (
        <article
          key={application.id}
          className="rounded-lg border bg-white p-5"
        >
          <h2 className="text-lg font-bold">{application.companyName}</h2>
          <p className="text-slate-700">{application.role}</p>
          <p className="text-sm text-slate-500">{application.location}</p>

          <p className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            {application.status}
          </p>
        </article>
      ))}
    </section>
  );
}