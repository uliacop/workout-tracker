import "./Sounds.css";

export default function Sounds({ allowSound, setAllowSound }) {
  return (
    <button className="btn-sounds" onClick={() => setAllowSound(!allowSound)}>
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}
