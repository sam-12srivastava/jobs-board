import React from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
  return (
    <section id="application-form">
      <h2>Application Form</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Resume:
          <input type="file" name="resume" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ApplicationForm;
