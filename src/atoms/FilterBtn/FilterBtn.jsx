const FilterBtn = ({ type, activeFilter, func }) => {
  return (
    <button
      className={`${type} ${
        activeFilter === `${type}` ? `active-${type}` : ""
      }`}
      onClick={() => func(type)}
    >
      {type}
    </button>
  );
};

export default FilterBtn;
