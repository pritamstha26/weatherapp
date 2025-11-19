import axios from "axios";

const instances = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  timeout: 2000,
  params: {
    appid: import.meta.env.VITE_WEATHER_API,
    units: "metric",
  },
});
export const getCurrentLocation = async () => {
  const loc = await instances.get("", {
    params: {
      q: "jakarta",
    },
  });
  return loc.data;
};
export default instances;
