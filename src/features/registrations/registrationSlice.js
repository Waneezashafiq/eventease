import { createSlice } from "@reduxjs/toolkit";

// ✅ LocalStorage se data load karna
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("registrations");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// ✅ LocalStorage me data save karna
const saveToLocalStorage = (data) => {
  try {
    localStorage.setItem("registrations", JSON.stringify(data));
  } catch (error) {
    console.error("LocalStorage save error:", error);
  }
};

const initialState = {
  registrations: loadFromLocalStorage(),
};

const registrationSlice = createSlice({
  name: "registrations",
  initialState,
  reducers: {
    addRegistration: (state, action) => {
      // check if registration already exists (by email + event id)
      const exists = state.registrations.some(
        (r) =>
          r.email === action.payload.email &&
          r.event.id === action.payload.event.id
      );

      if (!exists) {
        state.registrations.push(action.payload);
        saveToLocalStorage(state.registrations); // ✅ immediately save updated state
      }
    },

    removeRegistration: (state, action) => {
      state.registrations = state.registrations.filter(
        (r) => r.event.id !== action.payload
      );
      saveToLocalStorage(state.registrations);
    },

    clearRegistrations: (state) => {
      state.registrations = [];
      localStorage.removeItem("registrations");
    },
  },
});

export const { addRegistration, removeRegistration, clearRegistrations } =
  registrationSlice.actions;

export default registrationSlice.reducer;
