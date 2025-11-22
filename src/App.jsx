import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";
import { useState, useEffect } from "react";
import WorkoutList from "./components/WorkoutList/WorkoutList";
import Stats from "./components/Stats/Stats";
import Filter from "./components/Filter/Filter";
import "./App.css";
import { Slider } from "./components/Slider/Slider";
function App() {
  const [exercises, setExercises] = useState(() => {
    const savedExercises = window.localStorage.getItem("saved-exercises");
    return savedExercises ? JSON.parse(savedExercises) : [];
  });
  const [filter, setFilter] = useState("");
  useEffect(() => {
    window.localStorage.setItem("saved-exercises", JSON.stringify(exercises));
  }, [exercises]);
  function handleAddExercise(exercise) {
    setExercises((exercises) => [...exercises, exercise]);
  }
  function handleDeleteExercise(id) {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  }
  const visibleExercises = exercises.filter((exercise) =>
    exercise.description.toLowerCase().includes(filter.toLowerCase())
  );
  function handleToggleExercise(id) {
    setExercises(
      exercises.map((exercise) =>
        exercise.id === id
          ? { ...exercise, completed: !exercise.completed }
          : exercise
      )
    );
  }
  function handleClearList() {
    setExercises([]);
  }
  return (
    <div className="app">
      <Logo />
      <Slider />
      <Form onAddExercise={handleAddExercise} />
      <Filter value={filter} onFilter={setFilter} />
      <WorkoutList
        exercises={visibleExercises}
        onDeleteExercise={handleDeleteExercise}
        onToggleExercise={handleToggleExercise}
        onClearListExercise={handleClearList}
        filterExercises={visibleExercises}
      />
      <Stats exercises={exercises} />
    </div>
  );
}

export default App;
