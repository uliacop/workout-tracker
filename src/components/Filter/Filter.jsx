import { IoSearchOutline } from "react-icons/io5";
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
      </div>
    </div>
  );
}
