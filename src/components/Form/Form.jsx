import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import "./Form.css";
export default function Form({ onAddExercise }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      toast.success("You need to add an exercise");
      return;
    }
    const newExercise = {
      description,
      quantity,
      completed: false,
      id: uuidv4(),
    };
    console.log(newExercise);
    onAddExercise(newExercise);
    setDescription("");
    setQuantity(1);
  }

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>Which exercises do you want to train today?</h2>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (__, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={description}
          placeholder="Exercise"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add exercise</button>
        <Toaster position="top-center" reverseOrder={false} />
      </form>
    </div>
  );
}
