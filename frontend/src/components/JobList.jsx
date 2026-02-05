import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { mockJobs } from "../services/mockJobs";

export default function JobList({ onJobSelect }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // simulate random jobs on each load
    const shuffledJobs = [...mockJobs].sort(() => 0.5 - Math.random());
    setJobs(shuffledJobs.slice(0, 6)); // show 6 random jobs
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

