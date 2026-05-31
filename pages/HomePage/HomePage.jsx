import React from "react";
import { useState, useEffect } from "react";
import { Slider } from "../../src/components/Slider/Slider";
import Form from "../../src/components/Form/Form";
import Filter from "../../src/components/Filter/Filter";
import WorkoutList from "../../src/components/WorkoutList/WorkoutList";
import Stats from "../../src/components/Stats/Stats";
export default function HomePage() {
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
    <div>
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
