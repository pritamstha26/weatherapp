import axios from "axios";

const instances = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  timeout: 2000,
  params: {
    appid: import.meta.env.VITE_WEATHER_API,
    units: "metric",
  },
});
export const getCurrentLocation = async (lat, lon) => {
  const loc = await instances.get("", {
    params: {
      lat,
      lon,
      units: "metric",
    },
  });
  return loc.data;
};
export const searchByName = async (cityName) => {
  const name = await instances.get("", {
    params: { q: cityName },
  });
  return name.data;
};

export default instances;
