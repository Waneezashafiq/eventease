import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "../features/events/eventsSlice";
import registrationReducer from "../features/registrations/registrationSlice";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    registrations: registrationReducer,
  },
});

export default store;
