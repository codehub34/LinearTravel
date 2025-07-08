import React, { useState } from 'react';

const LinearTravelsForm = () => {
  const [pathway, setPathway] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzGaTKojhuW96iLDVES1Cu2FLwRhTbgzKmuY30sPFYABEeE6QY5PvrwdW-Vir4JcRkV/exec', {
        method: 'POST',
        body: new URLSearchParams(data),
      });

      const result = await response.json();
      if (result.result === 'success') {
        alert('Application submitted successfully!');
        e.target.reset();
        setPathway('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Linear Travels Application Form
      </h2>

      {/* Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Full Name" name="fullName" />
        <Input label="Email Address" name="email" type="email" />
        <Input label="Phone Number (WhatsApp preferred)" name="phone" />
        <Input label="Date of Birth" name="dob" type="date" />
        <Select label="Gender" name="gender" options={['Male', 'Female', 'Prefer not to say']} />
        <Input label="Country of Residence" name="country" />
      </div>

      {/* Pathway Selection */}
      <Select
        label="Which pathway are you applying for?"
        name="pathway"
        value={pathway}
        onChange={(e) => setPathway(e.target.value)}
        options={[
          'Enrollment in a Higher Education Program',
          'Placement through Professional Job Opportunities',
        ]}
      />

      {/* Conditional Fields */}
      {pathway === 'Enrollment in a Higher Education Program' && (
        <div className="space-y-4">
          <Select
            label="Highest Level of Education Completed"
            name="educationLevel"
            options={['High School', 'Diploma', 'Bachelor’s', 'Master’s']}
          />
          <Input label="Field of Study" name="fieldOfStudy" />
          <Input label="Preferred Country/Countries" name="preferredCountry" />
          <Select label="Do you have academic documents ready?" name="documentsReady" options={['Yes', 'No']} />
        </div>
      )}

      {pathway === 'Placement through Professional Job Opportunities' && (
        <div className="space-y-4">
          <Input label="Current Occupation" name="occupation" />
          <Select
            label="Years of Work Experience"
            name="experience"
            options={['0–1', '2–3', '4–5', '5+']}
          />
          <Input label="Preferred Industry or Job Type" name="jobType" />
        </div>
      )}

      {/* Additional Info */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Why are you interested in this opportunity?
        </label>
        <textarea name="motivation" rows="4" required className="mt-1 w-full border rounded-md p-2" />
      </div>

      <Select
        label="How did you hear about Linear Travels?"
        name="referralSource"
        options={['Facebook', 'WhatsApp', 'Referral', 'Website', 'Other']}
      />

      {/* Consent */}
      <div className="flex items-start">
        <input type="checkbox" name="consent" required className="mt-1 mr-2" />
        <label className="text-sm text-gray-700">
          I confirm that the information provided is accurate and agree to be contacted by Linear Travels.
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
};

// Reusable Input Component
const Input = ({ label, name, type = 'text' }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input type={type} name={name} required className="mt-1 w-full border rounded-md p-2" />
  </div>
);

// Reusable Select Component
const Select = ({ label, name, options, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="mt-1 w-full border rounded-md p-2"
    >
      <option value="">Select</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default LinearTravelsForm;