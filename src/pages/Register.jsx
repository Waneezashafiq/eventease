import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addRegistration } from "../features/registrations/registrationSlice";
import { mockEvents } from "../api/mockApi";
import "../styles/global.css";

const Register = () => {
  const { id } = useParams();
  const event = mockEvents.find((e) => String(e.id) === String(id)); // ✅ ID match fix

  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 🗺 Random locations list
  const locations = [
    "Lahore, Pakistan",
    "Karachi, Pakistan",
    "Islamabad, Pakistan",
    "Multan, Pakistan",
    "Faisalabad, Pakistan",
    "Peshawar, Pakistan",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!event) {
      setError("⚠️ Invalid event. Please try again.");
      return;
    }

    const storedData = JSON.parse(localStorage.getItem("registrations")) || [];

    const alreadyExists = storedData.some(
      (r) =>
        r.eventId === event.id &&
        (r.email === form.email || r.phone === form.phone)
    );

    if (alreadyExists) {
      setError("❌ You’re already registered for this event!");
      return;
    }

    // 📅 Current date (system se)
    const currentDate = new Date().toLocaleDateString();

    // 📍 Random location assign
    const randomLocation =
      event.location || locations[Math.floor(Math.random() * locations.length)];

    // ✅ Store registration
    const newRegistration = {
      ...form,
      eventId: event.id,
      eventName: event.name,
      date: currentDate,
      location: randomLocation,
      image: event.image,
    };

    const updatedData = [...storedData, newRegistration];
    localStorage.setItem("registrations", JSON.stringify(updatedData));

    dispatch(addRegistration(newRegistration));

    navigate("/confirmation", { state: { ...form, event: newRegistration } });
  };

  if (!event) {
    return <p style={{ color: "red" }}>⚠️ Invalid event. Please try again.</p>;
  }

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
          {error && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "-5px" }}>
              {error}
            </p>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
