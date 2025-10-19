import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "../styles/global.css";

const EventList = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const mockEvents = [
      {
        id: "1",
        name: "Startup Innovation Meetup",
        date: "2025-11-05",
        location: "Karachi Expo Center",
        image:
          "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: "2",
        name: "Green Planet Sustainability Summit",
        date: "2025-11-12",
        location: "Lahore Convention Hall",
        image:
          "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: "3",
        name: "Design & UI Masterclass",
        date: "2025-11-20",
        location: "Islamabad Design Hub",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: "4",
        name: "Frontend Developers Conference",
        date: "2025-11-25",
        location: "Online (Zoom)",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=60",
      },
    ];
    setEvents(mockEvents);
  }, []);

  // 🧠 Handle drag-drop reordering
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(events);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setEvents(reordered);
  };

  const handleRegister = (id) => {
    navigate(`/register/${id}`);
  };

  return (
    <section className="event-section">
      <h1 className="event-heading">🎯 Drag & Drop to Reorder Events</h1>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="events">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="event-grid"
            >
              {events.map((event, index) => (
                <Draggable key={event.id} draggableId={event.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="event-card"
                    >
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default EventList;
