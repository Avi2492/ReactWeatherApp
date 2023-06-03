import { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/search/api";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    if (searchData && searchData.value) {
      const [lat, lon] = searchData.value.split(" ");

      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );

      const forecastWeatherFetch = fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );

      Promise.all([currentWeatherFetch, forecastWeatherFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forecastResponse = await response[1].json();

          setCurrentWeatherData({ city: searchData.label, ...weatherResponse });
          setForecast({ city: searchData.label, ...forecastResponse });
        })
        .catch((err) => console.log(err));
    }
  };

  // console.log(currentWeatherData);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />

      {currentWeatherData && <CurrentWeather data={currentWeatherData} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
