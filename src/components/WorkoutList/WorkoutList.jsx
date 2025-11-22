import { useState } from "react";
import Exercise from "../Exercise/Exercise";
import "./WorkoutList.css";
export default function WorkoutList({
  exercises,
  onDeleteExercise,
  onToggleExercise,
  onClearListExercise,
  filterExercises,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedExercises;
  if (sortBy === "input") sortedExercises = exercises;
  if (sortBy === "description")
    sortedExercises = exercises
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "completed")
    sortedExercises = exercises
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));
  return (
    <div className="list">
      <ul>
        {sortedExercises.map((exercise) => (
          <Exercise
            data={filterExercises}
            exercise={exercise}
            key={exercise.id}
            onDeleteExercise={() => onDeleteExercise(exercise.id)}
            onToggleExercise={() => onToggleExercise(exercise.id)}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="completed">Sort by completed</option>
        </select>
        <button onClick={onClearListExercise}>Clear List of Exercises</button>
      </div>
    </div>
  );
}
