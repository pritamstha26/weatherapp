import { useState } from "react";
import BadgeList from "./component/BadgeList/BadgeList";
import WeatherCard from "./component/WeatherCard/WeatherCard";
import Button from "./component/common/Button";
import SearchBar from "./component/common/SearchBar";

export default function App() {
  const [city, setCity] = useState("");
  const [coords, setCoords] = useState(null);
  const handleLocation = async (e) => {
    e.preventDefault();

    if (city.trim()) {
      setCity(null);
      return;
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoords({
            lon: pos.coords.longitude,
            lat: pos.coords.latitude,
          });
        },
        (err) => {
          console.error("Error getting user location");
        }
      );
    } else {
      alert("Geolocation not supported");
    }
  };

  return (
    <div className="text-2xl  ">
      <form
        onSubmit={handleLocation}
        className="m-4 gap-2 justify-center  flex flex-wrap "
      >
        <SearchBar setCity={setCity} />
        <Button />
      </form>

      <WeatherCard />
      <BadgeList />
    </div>
  );
}
