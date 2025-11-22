import "./Stats.css";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export default function Stats({ exercises }) {
  const { width, height } = useWindowSize();
  if (!exercises.length)
    return (
      <p className="stats">
        <em>Time to train!Add exercises</em>
      </p>
    );
  const numexercises = exercises.length;
  const compexer = exercises.filter((exercise) => exercise.completed).length;
  const perexer = Math.round((compexer / numexercises) * 100);
  return (
    <footer className="stats">
      {perexer === 100 ? (
        <>
          <Confetti width={width} height={height} />
          Great job! Your workout is complete!
        </>
      ) : (
        `You have ${numexercises} exercises on your list and you alredy completed ${compexer} (${perexer}%)`
      )}
    </footer>
  );
}
