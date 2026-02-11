import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { getWeather } from "./services/weatherService";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const defaultCities = ["Surat","Valsad","Bilimora"];

  const searchCity = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">

      <SearchBar onSearch={searchCity} />

      {/* Default City Buttons */}
      <div className="defaultCities">
        {defaultCities.map(city=>(
          <button
            key={city}
            className="cityBtn"
            onClick={()=>searchCity(city)}
          >
            {city}
          </button>
        ))}
      </div>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard data={weather} />}

    </div>
  );
}