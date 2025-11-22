import "./Logo.css";
import { IoFitnessSharp } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
export default function Logo() {
  return (
    <h1>
      <IoFitnessSharp className="react-icon" />
      workout tracker
      <IoIosFitness className="react-icon" />
    </h1>
  );
}
