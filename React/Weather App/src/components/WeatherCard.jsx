export default function WeatherCard({ data }) {
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <h1>{Math.round(data.main.temp)}°C</h1>
      <p>{data.weather[0].description}</p>

      <div className="details">
        <span>Humidity: {data.main.humidity}%</span>
        <span>Wind: {data.wind.speed} km/h</span>
      </div>
    </div>
  );
}