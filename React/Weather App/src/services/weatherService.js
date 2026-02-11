import axios from "axios";

const API_KEY = "aef20d5381ff867b3ffe6a3f38f07392";

export const getWeather = async (city) => {
  try {
    const res = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    return res.data;
  } catch (err) {
    console.error(err);
    throw err.response?.data?.message || "City not found";
  }
};