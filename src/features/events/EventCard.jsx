import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <img src={event.image} alt={event.name} className="h-48 w-full object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-violet-700">{event.name}</h3>
        <p className="text-sm text-gray-500">{event.date}</p>
        <p className="text-sm text-gray-600">{event.location}</p>
        <button
          onClick={() => navigate(`/register/${event.id}`)}
          className="w-full mt-3 bg-gradient-to-r from-violet-600 to-sky-400 text-white py-2 rounded-lg hover:opacity-90"
        >
          Register
        </button>
      </div>
    </motion.div>
  );
};

export default EventCard;
