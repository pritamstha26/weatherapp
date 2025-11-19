import { useContext } from "react";
import { IoIosPartlySunny } from "react-icons/io";
import { WeatherContext } from "../../context/WeatherContext";
export default function CardBody() {
  const { data } = useContext(WeatherContext);
  return (
    <section className="">
      <div className="grid  grid-cols-2 py-5">
        <div className="col-span-1 flex justify-start gap-3 items-center">
          <IoIosPartlySunny />
          <p>
            12 &deg;<sup>F</sup>
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="text-sm md:text-lg">{data?.weather[0]?.main}</h4>
          <h3 className="text-sm md:text-lg">
            Feels Like {data?.main?.temp}&deg;C
          </h3>
        </div>
      </div>
      <div>
        <p className="text-lg">
          THere might be {data?.weather[0]?.description}
        </p>
      </div>
    </section>
  );
}
