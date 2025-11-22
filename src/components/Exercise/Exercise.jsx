export default function Exercise({
  exercise,
  onDeleteExercise,
  onToggleExercise,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={exercise.completed}
        onChange={onToggleExercise}
      />
      <span
        style={exercise.completed ? { textDecoration: "line-through" } : {}}
      >
        {exercise.quantity} {exercise.description}
      </span>

      <button onClick={onDeleteExercise}>❌</button>
    </li>
  );
}
