import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addRegistration } from "../features/registrations/registrationSlice";
import { mockEvents } from "../api/mockApi";
import "../styles/global.css"; // make sure global.css is imported here

const Register = () => {
  const { id } = useParams();
  const event = mockEvents.find((e) => e.id === parseInt(id));
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRegistration({ ...form, event: { ...event, image: event.image } }));

    navigate("/confirmation", { state: { ...form, event } });
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Register for {event.name}</h2>
        <form onSubmit={handleSubmit}>
          {["name", "email", "phone"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field.toUpperCase()}
              value={form[field]}
              onChange={handleChange}
              required
            />
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
