import React, { useState } from "react";

const LinearTravelsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    const url =
      "https://script.google.com/macros/s/AKfycby_Bk42ONtEQKVbPM8eDk91a_nVsrZr5eZK4GnRBARTJ_AZ-4CM_N_SZtVL4mojuuAi/exec";
    const body = new URLSearchParams({
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      Gender: formData.gender,
    }).toString();

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    })
      .then((res) => res.text())
      .then((data) => {
        setResponseMsg(data);
        setFormData({ name: "", email: "", phone: "", gender: "" });
        console.log("Form submitted:", formData);
      })
      .catch((error) => setResponseMsg("Submission failed."))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h1>React to Sheet</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br />
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
          required
        /> Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
          required
        /> Female
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Add"}
        </button>
      </form>
      {responseMsg && <p>{responseMsg}</p>}
    </div>
  );
};

export default LinearTravelsForm;