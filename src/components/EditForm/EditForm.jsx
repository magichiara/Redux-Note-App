import "./editform.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editNote } from "../../store/appSlice";

const EditForm = ({ note, handleModal }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [label, setLabel] = useState(note.label);

  const handleTitleChange = (event) => {
    if (event.target.value === note.title) {
      setTitle("");
    } else {
      setTitle(event.target.value);
    }
  };

  const handleContentChange = (event) => {
    if (event.target.value === note.content) {
      setContent("");
    } else {
      setContent(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      editNote({
        id: note.id,
        title: title,
        content: content,
        label: label,
      })
    );
    handleModal();
  };

  return (
    <div className="EditForm">
      <h3>EDIT NOTE</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Title"
          onClick={handleTitleChange}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          id="content"
          value={content}
          placeholder="Description"
          onClick={handleContentChange}
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
        <button type="submit">CONFIRM</button>
      </form>
    </div>
  );
};

export default EditForm;
