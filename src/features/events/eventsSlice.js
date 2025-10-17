import { createSlice } from "@reduxjs/toolkit";
import { mockEvents } from "../../api/mockApi";

const savedEvents = JSON.parse(localStorage.getItem("eventsOrder"));

const initialState = {
  events: savedEvents || mockEvents,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    reorderEvents: (state, action) => {
      state.events = action.payload;
      localStorage.setItem("eventsOrder", JSON.stringify(state.events));
    },
  },
});

export const { reorderEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
