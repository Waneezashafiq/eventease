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
    // ✅ Add Registration (Prevent duplicate for same event only)
    addRegistration: (state, action) => {
      const existing = state.registrations.some(
        (r) =>
          r.email === action.payload.email &&
          r.phone === action.payload.phone &&
          r.eventId === action.payload.eventId
      );

      if (!existing) {
        state.registrations.push(action.payload);
        saveToLocalStorage(state.registrations);
      }
    },

    // ✅ Remove specific registration
    removeRegistration: (state, action) => {
      state.registrations = state.registrations.filter(
        (r) => r.eventId !== action.payload
      );
      saveToLocalStorage(state.registrations);
    },

    // ✅ Clear all registrations
    clearRegistrations: (state) => {
      state.registrations = [];
      localStorage.removeItem("registrations");
    },
  },
});

export const { addRegistration, removeRegistration, clearRegistrations } =
  registrationSlice.actions;

export default registrationSlice.reducer;
