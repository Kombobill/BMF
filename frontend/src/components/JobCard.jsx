export default function JobCard({ job, onSelect }) {
  return (
    <div className="job-card" onClick={() => onSelect(job)}>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p className="remote">{job.location}</p>
    </div>
  );
}
