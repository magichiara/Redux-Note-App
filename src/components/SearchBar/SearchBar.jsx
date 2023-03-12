import "./searchbar.scss";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/appSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.app.filter);
  const [inputValue, setInputValue] = useState(filter);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch(setFilter(value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setFilter(inputValue));
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={inputValue}
          placeholder="Search notes"
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
