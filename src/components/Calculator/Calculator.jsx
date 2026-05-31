import React from "react";
import { useEffect, useState, useRef } from "react";
import clickSound from "../../sounds/ClickSound.m4a";
import limitTime from "../../sounds/LimitTime.m4a";
import start from "../../sounds/Start.m4a";
import finish from "../../sounds/Finsh.m4a";
import "./Calculator.css";
export default function Calculator({ workouts, allowSound }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(80);
  const [durationBreak, setDurationBreak] = useState(5);
  const [extraMinutes, setExtraMinutes] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const duration = (number * sets * speed) / 60 + (sets - 1) * durationBreak;
  const calculatedDuration = duration + extraMinutes;
  const startAudio = useRef(new Audio(start));
  const stopAudio = useRef(new Audio(finish));
  const limitAudio = useRef(new Audio(limitTime));
  const clickAudio = useRef(new Audio(clickSound));
  function playSound(audioRef) {
    if (!allowSound) return;
    startAudio.current.pause();
    limitAudio.current.pause();
    stopAudio.current.pause();
    startAudio.current.currentTime = 0;
    limitAudio.current.currentTime = 0;
    stopAudio.current.currentTime = 0;
    audioRef.current.play();
  }
  function handleInc() {
    playSound(clickAudio);
    setExtraMinutes((calculatedDuration) => calculatedDuration + 1);
  }
  function handleDec() {
    playSound(clickAudio);
    setExtraMinutes((calculatedDuration) => calculatedDuration - 1);
  }
  const intervalRef = useRef(null);
  const pausedTimerRef = useRef(null);
  const initialTimerRef = useRef(0);
  function handleStart() {
    playSound(startAudio);
    if (timer === 0) {
      const value = calculatedDuration * 60;
      setTimer(value);
      initialTimerRef.current = value;
    }

    setIsRunning(true);
  }
  function handlePause() {
    playSound(clickAudio);
    pausedTimerRef.current = timer;
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev < 1) {
          playSound(stopAudio);
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        if (prev <= 6) {
          playSound(limitAudio);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);
  const mins = Math.floor(calculatedDuration);
  const seconds = Math.round((calculatedDuration - mins) * 60);
  const minsTimer = Math.floor(timer / 60);
  const secondsTimer = timer % 60;

  return (
    <>
      <form className="form-calculator">
        <div>
          <label>Type of workout</label>
          <select value={number} onChange={(e) => setNumber(+e.target.value)}>
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name}({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>How many sets?</label>
          <input
            type="range"
            min="1"
            max="5"
            value={sets}
            onChange={(e) => {
              playSound(clickAudio);
              setSets(+e.target.value);
            }}
          />
          <span>{sets}</span>
        </div>
        <div>
          <label>How fast are you?</label>
          <input
            type="range"
            min="30"
            max="150"
            step="30"
            value={speed}
            onChange={(e) => {
              playSound(clickAudio);
              setSpeed(e.target.value);
            }}
          />
          <span>{speed} sex/exercise</span>
        </div>
        <div>
          <label>Break leangth</label>
          <input
            type="range"
            min="1"
            max="10"
            value={durationBreak}
            onChange={(e) => {
              playSound(clickAudio);
              setDurationBreak(e.target.value);
            }}
          />
          <span>{durationBreak} minutes/break</span>
        </div>
      </form>
      <section className="counter">
        <h3>Counter:</h3>
        <button onClick={handleDec}>-</button>
        <p>
          {mins < 10 && "0"}
          {mins}:{seconds < 10 && "0"}
          {seconds}
        </p>
        <button onClick={handleInc}>+</button>
      </section>
      <section className="timer">
        <button className="timer-btn" onClick={handleStart}>
          Start
        </button>
        <p>
          {minsTimer < 10 && "0"}
          {minsTimer}:{secondsTimer < 10 && "0"}
          {secondsTimer}
        </p>
        <button className="timer-btn" onClick={handlePause}>
          Stop
        </button>
      </section>
    </>
  );
}
