import React from 'react';
import './JobListings.css';

const JobListings = () => {
  const jobs = [
    { title: 'Frontend Developer', company: 'Company A', location: 'Location A', id: 1 },
    { title: 'Backend Developer', company: 'Company B', location: 'Location B', id: 2 },
    // Add more job objects as needed
  ];

  return (
    <section id="job-listings">
      <h2>Job Listings</h2>
      <div className="jobs">
        {jobs.map(job => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <a href={`/job-detail?id=${job.id}`}>View Details</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobListings;
