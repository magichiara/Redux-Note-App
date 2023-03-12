import "./notelist.scss";
import { useSelector } from "react-redux";
import { setFilter } from "../../store/appSlice";
import NoteItem from "../NoteItem/NoteItem";

const NoteList = ({ currentFilter }) => {
  const { notes, message, filter } = useSelector((state) => state.app);

  const filterNotes = (notes, filter) => {
    if (filter === "all") {
      return notes;
    }
    return notes.filter((note) => note.label === filter);
  };

  const filteredNotes = filterNotes(
    notes.filter((note) =>
      note.title.toLowerCase().includes(filter.toLowerCase())
    ),
    currentFilter
  );

  return (
    <div className="NoteList">
      <h3 className="section_title">YOUR NOTES</h3>
      <div className="container">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => <NoteItem key={note.id} note={note} />)
        ) : filter ? (
          <p className="no-results">No results found</p>
        ) : (
          <p>{message}</p>
        )}
      </div>
    </div>
  );
};

export default NoteList;
