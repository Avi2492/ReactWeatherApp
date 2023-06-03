export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "66f7874bb4mshab6f6d13ec4fdaap12e9a4jsn560c9477cd1b",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL =
  "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = "c434f1d12c0a7b76fa520b421caaa209";
// try {
//   const response = await fetch(url, geoApiOptions);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
