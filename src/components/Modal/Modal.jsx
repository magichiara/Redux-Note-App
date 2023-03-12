import "./modal.scss";
import EditForm from "../EditForm/EditForm";

const Modal = ({ handleModal, note }) => {
  return (
    <div className="Modal">
      <div className="overlay" onClick={handleModal}></div>
      <div className="form">
        <EditForm note={note} handleModal={handleModal} />
      </div>
    </div>
  );
};

export default Modal;
