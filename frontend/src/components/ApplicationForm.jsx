import { useEffect, useState } from "react";

export default function ApplicationForm({ selectedJob }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    letter: "",
    jobTitle: ""
  });

  useEffect(() => {
    if (selectedJob) {
      setForm(prev => ({
        ...prev,
        jobTitle: selectedJob.title
      }));
    }
  }, [selectedJob]);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("FORM DATA (frontend test):", form);
    alert("Frontend working! Check console.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input value={form.jobTitle} disabled />
      <textarea name="letter" placeholder="Cover Letter" onChange={handleChange} />
      <button>Apply</button>
    </form>
  );
}
