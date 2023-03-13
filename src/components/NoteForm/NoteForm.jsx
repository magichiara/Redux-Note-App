import "./noteform.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNote } from "../../store/appSlice";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("work");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = nanoid();
    dispatch(
      addNote({
        id,
        title,
        content,
        label,
      })
    );
    setTitle("");
    setContent("");
    setLabel("work");
  };

  return (
    <div className="NoteForm">
      <h2>ADD NOTE</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          maxLength={100}
          id="Content"
          value={content}
          placeholder="Description"
          onChange={(event) => setContent(event.target.value)}
        />

        <select
          id="label"
          value={label}
          onChange={(event) => setLabel(event.target.value)}
        >
          <option value="work">work</option>
          <option value="personal">personal</option>
          <option value="events">events</option>
        </select>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default NoteForm;
