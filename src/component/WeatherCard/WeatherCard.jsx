import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import Badges from "../common/Badges";
import bgImg from "../../assets/image.png";
export default function WeatherCard() {
  return (
    <article
      className="p-8 shadow-2xl container rounded-2xl max-w-2xl min-w-xs mx-auto object-contain "
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <CardHeader />
      <CardBody />
    </article>
  );
}
