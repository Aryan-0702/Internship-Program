export default function Card({ title, value }) {
  return (
    <div className="card-box">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}