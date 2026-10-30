import Sidebar from "./Sidebar";
import ApplicationsHeader from "./ApplicationsHeader";
import ApplicationList from "./ApplicationList";
import { useState } from "react";

export default function JobSprint() {
  const [activePage, setActivePage] = useState("Applications");

  const applications = [
    {
      id: 1,
      companyName: "Demo Labs",
      role: "Frontend Developer",
      location: "Mumbai",
      status: "Applied",
    },
    {
      id: 2,
      companyName: "Sample Tech",
      role: "React Developer",
      location: "Andheri East",
      status: "Interview",
    },
    {
      id: 3,
      companyName: "Practice Works",
      role: "Web Developer",
      location: "Remote",
      status: "Saved",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 md:flex-row">
      <Sidebar changePage={setActivePage} />

      <main className="min-w-0 flex-1 p-4 md:p-8">
        {activePage === "Applications" ? (
          <>
            <ApplicationsHeader />
            <ApplicationList applications={applications} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="mt-4">Total applications: {applications.length}</p>
          </>
        )}
      </main>
    </div>
  );
}
