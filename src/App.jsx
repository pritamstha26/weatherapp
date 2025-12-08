import { useContext, useEffect, useState } from "react";
import BadgeList from "./component/BadgeList/BadgeList";
import WeatherCard from "./component/WeatherCard/WeatherCard";
import Button from "./component/common/Button";
import SearchBar from "./component/common/SearchBar";
import { WeatherContext } from "./context/WeatherContext";
export default function App() {
  const [city, setCity] = useState("");
  const { handleSubmit, data } = useContext(WeatherContext);
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(city);
    setCity("");
  };
  return (
    <div className="text-2xl  ">
      <form
        onSubmit={onSubmit}
        className="m-4 gap-2 justify-center  flex flex-wrap "
      >
        <SearchBar setCity={setCity} city={city} />
        <Button type="submit" />
      </form>

      <WeatherCard />
      <BadgeList />
    </div>
  );
}
