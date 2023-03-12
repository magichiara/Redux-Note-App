import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import LoginForm from "./components/LoginForm/LoginForm";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterBtns from "./components/FilterBtns/FilterBtns";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setNotes } from "./store/appSlice";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      dispatch(setNotes(JSON.parse(savedNotes)));
    }
  }, [dispatch]);

  return (
    <div className="App">
      {isAuthenticated ? (
        <MainLayout>
          <SearchBar />
          <FilterBtns setCurrentFilter={setCurrentFilter} />
          <NoteForm />
          <NoteList currentFilter={currentFilter} />
        </MainLayout>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
