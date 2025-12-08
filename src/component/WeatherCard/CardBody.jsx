import { useContext } from "react";
import { IoIosPartlySunny } from "react-icons/io";
import { WeatherContext } from "../../context/WeatherContext";
export default function CardBody() {
  const { data } = useContext(WeatherContext);
  if (!data) return <div>Loading</div>;
  return (
    <section className="">
      <div className="grid  grid-cols-2  py-5">
        <div className="col-span-1 flex justify-start gap-3 items-center">
          <IoIosPartlySunny />
          <p>
            {data?.main.temp}
            <sup>&deg;</sup>C
          </p>
        </div>
        <div className="col-span-1 text-center">
          <h4 className="text-sm md:text-lg">{data?.weather[0]?.main}</h4>
          <h3 className="text-sm md:text-lg">
            Feels Like {data?.main?.temp}&deg;C
          </h3>
        </div>
      </div>
      <div>
        <p>
          {data?.name}, {data?.sys?.country}{" "}
        </p>
        <p className="text-lg">
          There might be {data?.weather[0]?.description}
        </p>
      </div>
    </section>
  );
}
