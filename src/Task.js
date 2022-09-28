import "./task.css";

export default function Taskcard({ ready }) {
  return (
    <div className="card">
      <h1>Mi primer Tarea</h1>
      <span className={ready ? 'bg-green' : 'bg-red'}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
