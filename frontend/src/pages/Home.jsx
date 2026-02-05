import { useState } from "react";
import JobList from "../components/JobList";
import ApplicationForm from "../components/ApplicationForm";

export default function Home() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <h1>🌍 Global Remote Jobs</h1>

      <JobList onJobSelect={setSelectedJob} />

      <h2>Apply Now</h2>
      <ApplicationForm selectedJob={selectedJob} />
    </>
  );
}
