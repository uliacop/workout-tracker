import React from "react";
import { useState, useMemo } from "react";
import Sounds from "../../src/components/Sounds/Sounds";
import Calculator from "../../src/components/Calculator/Calculator";
import "./TimePage.css";
function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

export default function TimerPage() {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));
  const partOfDay = time.slice(-2);
  const workouts = useMemo(() => {
    return [
      {
        name: "Upper body blast",
        numExercises: partOfDay === "AM" ? 8 : 7,
      },
      {
        name: "Push day (chest + triceps)",
        numExercises: 6,
      },
      {
        name: "Pull day (back + biceps)",
        numExercises: 5,
      },
      {
        name: "Leg power session",
        numExercises: 7,
      },
      {
        name: "Core & stability",
        numExercises: partOfDay === "AM" ? 6 : 5,
      },
    ];
  }, [partOfDay]);
  return (
    <div>
      <h2>Workout timer</h2>
      <time>For your workout on {time}</time>
      <Sounds allowSound={allowSound} setAllowSound={setAllowSound} />
      <Calculator workouts={workouts} allowSound={allowSound} />
    </div>
  );
}
