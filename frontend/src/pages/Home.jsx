import { useState } from "react";
import JobList from "../components/JobList";
import ApplicationForm from "../components/ApplicationForm";

export default function Home() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="container">
      <h1>🌍 Global Remote Jobs</h1>

      <JobList onJobSelect={setSelectedJob} />

      {selectedJob && (
        <>
          <h2>Apply for {selectedJob.title}</h2>
          <ApplicationForm selectedJob={selectedJob} />
        </>
      )}
    </div>
  );
}