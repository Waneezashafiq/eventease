import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventList from "./pages/EventList";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import MyRegistrations from "./pages/MyRegistrations";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<EventList />} />
            <Route path="/register/:id" element={<Register />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/my-registrations" element={<MyRegistrations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
