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
                src={
                  r.image ||
                  "https://via.placeholder.com/400x250?text=Event+Image"
                }
                alt={r.eventName || "Event"}
                className="event-image"
              />

              <div className="event-info">
                <h2 className="event-name">{r.eventName}</h2>

                <div className="event-details">
                  <p>📅 <strong>Date:</strong> {r.date || "N/A"}</p>
                  <p>📍 <strong>Location:</strong> {r.location || "N/A"}</p>
                  <p>🆔 <strong>Event ID:</strong> {r.eventId}</p>
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
