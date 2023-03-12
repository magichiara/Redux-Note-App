import "./noteitem.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteNote } from "../../store/appSlice";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import Modal from "../Modal/Modal";

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const getLabelColor = (label) => {
    switch (label) {
      case "work":
        return "label-work";
      case "personal":
        return "label-personal";
      case "events":
        return "label-events";
      case "home":
        return "label-home";
      default:
        return "";
    }
  };

  function getTodayDate() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;

    return `${currentDay}.${currentMonth}`;
  }

  const date = getTodayDate();

  return (
    <div className="NoteItem">
      <h3 className="title">{note.title}</h3>
      <p className="content">{note.content}</p>
      <div className="note-label">
        <div className={`label-color ${getLabelColor(note.label)}`}></div>
        <p className="label-text">{note.label}</p>
      </div>

      <div className="icons-wrapper">
        <div className="icons">
          <i onClick={handleDelete}>
            <BsTrash />
          </i>
          <i onClick={() => handleModal()}>
            <FiEdit />
          </i>
        </div>
        <p className="date">TODAY {date}</p>
      </div>

      {showModal && <Modal note={note} handleModal={handleModal} />}
    </div>
  );
};

export default NoteItem;
