import React from "react";
import { useSelector } from "react-redux";
import "../styles/global.css";

const MyRegistrations = () => {
  const registrations = useSelector(
    (state) => state.registrations.registrations
  );

  return (
    <section className="event-section">
      <h1 className="event-heading">🎟 My Registered Events</h1>

      {registrations.length === 0 ? (
        <p className="no-data">No registrations yet.</p>
      ) : (
        <div className="event-grid">
          {registrations.map((r, idx) => (
            <div key={idx} className="event-card">
              <img
                src={r.event.image}
                alt={r.event.name}
                className="event-image"
              />
              <div className="event-info">
                <h2 className="event-name">{r.event.name}</h2>
                <div className="event-details">
                  <p>📅 {r.event.date}</p>
                  <p>📍 {r.event.location}</p>
                </div>
                <div className="registrant-info">
                  <p>
                    <strong>👤 Name:</strong> {r.name}
                  </p>
                  <p>
                    <strong>✉️ Email:</strong> {r.email}
                  </p>
                  <p>
                    <strong>📞 Phone:</strong> {r.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyRegistrations;
