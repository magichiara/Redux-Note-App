import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    editNote: (state, action) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      state.notes[index] = action.payload;
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addNote, deleteNote, editNote, setNotes, setFilter } =
  appSlice.actions;

export default appSlice.reducer;
