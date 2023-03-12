import "./filterbtns.scss";
import { useState } from "react";
import FilterBtn from "../../atoms/FilterBtn/FilterBtn";

const FilterBtns = ({ setCurrentFilter }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
    setActiveFilter(filter);
  };

  return (
    <div className="FilterBtns">
      <FilterBtn
        type="all"
        func={handleFilterClick}
        activeFilter={activeFilter}
      />
      <FilterBtn
        type="work"
        func={handleFilterClick}
        activeFilter={activeFilter}
      />
      <FilterBtn
        type="personal"
        func={handleFilterClick}
        activeFilter={activeFilter}
      />
      <FilterBtn
        type="events"
        func={handleFilterClick}
        activeFilter={activeFilter}
      />
    </div>
  );
};

export default FilterBtns;
