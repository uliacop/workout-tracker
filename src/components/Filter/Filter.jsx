import { IoMdCloseCircleOutline } from "react-icons/io";

import "./Filter.css";
export default function Filter({ value, onFilter }) {
  return (
    <div className="filter">
      <p>Search by name</p>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
        <button className="clear-button" onClick={() => onFilter("")}>
          <IoMdCloseCircleOutline />
        </button>
      </div>
    </div>
  );
}
