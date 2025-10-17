import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

const EventList = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  // Mock data
  const mockEvents = React.useMemo(
    () => [
      {
        id: 1,
        name: "Startup Innovation Meetup",
        date: "2025-11-05",
        location: "Karachi Expo Center",
        image:
          "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 2,
        name: "Green Planet Sustainability Summit",
        date: "2025-11-12",
        location: "Lahore Convention Hall",
        image:
          "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        name: "Design & UI Masterclass",
        date: "2025-11-20",
        location: "Islamabad Design Hub",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        name: "Frontend Developers Conference",
        date: "2025-11-25",
        location: "Online (Zoom)",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 5,
        name: "Neon Tech Fest",
        date: "2025-12-01",
        location: "Hyderabad Tech Park",
        image:
          "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=800&q=60",
      },
    ],
    []
  );

  // ✅ No more ESLint warning
  useEffect(() => {
    setEvents(mockEvents);
  }, [mockEvents]);

  const handleRegister = (id) => {
    navigate(`/register/${id}`);
  };

  return (
    <section className="event-section">
      <h1 className="event-heading">✨ Discover & Register for Amazing Events</h1>
      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} />
            <div className="event-info">
              <h2 className="event-name">{event.name}</h2>
              <div className="event-details">
                <p>📅 {event.date}</p>
                <p>📍 {event.location}</p>
              </div>
              <button
                className="event-btn"
                onClick={() => handleRegister(event.id)}
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventList;
