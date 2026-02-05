import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { mockJobs } from "../services/mockJobs";

const USE_MOCK_DATA = true;

export default function JobList({ onJobSelect }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (USE_MOCK_DATA) {
      setJobs(mockJobs);
    }
  }, []);

  return (
    <div className="job-grid">
      {jobs.map(job => (
        <JobCard
          key={job._id}
          job={job}
          onSelect={onJobSelect}
        />
      ))}
    </div>
  );
}
